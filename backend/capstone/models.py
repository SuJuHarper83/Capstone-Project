from django.db import models
from authentication.models import User

# Create your models here.

class Video(models.Model):
    video = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=300)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Playlist(models.Model):
    list_title = models.CharField(max_length=255)
    item = models.ManyToManyField(Video, blank=True, default=None)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Entry(models.Model):
    date = models.DateField(null=True)
    input_a = models.CharField(max_length=2000)
    input_b = models.CharField(max_length=3000)
    input_c = models.CharField(max_length=3000)
    mood = models.IntegerField()
    image = models.ImageField(upload_to='post_images', blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Exercise(models.Model):
    title = models.CharField(max_length=255)
    input_d = models.CharField(max_length=3000)
    input_e = models.CharField(max_length=1000)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
