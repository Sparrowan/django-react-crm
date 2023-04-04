from rest_framework import serializers

from .models import Customer


class CustomerSerializer(serializers.ModelSerializer):
    created_by = serializers.SerializerMethodField()
    lead = serializers.SerializerMethodField()
    class Meta:
        model = Customer
        fields = (
            'id',
            'lead',
            'photo',
            'annual_earning',
            'products_of_interest',
            'date',
            'created_by',
        )

    def get_created_by(self, obj):
        return obj.get_created_by_display()
    
    def get_lead(self, obj):
        return obj.get_lead_display()