from django.db import models
from phone_field import PhoneField
from django.contrib.auth.models import User
from leads.models import Lead



class Customer(models.Model):
    lead = models.ForeignKey(Lead, on_delete=models.CASCADE, related_name='customer')
    photo = models.ImageField()
    annual_earning = models.FloatField()
    products_of_interest = models.CharField(max_length=200)
    date = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='customers')

    class Meta:
        ordering = ('date',)

    def __str__(self):
        return '{} {} {}'.format(self.lead.first_name, self.lead.middle_name,self.lead.last_name)
    
    def get_created_by_display(self):
        return '{}'.format(self.created_by.username)
    
    def get_lead_display(self):
        return '{} {} {}'.format(self.lead.first_name, self.lead.middle_name,self.lead.last_name)

