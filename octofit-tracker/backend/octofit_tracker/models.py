from django.db import models

class User(models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    team = models.CharField(max_length=100, blank=True, null=True)
    # ...other fields...

class Team(models.Model):
    name = models.CharField(max_length=100, unique=True)
    members = models.JSONField(default=list)
    # ...other fields...

class Activity(models.Model):
    user = models.CharField(max_length=150)
    type = models.CharField(max_length=50)
    duration = models.IntegerField()
    date = models.DateField()
    # ...other fields...

class Leaderboard(models.Model):
    team = models.CharField(max_length=100)
    score = models.IntegerField(default=0)
    # ...other fields...

class Workout(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    suggested_for = models.JSONField(default=list)
    # ...other fields...
