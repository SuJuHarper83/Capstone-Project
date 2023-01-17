from rest_framework import serializers
from .models import Video, Entry, Exercise

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['id', 'video_id', 'title', 'description']
        depth = 1

class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = ['id', 'date', 'input_a', 'input_b', 'input_c', 'mood', 'image']
        depth = 1

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['id', 'title', 'input_d', 'input_e']
        depth = 1
