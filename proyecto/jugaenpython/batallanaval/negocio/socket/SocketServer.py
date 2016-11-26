
import socket
import time
from jugaenpython.batallanaval.negocio.socket.SocketData import SocketData

class ServerSocket():

    def __init__(self):
        self.serverSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        #print("Esta maquina es", socket.gethostname())
        
        # asocia el socket a un host publico
        # y a un puerto bien conocido (HTTP = 80)
        self.serverSocket.bind((SocketData.UDP_IP, SocketData.UDP_PORT))
        
    def iniciar(self):
        while True:
            time.sleep(1)
            data, addr = self.serverSocket.recvfrom(SocketData.BUFFER_SIZE) # buffer size is 1024 bytes
            dataString = data.decode("utf-8")