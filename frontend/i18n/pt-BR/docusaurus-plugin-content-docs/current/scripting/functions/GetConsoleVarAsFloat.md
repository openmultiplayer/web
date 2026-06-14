---
title: GetConsoleVarAsFloat
sidebar_label: GetConsoleVarAsFloat
description: "Obtenha o valor flutuante de uma variável de console."
tags: []
---


## Descrição

Obtenha o valor flutuante de uma variável de console.

| Nome | Descrição |
| ------------ | --------------------------------------------------- |
| const cvar[] | O nome da variável float da qual obter o valor. |

## Retornos

O valor da variável de console especificada.

0,0 se a variável de console especificada não for um número inteiro ou não existir.

## Exemplos

```c
new Float:radius = GetConsoleVarAsInt("game.nametag_draw_radius");
printf("Nametag Draw Radius: %i", radius);
```
## Notas

:::tip

Digite 'varlist' no console do servidor para exibir uma lista de variáveis de console disponíveis e seus tipos.

:::

## Funções Relacionadas

- [GetConsoleVarAsInt](GetConsoleVarAsInt): recupera uma variável de servidor como um número inteiro.
- [GetConsoleVarAsString](GetConsoleVarAsString): recupera uma variável de servidor como uma string.
- [GetConsoleVarAsBool](GetConsoleVarAsBool): recupera uma variável de servidor como um booleano.
