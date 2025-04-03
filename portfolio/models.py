from django.db import models

# Create your models here.

class Skill(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon = models.ImageField(upload_to='skills/')
    date_achieved = models.DateField()

    def __str__(self):
        return self.title

class Experience(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    current = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title} at {self.company}"

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')
    url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)
    technologies = models.CharField(max_length=500)
    date_completed = models.DateField()

    def __str__(self):
        return self.title

class AboutMe(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=500)
    description = models.TextField()
    profile_image = models.ImageField(upload_to='profile/')
    quote = models.TextField()
    quote_author = models.CharField(max_length=200)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "About Me"
