
import socket
from jugaenpython.batallanaval.negocio.socket.SocketData import SocketData

class SocketCliente():
    
    def __init__(self):
        self.socketCliente = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        
    def enviarMensaje(self, msj):
        self.socketCliente.sendto(msj.encode("utf-8"), (SocketData.UDP_IP, SocketData.UDP_PORT))