from django.shortcuts import render
from .models import EinleitungAtelier, BilderAtelier


def atelier(request):
    einat = EinleitungAtelier.objekts.all()
    bilder = BilderAtelier.objects.all()
    return render(request,'atelier/atelier.html',{'einat':einat, 'bilder':bilder})
