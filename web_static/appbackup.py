from flask import Flask, url_for, redirect, request,  render_template
from flask_socketio import SocketIO, join_room

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def home():
    '''home to join chat'''
    return render_template('index.html')

@app.route('/chat')
def chat():
    '''main chat api to handle realtime chat'''
    username = request.args.get('username')
    room = request.args.get('room')

    if room and username:
        return render_template('chat.html', username=username, room=room)
    else:
        return redirect(url_for('home'))

@socketio.on('join_room')
def handle_join_room(data):
    '''to handle join message emit to join_anno'''
    join_room(data["room"])
    socketio.emit('join_anno', data, room=data["room"])

@socketio.on('send_ms')
def handle_send_mes(data):
    '''to handle send message emit message to receiver'''
    socketio.emit('receive_ms', data, room=data["room"])


if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", port=5000, debug=1)