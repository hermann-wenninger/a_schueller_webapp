# Generated by Django 4.1 on 2023-12-07 16:44

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("aktuelles", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="aktuelles",
            name="location",
            field=models.CharField(default="", max_length=200),
        ),
    ]
