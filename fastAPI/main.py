import uvicorn
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from starlette.middleware.cors import CORSMiddleware

import schemas
from crud import CRUD_User
from db.database import SessionLocal

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/add_user", response_model=schemas.User)
def add_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    return CRUD_User.create(db=db, user_in=user)


@app.get("/users", response_model=list[schemas.User])
def users(db: Session = Depends(get_db)):
    return CRUD_User.get_all(db=db)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=3002)
