# Generated by Django 4.0.4 on 2023-01-16 23:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('capstone', '0002_rename_discription_exercise_summary'),
    ]

    operations = [
        migrations.RenameField(
            model_name='exercise',
            old_name='example',
            new_name='types',
        ),
    ]
