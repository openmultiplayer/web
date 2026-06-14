---
title: GetConsoleVarAsInt
sidebar_label: GetConsoleVarAsInt
description: "Obtenha o valor inteiro de uma variável de console."
tags: []
---


## Descrição

Obtenha o valor inteiro de uma variável de console.

| Nome | Descrição |
| ------------ | ----------------------------------------------------- |
| const cvar[] | O nome da variável inteira da qual obter o valor. |

## Retornos

O valor da variável de console especificada. 0 se a variável de console especificada não for um número inteiro ou não existir.

## Exemplos

```c
new serverPort = GetConsoleVarAsInt("network.port");
printf("Server Port: %i", serverPort);
```
## Notas

:::tip

Digite 'varlist' no console do servidor para exibir uma lista de variáveis de console disponíveis e seus tipos.

:::

## Funções Relacionadas

- [GetConsoleVarAsString](GetConsoleVarAsString): recupera uma variável de servidor como uma string.
- [GetConsoleVarAsBool](GetConsoleVarAsBool): recupera uma variável de servidor como um booleano.
