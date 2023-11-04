from django.db import models

class BilderAtelier(models.Model):
    name = models.CharField(max_length=255, blank=True)
    image = models.ImageField(upload_to='kollektionen/%Y/%m/%d',blank=True)
    beschreibung = models.CharField(max_length=255, blank=True)

class EinleitungAtelier(models.Model):
    ueberschrift = models.CharField(max_length=255, blank=True)
    text = models.TextField(blank = True)
