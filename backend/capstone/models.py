from django.conf import settings
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Video(models.Model):
    video_id = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=300)

class Entry(models.Model):
    date = models.DateField()
    input_1 = models.CharField(max_length=2000)
    input_2 = models.CharField(max_length=2000)
    input_3 = models.CharField(max_length=2000)
    mood = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
