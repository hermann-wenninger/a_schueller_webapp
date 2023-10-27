from django.shortcuts import render
from .models import Index

# Create your views here.
def indexslider(request):
    indexslider = Index.objects.all()
    return render(request,'indexslider/index.html',{'indexslider':indexslider})
