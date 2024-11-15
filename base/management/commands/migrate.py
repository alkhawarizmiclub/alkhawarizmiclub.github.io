from django.core.management.commands.migrate import Command as MigrateCommand
from django.core.management import call_command


class Command(MigrateCommand):
    def handle(self, *args, **options):
        super().handle(*args, **options)
        call_command('create_superuser')