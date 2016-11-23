from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, 'index.html')

def indexbootstrap(request):
    return render(request, 'indexbootstrap.html')

def posicionamiento(request):
    return render(request, 'posicionamiento.html')

def noEncontrada(request):
    html = "<html><body>A donde queres ir?</body></html>"
    return HttpResponse(html)
