from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    thumbnail = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.title


class Activity(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField()
    location = models.CharField(max_length=100)
    thumbnail = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.title


class Participation(models.Model):
    event = models.CharField(max_length=100)
    organizer = models.CharField(max_length=100)
    date = models.DateField()
    location = models.CharField(max_length=100)
    description = models.TextField()
    thumbnail = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.event
