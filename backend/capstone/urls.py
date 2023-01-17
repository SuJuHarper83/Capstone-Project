from django.urls import path
from . import views

urlpatterns = [
    path('getExercises/', views.exercise_library),
    path('getVideos/', views.video_library),
    path('addEntry/', views.journal_entry),
    path('createPlaylist/', views.create_playlist),
    path('addToPlaylist/<pk>/', views.add_to_playlist),
    path('getEntry/<int:pk>/', views.entry_by_id)
]