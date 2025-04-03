from django.db import models
from typing import Optional

# Create your models here.

class Skill(models.Model):
    """Represents a skill or certification."""
    title: models.CharField = models.CharField(max_length=200)
    description: models.TextField = models.TextField()
    icon: models.ImageField = models.ImageField(upload_to='skills/')
    date_achieved: models.DateField = models.DateField()

    def get_title(self) -> str:
        return str(self.title)


class Experience(models.Model):
    """Represents a work experience entry."""
    title: models.CharField = models.CharField(max_length=200)
    company: models.CharField = models.CharField(max_length=200)
    description: models.TextField = models.TextField()
    start_date: models.DateField = models.DateField()
    end_date: Optional[models.DateField] = models.DateField(null=True, blank=True)
    current: models.BooleanField = models.BooleanField(default=False)

    def get_title(self) -> str:
        return f"{str(self.title)} at {str(self.company)}"


class Project(models.Model):
    """Represents a portfolio project."""
    title: models.CharField = models.CharField(max_length=200)
    description: models.TextField = models.TextField()
    image: models.ImageField = models.ImageField(upload_to='projects/')
    url: models.URLField = models.URLField(blank=True)
    github_url: models.URLField = models.URLField(blank=True)
    technologies: models.CharField = models.CharField(max_length=500)
    date_completed: models.DateField = models.DateField()

    def get_title(self) -> str:
        return str(self.title)


class AboutMe(models.Model):
    """Represents the about me section content."""
    title: models.CharField = models.CharField(max_length=200)
    subtitle: models.CharField = models.CharField(max_length=500)
    description: models.TextField = models.TextField()
    profile_image: models.ImageField = models.ImageField(upload_to='profile/')
    quote: models.TextField = models.TextField()
    quote_author: models.CharField = models.CharField(max_length=200)

    def get_title(self) -> str:
        return str(self.title)

    class Meta:
        verbose_name_plural = "About Me"