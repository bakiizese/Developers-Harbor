from sqlalchemy import create_engine, Column, Integer, String, ForeignKey

from sqlalchemy.orm import relationship, sessionmaker, declarative_base
import sqlalchemy
#from db import Chatdbs
from werkzeug.security import check_password_hash, generate_password_hash
import uuid

engine = create_engine('mysql+pymysql://Bereketzeselassi:alxmysql@Bereketzeselassie.mysql.pythonanywhere-services.com/Bereketzeselassi$realtime_db')

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(String(60), primary_key=True)
    username = Column(String(128), nullable=False, unique=True)
    email = Column(String(128), nullable=False)
    password = Column(String(256), nullable=False)

    def __init__(self, id, username, email, password):
        self.id = str(uuid.uuid4())
        self.username = username
        self.email = email
        self.password = password
    
    #def save(self):
     #   Chatdbs.new(self)
    
    @staticmethod
    def is_authenticated():
        return True
    
    @staticmethod
    def is_active():
        return True
    
    @staticmethod
    def is_anonymous():
        return False
    
    def get_id(self):
        return self.username

    def check_password(self, password_input):
        return check_password_hash(self.password, password_input)
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)