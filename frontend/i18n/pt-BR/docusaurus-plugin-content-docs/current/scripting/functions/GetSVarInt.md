---
title: GetSVarInt
sidebar_label: GetSVarInt
description: "Obtém o valor de uma variável de servidor inteira."
tags: ["server variable", "svar"]
---


<VersionWarn version='SA-MP 0.3.7 R2' />

## Descrição

Obtém o valor de uma variável de servidor inteira.

| Nome | Descrição |
| ------------ | ---------------------------------------------------------------------------------------------- |
| const svar[] | O nome da variável do servidor (sem distinção entre maiúsculas e minúsculas).<br />Definida em [SetSVarInt](SetSVarInt). |

## Retornos

O valor inteiro da variável de servidor especificada.

Ele ainda retornará 0 se a variável não estiver definida.

## Exemplos

```c
// definir "Versão"
SetSVarInt("Version", 37);

// imprimirá a versão que o servidor possui
printf("Version: %d", GetSVarInt("Version"));
```
## Funções Relacionadas

- [SetSVarInt](SetSVarInt): Defina um número inteiro para uma variável do servidor.
- [SetSVarString](SetSVarString): Defina uma string para uma variável de servidor.
- [GetSVarString](GetSVarString): Obtenha a string definida anteriormente de uma variável do servidor.
- [SetSVarFloat](SetSVarFloat): Defina um ponto flutuante para uma variável do servidor.
- [GetSVarFloat](GetSVarFloat): Obtenha o float definido anteriormente de uma variável do servidor.
- [DeleteSVar](DeleteSVar): Exclua uma variável de servidor.
