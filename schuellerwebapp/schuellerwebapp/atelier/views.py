from django.shortcuts import render
from .models import EinleitungAtelier, BilderAtelier


def atelier(request):
    
    bilder = BilderAtelier.objects.all()
    return render(request,'atelier/atelierde.html',{'bilder':bilder})

def indexslider(request):
    indexslider = Index.objects.all()
    return render(request,'indexslider/index.html',{'indexslider':indexslider})
