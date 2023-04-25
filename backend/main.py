from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from sqlalchemy import create_engine, Column, Integer, String, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
import asyncpg
from db import get_db, Base
from db import SessionLocal
from dotenv import load_dotenv
import smtplib
from email.mime.text import MIMEText

# Load values from .env file
load_dotenv()

# Access the values using the os module
import os

app = FastAPI()

# Set up CORS
origins = [
    "http://localhost",
    "http://localhost:3000",
    "https://lifesource.netlify.app",
    "https://life-source-backend.onrender.com"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root(db: Session = Depends(get_db)):
    return {"Hello": "World"}


@app.get('/hello')
def root():
    return {'message': 'Hello Krissh'}


@app.on_event("startup")
async def startup():
    # Connect to the PostgreSQL database
    app.state.pg_pool = await asyncpg.create_pool(dsn=os.getenv('DATABASE_URL'))


@app.on_event("shutdown")
async def shutdown():
    # Close the PostgreSQL database connection pool
    await app.state.pg_pool.close()
# ----------------------------------------------------------------------------------------------------------------
# User CRUD
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
    db_user = User(username=user.username,
                   email=user.email, password=user.password)
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

# ----------------------------------------------------------------------------------------------------------------
# Donor CRUD
# Define database model
class Donor(Base):
    __tablename__ = "donor"
    id = Column(Integer, primary_key=True, index=True)
    password = Column(String)
    gender = Column(String)
    bloodgroup = Column(String)
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
    bloodgroup : str
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
    lasttimeDonatedblood: str
    anyundergoingMedication: str
    anyotherHealthissue: str

# Create endpoint to handle POST requests to /signup
@app.post("/donor-signup")
def create_donor(donor: DonorCreate, db: SessionLocal = Depends(get_db)):
    db_user = Donor(password=donor.password, gender=donor.gender, firstName=donor.firstName, lastName=donor.lastName,
                    userName=donor.userName, emailID=donor.emailID, contactNo=donor.contactNo, age=donor.age,
                    height=donor.height, weight=donor.weight, testedCovid=donor.testedCovid, testedHiv=donor.testedHiv,
                    lasttimeDonatedblood=donor.lasttimeDonatedblood, anyundergoingMedication=donor.anyundergoingMedication,
                    anyotherHealthissue=donor.anyotherHealthissue, bloodgroup=donor.bloodgroup)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# Donor sign-in API
class DonorSignIn(BaseModel):
    email: str
    password: str
    remember_me: Optional[bool] = False

@app.post("/donor-login")
def donor_login(sign_in: DonorSignIn, db: SessionLocal = Depends(get_db)):
   # Check if the input is an email or username
    user = None
    if '@' in sign_in.email:
        # If input is an email, query by email
        user = db.query(Donor).filter_by(emailID=sign_in.email).first()
    else:
        # If input is a username, query by username
        user = db.query(Donor).filter_by(userName=sign_in.email).first()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    if not verify_password(sign_in.password, user.password):
        raise HTTPException(status_code=401, detail="Incorrect password")
    # return user data after successful login
    return user

# Fetch donor user details by username
@app.get("/donor/{username}")
def get_donor_by_username(username: str, db: Session = Depends(get_db)):
    db_user = db.query(Donor).filter(Donor.userName == username).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

# Update donor user profile
@app.put("/donor/{username}")
def update_donor_profile(username: str, donor: DonorCreate, db: Session = Depends(get_db)):
    db_user = db.query(Donor).filter(Donor.userName == username).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    update_data = donor.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_user, key, value)
    db.commit()
    db.refresh(db_user)
    return db_user

# ----------------------------------------------------------------------------------------------------------------
# Recipient CRUD
# Define database model
class Recipient(Base):
    __tablename__ = "recipient"
    id = Column(Integer, primary_key=True, index=True)
    password = Column(String)
    gender = Column(String)
    firstName = Column(String)
    lastName = Column(String)
    userName = Column(String, unique=True, index=True)
    emailID = Column(String, unique=True, index=True)
    contactNo = Column(Integer)
    age = Column(Integer)
    bloodgroup = Column(String)

# Define request body schema
class RecipientCreate(BaseModel):
    password: str
    gender: str
    firstName: str
    lastName: str
    userName: str
    emailID: str
    contactNo: int
    age: int
    bloodgroup: str

# Create endpoint to handle POST requests to /signup
@app.post("/recipient-signup")
def create_recipient(recipient: RecipientCreate, db: SessionLocal = Depends(get_db)):
    db_user = Recipient(password=recipient.password, gender=recipient.gender, firstName=recipient.firstName, lastName=recipient.lastName,
                        userName=recipient.userName, emailID=recipient.emailID, contactNo=recipient.contactNo, age=recipient.age,
                        bloodgroup=recipient.bloodgroup)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# Fetch recipient user details by username
@app.get("/recipient/{username}")
def get_donor_by_username(username: str, db: Session = Depends(get_db)):
    db_user = db.query(Recipient).filter(Recipient.userName == username).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

# Update recipient user profile
@app.put("/recipient/{username}")
def update_donor_profile(username: str, donor: RecipientCreate, db: Session = Depends(get_db)):
    db_user = db.query(Recipient).filter(Recipient.userName == username).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    update_data = donor.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_user, key, value)
    db.commit()
    db.refresh(db_user)
    return db_user

# Recipient sign-in API
class RecipientSignIn(BaseModel):
    email: str
    password: str
    remember_me: Optional[bool] = False

@app.post("/recipient-login")
def recipient_login(sign_in: RecipientSignIn, db: SessionLocal = Depends(get_db)):
    # Check if the input is an email or username
    user = None
    if '@' in sign_in.email:
        # If input is an email, query by email
        user = db.query(Recipient).filter_by(emailID=sign_in.email).first()
    else:
        # If input is a username, query by username
        user = db.query(Recipient).filter_by(userName=sign_in.email).first()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    if not verify_password(sign_in.password, user.password):
        raise HTTPException(status_code=401, detail="Incorrect password")
    # return user data after successful login
    return user


def verify_password(password1, password2):
    return password1 == password2

# Create endpoint to handle GET requests to /donor-list/<bloodgroup>
@app.get("/donor-list/{bloodgroup}")
def get_donor_list_by_bloodgroup(bloodgroup: str, db: Session = Depends(get_db)):
    donors = db.query(Donor).filter(Donor.bloodgroup == bloodgroup).all()
    return {"donors": donors}

# Define Feedback model
class Feedback(Base):
    __tablename__ = "feedback"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    subject = Column(String)
    message = Column(String)

# Define request body schema
class FeedbackCreate(BaseModel):
    name: str
    email: str
    subject: str
    message: str

# Create endpoint to handle POST requests to /feedback
@app.post("/feedback")
def create_feedback(feedback: FeedbackCreate, db: SessionLocal = Depends(get_db)):
    db_feedback = Feedback(name=feedback.name, email=feedback.email, subject=feedback.subject, message=feedback.message)
    db.add(db_feedback)
    db.commit()
    db.refresh(db_feedback)
    return db_feedback

# ------------------------------------------------------------------------------------------------------
# Define request body schema for forgot password
class ForgotPassword(BaseModel):
    email: str
    new_password: str


@app.post("/donor-forgot-password")
def donor_forgot_password(forgot_password: ForgotPassword, db: Session = Depends(get_db)):
    email = forgot_password.email
    new_password = forgot_password.new_password

    # Check if the provided email exists in the database
    donor = db.query(Donor).filter(Donor.emailID == email).first()
    if donor is None:
        return {"error": "Email not found"}

    # Update the donor's password in the database
    donor.password = new_password
    db.commit()

    # Send password reset email
    send_password_reset_email(donor.emailID)

    return {"message": "Password updated successfully. Please check your email for further instructions"}

@app.post("/recipient-forgot-password")
def recipient_forgot_password(forgot_password: ForgotPassword, db: Session = Depends(get_db)):
    email = forgot_password.email
    new_password = forgot_password.new_password

    # Check if the provided email exists in the database
    donor = db.query(Recipient).filter(Recipient.emailID == email).first()
    if donor is None:
        return {"error": "Email not found"}

    # Update the donor's password in the database
    donor.password = new_password
    db.commit()

    # Send password reset email
    send_password_reset_email(donor.emailID)

    return {"message": "Password updated successfully. Please check your email for further instructions"}


def send_password_reset_email(email: str):
    # Create SMTP connection
    smtp_server = "smtp-relay.sendinblue.com"  # Update with your SMTP server
    smtp_port = 587  # Update with your SMTP port
    smtp_username = "leviacekermanaot@gmail.com"  # Update with your SMTP username
    smtp_password = "7z2bnQXAYMV3S4ta"  # Update with your SMTP password
    from_email = "lifesource.purdue@gmail.com"  # Update with your email address
    to_email = email

    connection = smtplib.SMTP(smtp_server, smtp_port)
    connection.ehlo()
    connection.starttls()
    connection.login(smtp_username, smtp_password)

    # Create email message
    subject = "Password Reset"
    body = "Your password has been reset successfully. Please login with your new password."
    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = from_email
    msg['To'] = to_email

    # Send email
    connection.send_message(msg)
    connection.close()