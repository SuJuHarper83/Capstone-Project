# Generated by Django 4.0.4 on 2023-01-20 00:01

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('capstone', '0013_alter_entry_date_alter_entry_image_alter_entry_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entry',
            name='date',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='entry',
            name='image',
            field=models.ImageField(default='2.jpg', upload_to='post_images'),
        ),
        migrations.AlterField(
            model_name='playlist',
            name='item',
            field=models.ManyToManyField(blank=True, default='boo-kitten.gif', to='capstone.video'),
        ),
    ]