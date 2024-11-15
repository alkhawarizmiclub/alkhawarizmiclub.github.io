from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from django.conf import settings


class Command(BaseCommand):
    help = 'Create a superuser if none exists'

    def handle(self, *args, **options):
        username = settings.SUPERUSER_USERNAME
        password = settings.SUPERUSER_PASSWORD

        try:
            user = User.objects.get(username=username)

            if not user.check_password(password):
                user.set_password(password)
                user.save()
                self.stdout.write(self.style.SUCCESS(f'Password updated for superuser with username "{username}"'))

            else:
                self.stdout.write(self.style.SUCCESS(f'Superuser with username "{username}" already exists'))

        except User.DoesNotExist:
            # Create new superuser if it does not exist
            User.objects.create_superuser(username=username, password=password)
            self.stdout.write(self.style.SUCCESS(f'Superuser created with username "{username}"'))