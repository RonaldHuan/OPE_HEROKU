from django.db import models

# Create your models here.
class Funcionario(models.Model):
    nome = models.CharField(max_length=50)
    cpf = models.CharField(max_length=18)
    endereco = models.CharField(max_length=100)
    telefone = models.CharField(max_length=22)
    cidade =   models.CharField(max_length=80)
    estado = models.CharField(max_length=5)
    cep = models.CharField(max_length=50)
