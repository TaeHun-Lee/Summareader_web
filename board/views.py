from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse
from .models import NewsPost

# Create your views here.
def serialize(request):
    if request.method == 'GET':
        newsPosts_json = serializers.serialize('json', NewsPost.objects.all())
        return HttpResponse(newsPosts_json, content_type="application/json")