from django.shortcuts import render
from .models import Skill, Experience, Project, AboutMe

def home(request):
    about_me = AboutMe.objects.first()
    skills = Skill.objects.all().order_by('-date_achieved')
    experiences = Experience.objects.all().order_by('-start_date')
    projects = Project.objects.all().order_by('-date_completed')
    
    context = {
        'about_me': about_me,
        'skills': skills,
        'experiences': experiences,
        'projects': projects,
    }
    
    return render(request, 'portfolio/home.html', context)
