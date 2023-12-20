from django.http import HttpResponseRedirect
from django.shortcuts import render
from .forms import LoginForm
from django.urls import reverse
from .models import PDF
from django.http import FileResponse, Http404
import os
from django.conf import settings

def pdf(request):
    pdf = PDF.objects.all().first()
    return render(request,'haendlerlogin/pdf.html',{'pdf':pdf})

def login(request):
    form = LoginForm(request.POST)
    if form.is_valid():
        password = form.cleaned_data["password"]
        print(password)
        if password == "x":
            return render(request, "haendlerlogin/login/index.html")
    return render(request, "haendlerlogin/login.html", {"form": form})


def pdf_view(request):
    pdf = PDF.objects.all().first()
    x = pdf.doc1
    y = settings.MEDIA_ROOT
    path = os.path.join(str(y),str(x))#4
    try:
        return FileResponse(open(path, 'rb'), content_type='application/pdf')
    except FileNotFoundError:
        raise Http404()
    


def pdf_viewx(request):
    pdf = PDF.objects.all().first()
    x = pdf.doc2
    print('qwertzuiop',x)
    y = settings.MEDIA_ROOT
    path = os.path.join(str(y),str(x))#4
    try:
        return FileResponse(open(path, 'rb'), content_type='application/pdf')
    except FileNotFoundError:
        raise Http404()
    
def pdf_viewy(request):
    pdf = PDF.objects.all().first()
    x = pdf.doc3
    print('qwertzuiop',x)
    y = settings.MEDIA_ROOT
    path = os.path.join(str(y),str(x))#4
    try:
        return FileResponse(open(path, 'rb'), content_type='application/pdf')
    except FileNotFoundError:
        raise Http404()