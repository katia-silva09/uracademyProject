# Generated by Django 5.0.6 on 2024-05-26 05:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('academy', '0024_remove_course_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='title',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
