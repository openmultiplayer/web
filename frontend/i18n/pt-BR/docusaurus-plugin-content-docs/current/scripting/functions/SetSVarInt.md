---
title: SetSVarInt
sidebar_label: SetSVarInt
description: "Defina uma variável de servidor inteira."
tags: ["server variable", "svar"]
---


<VersionWarn version='SA-MP 0.3.7 R2' />

## Descrição

Defina uma variável de servidor inteira.

| Nome | Descrição |
| ------------ | -------------------------------- |
| const svar[] | O nome da variável do servidor. |
| valor | O número inteiro a ser definido.           |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. O nome da variável é nulo ou tem mais de 40 caracteres.

## Exemplos

```c
// definir "Version"
SetSVarInt("Version", 37);

// imprimirá a versão que o servidor possui
printf("Version: %d", GetSVarInt("Version"));
```
## Funções Relacionadas

- [GetSVarInt](GetSVarInt): Obtenha um servidor de jogador como um número inteiro.
- [SetSVarString](SetSVarString): Defina uma string para uma variável de servidor.
- [GetSVarString](GetSVarString): Obtenha a string definida anteriormente de uma variável do servidor.
- [SetSVarFloat](SetSVarFloat): Defina um ponto flutuante para uma variável do servidor.
- [GetSVarFloat](GetSVarFloat): Obtenha o float definido anteriormente de uma variável do servidor.
- [DeleteSVar](DeleteSVar): Exclua uma variável de servidor.
