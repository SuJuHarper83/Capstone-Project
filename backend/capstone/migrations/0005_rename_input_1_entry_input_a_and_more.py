# Generated by Django 4.0.4 on 2023-01-16 23:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('capstone', '0004_rename_summary_exercise_input_a_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='entry',
            old_name='input_1',
            new_name='input_a',
        ),
        migrations.RenameField(
            model_name='entry',
            old_name='input_2',
            new_name='input_b',
        ),
        migrations.RenameField(
            model_name='entry',
            old_name='input_3',
            new_name='input_c',
        ),
        migrations.RenameField(
            model_name='exercise',
            old_name='input_a',
            new_name='input_d',
        ),
        migrations.RenameField(
            model_name='exercise',
            old_name='input_b',
            new_name='input_e',
        ),
    ]
