from typing import Optional

from pydantic import BaseModel


class UserBase(BaseModel):
    Id: int
    FirstName: str
    LastName: str


class UserCreate(BaseModel):
    FirstName: str
    LastName: str


class User(UserBase):
    class Config:
        orm_mode = True
