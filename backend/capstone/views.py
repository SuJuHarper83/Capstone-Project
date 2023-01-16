from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from django.views.generic import DetailView
from django.http import HttpResponseRedirect
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.urls import reverse
from rest_framework.response import Response
from rest_framework import status
from .models import Video, Entry, Exercise
from .serializers import VideoSerializer, EntrySerializer, ExerciseSerializer

# Create your views here.

@api_view (['GET', 'POST'])
@permission_classes ([IsAuthenticated])
def exercise_library(request):
    if request.method == 'GET': #200 OK
        exercise = Exercise.objects.all()
    elif request.method == 'POST': #201 Created
        serializer = ExerciseSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    serializer = ExerciseSerializer(exercise, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view (['GET'])
@permission_classes ([IsAuthenticated])
def video_library(request):
    if request.method == 'GET':
        video = Video.objects.all()
    
    serializer = VideoSerializer(video, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view (['GET', 'POST'])
@permission_classes ([IsAuthenticated])
def journal_entry(request):
    if request.method == 'GET':
        entry = Entry.objects.all()
    elif request.method == 'POST':
        serializer = EntrySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    serializer = EntrySerializer(entry, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)
