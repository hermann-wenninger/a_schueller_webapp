from django.db import models

class Adresse(models.Model):
    name = models.CharField(max_length=200)
    stadt = models.CharField(max_length=200)
    strasse = models.CharField(max_length=200)
    plz = models.CharField(max_length=200)
    land = models.CharField(max_length=200)
    telefon = models.CharField(max_length=200)
    emailadresse = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200,unique=True)
    image = models.ImageField(upload_to='Indexslider',blank=True)
    alt = models.CharField(max_length=200)
    def __str__(self):
        return self.name
