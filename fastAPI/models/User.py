from sqlalchemy import Column, Integer, String

from db.database import Base


class User(Base):
    __tablename__ = 'users'
    Id = Column(Integer, primary_key=True)
    FirstName = Column(String)
    LastName = Column(String)
