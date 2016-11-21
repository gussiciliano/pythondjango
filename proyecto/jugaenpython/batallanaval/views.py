from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, 'index.html')

def noEncontrada(request):
    html = "<html><body>A dónde queres ir?</body></html>"
    return HttpResponse(html)
