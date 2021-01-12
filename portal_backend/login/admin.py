from django.contrib import admin
from .models import User

class LoginAdmin(admin.ModelAdmin):
    list_display = ('email', 'username', 'password', 'first_name', 'last_name', 'contact_number')


admin.site.register(User, LoginAdmin)