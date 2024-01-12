import uuid

from django.db import models


class Ulke(models.Model):
    _id = models.CharField(max_length=100, primary_key=True, db_column="_id")
    Name = models.CharField(max_length=255)
    Type = models.CharField(max_length=255)
    Location = models.CharField(max_length=255)
    Latitude = models.CharField(max_length=255)
    Longitude = models.CharField(max_length=255)
    wikipediaLink = models.CharField(max_length=255, db_column="Wikipedia link")
    pictureLink = models.CharField(max_length=255, db_column="Picture link")
    buildInYear = models.CharField(max_length=255, db_column="Build in year")

    # Diğer alanlar

    class Meta:
        db_table = 'ulke'  # Koleksiyon adını belirtin
