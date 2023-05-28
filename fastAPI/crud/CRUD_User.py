from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

import models
import schemas


def create(db: Session, user_in: schemas.UserCreate):
    user_data = jsonable_encoder(user_in)
    user = models.User(**user_data)
    db.add(user)
    db.commit()
    return user


def get_all(db: Session):
    return db.query(models.User).all()
