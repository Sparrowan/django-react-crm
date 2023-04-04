from rest_framework import serializers

from leads.models import Lead


class LeadSerializer(serializers.ModelSerializer):
    created_by = serializers.SerializerMethodField()
    class Meta:
        model = Lead
        fields = (
            'id',
            'first_name',
            'middle_name',
            'last_name',
            'phone_number',
            'location',
            'gender',
            'date',
            'created_by'
        )
    def get_created_by(self, obj):
        return obj.get_created_by_display()