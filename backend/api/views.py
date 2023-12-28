from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import BaseAuthentication
from api.models import Ulke
from api.serializers import *


class LocationView(APIView):

    def get(self, request):
        country = request.query_params.get('country')
        try:
            places = Ulke.objects.filter(Location__startswith=country)
            serializer = UlkeSerializer(places, many=True)
            return Response({"status": {"code": 200, "message": "success"}, "data": serializer.data},
                            status.HTTP_200_OK)

        except Ulke.DoesNotExist:
            return Response({"status": {"code": 200, "message": "success"}, "data": "no records found"},
                            status.HTTP_200_OK)

        except ValueError:
            return Response({"status": {"code": 400, "message": "error"}, "data": []},
                            status.HTTP_200_OK)
