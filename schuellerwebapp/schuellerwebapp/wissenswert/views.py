from django.shortcuts import render
from django.views import generic
from .models import Wissenswert


class wissenswertListView(generic.ListView):
    model = Wissenswert

class wissenswertDetailView(generic.DetailView):
    model = Wissenswert