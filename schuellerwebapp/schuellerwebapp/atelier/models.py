from django.db import models

class BilderAtelier(models.Model):
    name = models.CharField(max_length=255, blank=True)
    image = models.ImageField(upload_to='atelier',blank=True)
    beschreibung = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.name

class EinleitungAtelier(models.Model):
    ueberschrift = models.CharField(max_length=255, blank=True)
    text = models.TextField(blank = True)
