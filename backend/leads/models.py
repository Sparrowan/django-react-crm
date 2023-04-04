from django.db import models
from phone_field import PhoneField
from django.contrib.auth.models import User

GENDER_CHOICES = (
    ('M', 'male'),
    ('F', 'female')
)


class Lead(models.Model):
    first_name = models.CharField(max_length=100)
    middle_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number = PhoneField(help_text='Contact phone number')
    location = models.CharField(max_length=100)
    gender = models.CharField(choices=GENDER_CHOICES, max_length=2)
    date = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='leads')

    class Meta:
        ordering = ('date',)

    def __str__(self):
        return '{} {} {}'.format(self.first_name, self.middle_name,self.last_name)
