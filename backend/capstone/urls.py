from django.urls import path
from . import views

urlpatterns = [
    path('', views.exercise_library),
    path('', views.video_library),
    path('', views.journal_entry),
    path('', views.create_playlist),
    path('', views.add_to_playlist),
    path('<int:pk>/', views.entry_by_id)
]