from django.db import models



class Ulke(models.Model):
    Name = models.CharField(max_length=255)
    Type = models.CharField(max_length=255)
    Location = models.CharField(max_length=255)

    # Diğer alanlar

    class Meta:
        db_table = 'ulke'  # Koleksiyon adını belirtin
