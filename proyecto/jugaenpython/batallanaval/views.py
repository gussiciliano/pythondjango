from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, 'index.html')

def batalla(request):
    return render(request, 'batalla.html')

def buscarunrival(request):
    #TODO: BUSCAR UN RIVAL
    #Luego de encontrar el rival enviar a posicionamiento
    return posicionamiento(request)

def indexbootstrap(request):
    return render(request, 'indexbootstrap.html')

def posicionamiento(request):
    return render(request, 'posicionamiento.html')

def guardarposicionamiento(request):
    #TODO: ver como meter ambos
    return render(request, 'batalla.html', {"celdas":request.POST.getlist('celda[]')})

def noEncontrada(request):
    html = "<html><body>A donde queres ir?</body></html>"
    return HttpResponse(html)
