from django.shortcuts import render, get_object_or_404
from .models import Kollektion, Ring
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from .forms import ContactForm

def contactView(request):
    if request.method == "GET":
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
            x = form.cleaned_data["subject"]
            subject = x + ' ### letzte Kollektion: ' + request.session["0"]
            from_email = form.cleaned_data["email"]
            message = form.cleaned_data['nachricht']
           
            try:
                print('email',request.session["0"])
                send_mail(subject, message, from_email,["admin@example.com"])
            except BadHeaderError:
                return HttpResponse("Invalid header found.")
            return redirect('kollektionen:success')
            #return redirect("success")
    return render(request, "kollektionen/email.html", {"form": form})

def success(request):
    return render(request, "kollektionen/succes.html")



#def product_list(request, kollektion_slug=None):
 #   kollektion = None


def ring_list(request, category_slug=None):
    category = None
    categories = Kollektion.objects.all()
    products = Ring.objects.filter(available=True)
    if category_slug:
        category = get_object_or_404(Kollektion, 
                                     slug=category_slug)
        products = products.filter(category=category)
        request.session['koll'] = category.name
        print(request.session[0])
    return render(request,
                  'kollektionen/ring/list.html',
                  {'category': category,
                   'categories': categories,
                   'products': products})


def ring_listx(request, category_slug=None):
    category = None
    categories = Kollektion.objects.all()
    products = Ring.objects.filter(available=True)
    if category_slug:
        category = get_object_or_404(Kollektion, 
                                     slug=category_slug)
        products = products.filter(category=category)
        count = products.count()
        count = {i+1: i+1 for i in range(count)}
        request.session[0] = category.name
        print(request.session[0])
    return render(request,
                  'kollektionen/ring/list1.html',
                  {'category': category,
                   'categories': categories,
                   'products': products,
                   'count':count})

def ring_detail(request, id, slug):
    product = get_object_or_404(Ring,
                                id=id,
                                slug=slug,
                                available=True)
    return render(request,
                  'kollektionen/ring/detail.html',
                  {'product': product})

def categories_m(request):
    kollektion = Kollektion.objects.all()
   
  
    return render(request, 'kollektion/ring/kollektion.html', {'kollektion': kollektion})


def get_rings(request):
    kollektion = Kollektion.objects.all()
    rings =  Ring.objects.filter(kollektion=kollektion.slug)
    return render(request,'kollektion/ring/rings.html',{'rings':rings})