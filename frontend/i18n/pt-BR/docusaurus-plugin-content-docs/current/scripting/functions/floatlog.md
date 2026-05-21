---
title: floatlog
sidebar_label: floatlog
description: "Esta função permite obter o logaritmo de um valor flutuante."
tags: ["math", "floating-point"]
---


<LowercaseNote />

## Descrição

Esta função permite obter o logaritmo de um valor flutuante.

| Nome | Descrição |
| ----------- | ---------------------------------------- |
| Float:value | O valor do qual obter o logaritmo. |
| Float:base | A base do logaritmo.                      |

## Retornos

O logaritmo como um valor flutuante.

## Exemplos

```c
public OnGameModeInit()
{
    printf("The logarithm of 15.0 with the base 10.0 is %.1f", floatlog(15.0, 10.0));
    return 1;
}
```
## Funções Relacionadas

- [floatsqroot](floatsqroot): Calcula a raiz quadrada de um valor de ponto flutuante.
- [floatpower](floatpower): Aumenta o valor fornecido para uma potência de expoente.
