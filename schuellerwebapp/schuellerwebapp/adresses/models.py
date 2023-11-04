from django.db import models
from django.contrib.auth.models import User

from django_countries.fields import CountryField
import requests


class Adressen(models.Model):
    name = models.CharField(max_length=255, blank=True)
    address_1 = models.CharField(max_length=255, blank=True)
    zip_code = models.IntegerField(blank=True, null=True)

    city = models.CharField(max_length=255, blank=True)
    strasse = models.CharField(max_length=255, blank=True)
    hausnummer = models.CharField(max_length=5, blank=True)
    country = CountryField(blank=True)
    webadresse = models.URLField(max_length=200, blank=True)
    telefon = models.CharField(max_length=25, blank=True)
    latitude = models.DecimalField(
        max_digits=9, decimal_places=6, blank=True, default='0')
    longitude = models.DecimalField(
        max_digits=9, decimal_places=6, blank=True, default='0')

    def __str__(self):
        return f'Adresse von {self.name}'

    class Meta:
        verbose_name_plural = "addressen"

    def save(self, **kwargs):
        super().save(**kwargs)

        address = " ".join(
            [ str(self.zip_code), self.city,self.strasse,self.hausnummer])
        api_key = "PROJECT_API_KEY"
        api_response = requests.get('https://maps.googleapis.com/maps/api/geocode/json?address={0}&key={1}'.format(address, api_key))
        api_response_dict = api_response.json()

        if api_response_dict['status'] == 'OK':
            self.latitude = api_response_dict['results'][0]['geometry']['location']['lat']
            self.longitude = api_response_dict['results'][0]['geometry']['location']['lng']
            self.save()
            super().save(**kwargs)

