# Generated by Django 4.1 on 2023-12-25 15:37

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("aktuelles", "0003_alter_aktuelles_termin_bis_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="aktuelles",
            name="auf_erster_seite",
            field=models.BooleanField(default=False),
        ),
    ]
