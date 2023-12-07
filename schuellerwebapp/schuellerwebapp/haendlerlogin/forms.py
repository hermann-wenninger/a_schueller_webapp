from django import forms

class LoginForm(forms.Form):
    password = forms.CharField(max_length=32, widget=forms.PasswordInput)