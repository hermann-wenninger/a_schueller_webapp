from django import forms

class ContactForm(forms.Form):
    emailadresse = forms.EmailField(required=True)
    name = forms.CharField(required=True)
    subject = forms.CharField(required=True)
    nachricht = forms.CharField(widget=forms.Textarea, required=True)