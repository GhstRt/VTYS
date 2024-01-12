import openai
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *
from bson import ObjectId


class LocationView(APIView):
    def get(self, request, id=None):

        try:
            places = Ulke.objects.filter(Name=id) if id is not None else Ulke.objects.all()
            # return Response(places.all(), status=status.HTTP_200_OK)
            serializer = UlkeSerializer(places, many=True)

            for i in serializer.data:
                i["Maps"] = "https://www.google.com/maps/place/{0},{1}".format(i["Latitude"], i["Longitude"])

            return Response({"status": {"code": 200, "message": "success"}, "data": serializer.data},
                            status.HTTP_200_OK)


        except Ulke.DoesNotExist:
            return Response({"status": {"code": 200, "message": "success"}, "data": "no records found"},
                            status.HTTP_200_OK)

        except ValueError:
            return Response({"status": {"code": 400, "message": "error"}, "data": []},
                            status.HTTP_200_OK)


class ChatAPIView(APIView):
    def __init__(self):
        super().__init__()
        openai.api_key = "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"

    def get(self, request):
        try:
            message = request.query_params.get('message')
            if message is not None:
                # GPT-3'e gönderilecek istek
                response = openai.Completion.create(
                    engine="gpt-3.5-turbo",
                    prompt=message,
                    max_tokens=150
                )

                # GPT-3'ten gelen yanıtı alın
                chatgpt_response = response.choices[0].text
                return Response(chatgpt_response)

            else:
                return Response({"status": {"code": 400, "message": "Empty message parameter"}},
                                status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            # Handle OpenAI API errors
            return Response({"status": {"code": 500, "message": str(e)}},
                            status.HTTP_500_INTERNAL_SERVER_ERROR)
