from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from sqlalchemy import create_engine, Column, Integer, String, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
import asyncpg
from dotenv import load_dotenv

# Load values from .env file
load_dotenv()

# Access the values using the os module
import os

endpoint = os.getenv('ENDPOINT')
db_url = os.getenv('DATABASE_URL')

# Set up database connection
SQLALCHEMY_DATABASE_URL = os.getenv('DATABASE_URL')
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
