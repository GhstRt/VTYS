from rest_framework import serializers
from .models import Ulke


class UlkeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ulke
        fields = ['Name', 'Type', 'Location', 'Latitude', 'Longitude', 'pictureLink', 'wikipediaLink', 'buildInYear']
