from django.contrib import admin
from .models import Skill, Experience, Project, AboutMe

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('title', 'date_achieved')
    list_filter = ('date_achieved',)
    search_fields = ('title', 'description')

@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('title', 'company', 'start_date', 'end_date', 'current')
    list_filter = ('current', 'start_date')
    search_fields = ('title', 'company', 'description')

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'date_completed', 'technologies')
    list_filter = ('date_completed',)
    search_fields = ('title', 'description', 'technologies')

@admin.register(AboutMe)
class AboutMeAdmin(admin.ModelAdmin):
    list_display = ('title', 'subtitle')
    search_fields = ('title', 'subtitle', 'description', 'quote')
