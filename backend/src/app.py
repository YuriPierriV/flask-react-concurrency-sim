from flask import Flask
from flask_socketio import SocketIO, emit
from flask_cors import CORS
import threading

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

# Estado inicial do quadrado
square_state = {
    "x": 0,
    "y": 0,
    "in_use": False  # Controle de concorrência
}

# Lock para garantir que apenas um usuário mova o quadrado
square_lock = threading.Lock()

@socketio.on('start_move')
def handle_start_move():
    if square_lock.locked():
        emit('move_status', {'status': 'busy'})  # Notifica que está ocupado
    else:
        square_lock.acquire()
        square_state["in_use"] = True
        emit('move_status', {'status': 'locked'})  # Confirma que está bloqueado

@socketio.on('end_move')
def handle_end_move():
    square_state["in_use"] = False
    square_lock.release()
    emit('update_square', square_state, broadcast=True)  # Notifica todos os usuários

@socketio.on('move_square')
def handle_move_square(data):
    if square_state["in_use"]:  # Verifica se o quadrado está em uso
        square_state["x"] = data["x"]
        square_state["y"] = data["y"]
        emit('update_square', square_state, broadcast=True)  # Atualiza todos os usuários

if __name__ == '__main__':
    socketio.run(app, debug=True)
