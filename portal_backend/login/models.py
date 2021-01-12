from django.db import models

class User(models.Model):
    email = models.CharField(max_length=50, primary_key=True)
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=50)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    contact_number = models.CharField(max_length=11)


    def __str__(self):
        return 'First Name: {} Last Name: {}'.format(self.first_name,
                                                     self.last_name)


    def __repr__(self):
        return 'Email: {}'.format(self.email)


