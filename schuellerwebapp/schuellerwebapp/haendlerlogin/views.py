from django.http import HttpResponseRedirect
from django.shortcuts import render
from .forms import LoginForm
from django.urls import reverse
from .models import PDF

def pdf(request):
    
    pdf = PDF.objects.all().first()
    return render(request,'haendlerlogin/pdf.html',{'pdf':pdf})

def login(request):
  
    form = LoginForm(request.POST)
    if form.is_valid():
        password = form.cleaned_data["password"]
        print(password)
        if password == "x":
            print('juhuuuxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
            #return HttpResponseRedirect("haendlerlogin:login")
            return render(request, "haendlerlogin/login/index.html")
    return render(request, "haendlerlogin/login.html", {"form": form})
