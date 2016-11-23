from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
	url(r'^indexbootstrap$', views.indexbootstrap, name='indexbootstrap'),
	url(r'^posicionamiento$', views.posicionamiento, name='posicionamiento'),
    url(r'.+', views.noEncontrada, name='noEncontrada'),
]
