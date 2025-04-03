from django.core.management.base import BaseCommand
from portfolio.models import AboutMe, Skill, Experience, Project
from django.utils import timezone
from datetime import datetime

class Command(BaseCommand):
    help = 'Populates the portfolio database with sample content'

    def handle(self, *args, **kwargs):
        # Create About Me
        about_me = AboutMe.objects.create(
            title="Hello, I am a CodeJedi",
            subtitle="I ❤ Programming",
            description="""Embarking on the sacred path to AI mastery, my passion and curiosity guide me through uncharted territories—exploring the vast realms of cloud computing, neuroscience, computer vision, and the evolving art of AI, akin to a wise seeker in the realm of knowledge.""",
            quote="""Let each person examine his own work, and then he can take pride in himself alone, and not compare himself with someone else.""",
            quote_author="Galatians 6:4"
        )

        # Create Skills
        skills = [
            {
                'title': 'AWS Certified Practitioner',
                'description': 'AWS Cloud Practitioner Certification',
                'date_achieved': datetime(2021, 1, 2)
            },
            {
                'title': 'AWS Certified Developer',
                'description': 'AWS Developer Certification',
                'date_achieved': datetime(2021, 8, 29)
            },
            {
                'title': 'AWS Certified DevOps Engineer - Professional',
                'description': 'AWS DevOps Professional Certification',
                'date_achieved': datetime(2024, 8, 23)
            }
        ]

        for skill_data in skills:
            Skill.objects.create(**skill_data)

        # Create Experiences
        experiences = [
            {
                'title': 'Software Engineer',
                'company': 'Amazon Web Services',
                'description': 'Working on cloud infrastructure and AI services',
                'start_date': datetime(2023, 1, 1),
                'current': True
            },
            {
                'title': 'AI Research Intern',
                'company': 'Google Brain',
                'description': 'Researching neural networks and computer vision',
                'start_date': datetime(2022, 5, 1),
                'end_date': datetime(2022, 12, 31)
            },
            {
                'title': 'Software Development Intern',
                'company': 'Microsoft',
                'description': 'Developing AI-powered applications',
                'start_date': datetime(2021, 5, 1),
                'end_date': datetime(2021, 12, 31)
            }
        ]

        for exp_data in experiences:
            Experience.objects.create(**exp_data)

        # Create Projects
        projects = [
            {
                'title': 'AI Human Detection System',
                'description': 'A computer vision system that detects humans in real-time using deep learning',
                'technologies': 'Python, OpenCV, TensorFlow, PyTorch',
                'date_completed': datetime(2023, 12, 1),
                'github_url': 'https://github.com/codejedi/ai-human-detection'
            },
            {
                'title': 'SpaceX Rocket Landing Simulation',
                'description': 'A physics-based simulation of SpaceX rocket landings using reinforcement learning',
                'technologies': 'Python, PyTorch, OpenAI Gym, Physics Engine',
                'date_completed': datetime(2023, 6, 1),
                'github_url': 'https://github.com/codejedi/spacex-simulation'
            },
            {
                'title': 'Cloud Infrastructure Automation',
                'description': 'Automated cloud infrastructure deployment using AWS CDK',
                'technologies': 'TypeScript, AWS CDK, AWS Services',
                'date_completed': datetime(2023, 3, 1),
                'github_url': 'https://github.com/codejedi/cloud-automation'
            }
        ]

        for project_data in projects:
            Project.objects.create(**project_data)

        self.stdout.write(self.style.SUCCESS('Successfully populated portfolio database')) 