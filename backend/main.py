# from fastapi import FastAPI, Depends
# from sqlalchemy.orm import Session
# from sqlalchemy.orm import sessionmaker
# from sqlalchemy import create_engine

# app = FastAPI()


# # Replace this with your PostgreSQL server URL
# DATABASE_URL = "postgresql://postgres:o83714ElKCGvMJYk@db.rglfwncykgsxjvmwjfgz.supabase.co:5432/postgres"

# # Create the database engine
# engine = create_engine(DATABASE_URL)

# # Create a sessionmaker to create sessions to the database
# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# # Dependency to get a database session
# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()

# @app.get("/")
# def read_root(db: Session = Depends(get_db)):
#     # Do something with the database session
#     return {"Hello": "World"}

# @app.get('/hello')
# def root():
#     return {'message': 'Hello Krissh'}



# @app.on_event("startup")
# async def startup():
#     # Connect to the PostgreSQL database
#     app.state.pg_pool = await asyncpg.create_pool(dsn=DATABASE_URL)

# @app.on_event("shutdown")
# async def shutdown():
#     # Close the PostgreSQL database connection pool
#     await app.state.pg_pool.close()

# @app.get("/donor")
# async def table_data():
#     async with app.state.pg_pool.acquire() as conn:
#         # Execute a SELECT statement on the table you want to display
#         rows = await conn.fetch("SELECT * FROM donor")
#         # Return the data as a list of dictionaries
#         return [dict(row) for row in rows]
    
# @app.get("/recipient")
# async def table_data():
#     async with app.state.pg_pool.acquire() as conn:
#         # Execute a SELECT statement on the table you want to display
#         rows = await conn.fetch("SELECT * FROM recipient")
#         # Return the data as a list of dictionaries
#         return [dict(row) for row in rows]
    

from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from sqlalchemy import create_engine, Column, Integer, String, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
import asyncpg

app = FastAPI()

# Set up CORS
origins = [
    "http://localhost",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Set up database connection
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:o83714ElKCGvMJYk@db.rglfwncykgsxjvmwjfgz.supabase.co:5432/postgres"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

# Create the database engine
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Create a sessionmaker to create sessions to the database
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Dependency to get a database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root(db: Session = Depends(get_db)):
    # Do something with the database session
    return {"Hello": "World"}

@app.get('/hello')
def root():
    return {'message': 'Hello Krissh'}



@app.on_event("startup")
async def startup():
    # Connect to the PostgreSQL database
    app.state.pg_pool = await asyncpg.create_pool(dsn=SQLALCHEMY_DATABASE_URL)

@app.on_event("shutdown")
async def shutdown():
    # Close the PostgreSQL database connection pool
    await app.state.pg_pool.close()

# Define database model
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)

# Define request body schema
class UserCreate(BaseModel):
    username: str
    email: str
    password: str

# Create endpoint to handle POST requests to /signup
@app.post("/signup")
def create_user(user: UserCreate, db: SessionLocal = Depends(get_db)):
    db_user = User(username=user.username, email=user.email, password=user.password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


@app.get('/hello')
def root():
    return {'message': 'Hello Krissh'}

@app.get("/donor")
async def table_data():
    async with app.state.pg_pool.acquire() as conn:
        # Execute a SELECT statement on the table you want to display
        rows = await conn.fetch("SELECT * FROM donor")
        # Return the data as a list of dictionaries
        return [dict(row) for row in rows]
    

# Donor CRUD
# Define database model
class Donor(Base):
    __tablename__ = "donor"
    id = Column(Integer, primary_key=True, index=True)
    password = Column(String)
    gender = Column(String)
    firstName = Column(String)
    lastName = Column(String)
    userName = Column(String, unique=True, index=True)
    emailID = Column(String, unique=True, index=True)
    contactNo = Column(Integer)
    age = Column(Integer)
    height = Column(Integer)
    weight = Column(Integer)
    testedCovid = Column(Boolean)
    testedHiv = Column(Boolean)
    lasttimeDonatedblood = Column(String)
    anyundergoingMedication = Column(String)
    anyotherHealthissue = Column(String)

# Define request body schema
class DonorCreate(BaseModel):
    password: str
    gender: str
    firstName: str
    lastName: str
    userName: str
    emailID: str
    contactNo: int
    age: int
    height: int
    weight: int
    testedCovid: bool
    testedHiv: bool
    lasttimeDonatedblood: Optional[str] = None
    anyundergoingMedication: Optional[str] = None
    anyotherHealthissue: Optional[str] = None

# Create endpoint to handle POST requests to /signup
@app.post("/donor-signup")
def create_donor(donor: DonorCreate, db: SessionLocal = Depends(get_db)):
    db_user = Donor(password=donor.password, gender = donor.gender, firstName = donor.firstName, lastName = donor.lastName,
                          userName = donor.userName, emailID = donor.emailID, contactNo = donor.contactNo, age = donor.age,
                          height = donor.height, weight = donor.weight, testedCovid = donor.testedCovid, testedHiv = donor.testedHiv,
                          lasttimeDonatedblood = donor.lasttimeDonatedblood, anyundergoingMedication = donor.anyundergoingMedication,
                          anyotherHealthissue = donor.anyotherHealthissue)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user