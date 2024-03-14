from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship, sessionmaker, declarative_base
import sqlalchemy
from user import User
from werkzeug.security import check_password_hash, generate_password_hash


hostname = 'Bereketzeselassie.mysql.pythonanywhere-services.com'
username = 'Bereketzeselassi'
password = 'your_password'
database_name = 'Bereketzeselassi$realtime_db'

connection_string = f"mysql+pymysql://{username}:{password}@{hostname}/{database_name}"
engine = create_engine(connection_string)
Base = declarative_base()


Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
class Chatdbs:
    
    @staticmethod
    def new(username, email, password):
        
        hpassword = generate_password_hash(password)
        add = User(id='10', username=username, email=email, password=hpassword)
        session = Session()
        session.add(add)
        session.commit()

    def get_user(username):
        
        session = Session()
        return session.query(User).filter_by(username=username).first()
#password = 'passw'
#hpassword = generate_password_hash(password)
#us = User(id='4', username='bakii', email='email@bak', password=hpassword)
#us.save()