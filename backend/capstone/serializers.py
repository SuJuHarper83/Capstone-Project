from rest_framework import serializers
from .models import Video, Entry, Exercise

class VideoSerializer(serializers.Serializer):
    class Meta:
        model = Video
        fields = ['id', 'video_id', 'title', 'description']
        depth = 1

class EntrySerializer(serializers.Serializer):
    class Meta:
        model = Entry
        fields = ['id', 'date', 'input_1', 'input_2', 'input_3', 'mood']
        depth = 1

class ExerciseSerializer(serializers.Serializer):
    class Meta:
        model = Exercise
        fields = ['id', 'title', 'description', 'examples']
        depth = 1
