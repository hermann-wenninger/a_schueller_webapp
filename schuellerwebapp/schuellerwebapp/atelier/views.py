from django.shortcuts import render
from .models import EinleitungAtelier, BilderAtelier


def atelier(request):
    
    bilder = BilderAtelier.objects.all()
    return render(request,'atelier/atelier.html',{'bilder':bilder})


