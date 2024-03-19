#!/usr/bin/python3
'''The main app for handling message and routes'''
from flask import Flask, url_for, redirect, request,  render_template
from flask_socketio import SocketIO, join_room, leave_room
from db import Chatdbs
from flask_login import LoginManager, login_user, logout_user, login_required, current_user
from sqlalchemy.exc import IntegrityError

app = Flask(__name__)
app.secret_key = "my secret key"
socketio = SocketIO(app)

login_manager = LoginManager()
login_manager.login_view = 'login'
login_manager.init_app(app)

@app.route('/')
def home():
    '''Home route to redirect to login'''
    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    '''login route'''
    if current_user.is_authenticated:
        return redirect(url_for('chat'))
    message = ''
    if request.method == 'POST':
        username = request.form.get('username')
        password_input = request.form.get('password')
        
        user = Chatdbs.get_user(username)

        if user and user.check_password(password_input):
            
            login_user(user)
            return redirect(url_for('chat', username=username))
        else:
            message = "failed to login"

    return render_template('login.html', message=message)

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    '''signup route'''
    if current_user.is_authenticated:
        return redirect(url_for('chat'))
    
    message = ''
    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        password_input = request.form.get('password')
        try:
            Chatdbs.new(username, email, password_input)
            return redirect(url_for('login'))
        except IntegrityError:
            message = 'user already exists'

    return render_template('signup.html', message=message)



@app.route('/logout')
@login_required
def logout():
    '''logout route'''
    logout_user()
    return redirect(url_for('login'))


@app.route('/chat')
@login_required
def chat():
    '''main route to chat'''
    username = request.args.get('username')
    if username:
        return render_template('chat.html', username=username)

@socketio.on('join_room')
def handle_join_room(data):
    '''to handle a join room and emits a message'''
    join_room(data['room'])
    socketio.emit('join_anno', data, room=data['room'])

@socketio.on('send_ms')
def handle_send_mes(data):
    '''to handle send message and emits a message'''
    socketio.emit('receive_ms', data, room=data['room'])


@login_manager.user_loader
def load_user(username):
    '''to load username from db'''
    return Chatdbs.get_user(username)

if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", port=5000, debug=1)