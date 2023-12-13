from django.db import models
from django.urls import reverse

class Aktuelles(models.Model):
    ueberschrift = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200)
    image = models.ImageField(upload_to='aktuelles/%Y/%m/%d',blank=True)
    beschreibung = models.TextField(blank=True)
    veroeffentlichen = models.BooleanField(default=True)
    termin_von = models.DateField(blank=True)
    termin_bis = models.DateField(blank=True)
    location = models.CharField(max_length=200,default='')
    in_stadt = models.CharField(max_length=200)
    plz = models.CharField(max_length=10)
    strasse_hnr = models.CharField(max_length=200)

    def __str__(self):
        return self.ueberschrift
    
    def get_absolute_url(self):
        return reverse("aktuelles-detail", kwargs={"pk": self.pk})
    
    
