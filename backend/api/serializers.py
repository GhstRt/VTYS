from rest_framework import serializers
from api.models import Ulke





class UlkeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ulke
        fields = ['Name', 'Type', 'Location']
