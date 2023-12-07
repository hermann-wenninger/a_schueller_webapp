from django.contrib import admin 
from django.urls import path

from .views import login

app_name='haendlerlogin'

urlpatterns  =  [ 
    path ("haendlerlogin/", login, name="login" ), 
    #path ("pdf/", login, name="nachlogin" ),
    
]