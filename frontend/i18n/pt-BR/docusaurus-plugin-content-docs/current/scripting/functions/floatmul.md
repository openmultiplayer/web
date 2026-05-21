---
title: floatmul
sidebar_label: floatmul
description: "Multiplica dois carros alegóricos entre si."
tags: ["math", "floating-point"]
---


<LowercaseNote />

## Descrição

Multiplica dois carros alegóricos entre si.

| Nome | Descrição |
| ----------- | ------------------------------------------------- |
| Float:oper1 | Primeiro Float.                                      |
| Float:oper2 | Segundo Float, o primeiro é multiplicado. |

## Retornos

O produto dos dois floats dados

## Exemplos

```c
public OnGameModeInit()
{
    new Float:Number1 = 2.3, Float:Number2 = 3.5; // Declara dois floats, Number1 (2.3) e Number2 (3.5)
    new Float:Product;
    Product = floatmul(Number1, Number2); // Salva o produto(=2.3*3.5 = 8.05) de Número1 e Número2 no float "Product"
    return 1;
}
```
## Notas

:::tip

Esta função é bastante redundante, pois não é diferente do operador de multiplicação convencional (\*).

:::

## Funções Relacionadas

- [floatadd](floatadd): Adiciona dois carros alegóricos.
- [floatsub](floatsub): Subtrai dois carros alegóricos.
- [floatdiv](floatdiv): Divide um float por outro.
