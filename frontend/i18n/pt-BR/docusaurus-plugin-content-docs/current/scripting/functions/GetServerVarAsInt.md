---
title: GetServerVarAsInt
sidebar_label: GetServerVarAsInt
description: "Obtenha o valor inteiro de uma variável de servidor."
tags: []
---


:::warning

Esta função, a partir de 0.3.7 R2, está obsoleta. Consulte GetConsoleVarAsInt

:::

## Descrição

Obtenha o valor inteiro de uma variável de servidor.

| Nome | Descrição |
| --------------- | ----------------------------------------------------- |
| const varname[] | O nome da variável inteira da qual obter o valor. |

## Retornos

O valor da variável de servidor especificada. 0 se a variável de servidor especificada não for um número inteiro ou não existir.

## Exemplos

```c
new serverPort = GetServerVarAsInt("port");
printf("Server Port: %i", serverPort);
```
## Notas

:::tip

Digite 'varlist' no console do servidor para exibir uma lista de variáveis de servidor disponíveis e seus tipos.

:::

## Funções Relacionadas

- [GetServerVarAsString](GetServerVarAsString): recupera uma variável de servidor como uma string.
- [GetServerVarAsBool](GetServerVarAsBool): recupera uma variável de servidor como um booleano.
