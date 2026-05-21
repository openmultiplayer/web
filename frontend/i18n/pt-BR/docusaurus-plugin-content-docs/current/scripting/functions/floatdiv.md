---
title: floatdiv
sidebar_label: floatdiv
description: "Divida um carro alegórico por outro."
tags: ["math", "floating-point"]
---


<LowercaseNote />

## Descrição

Divida um carro alegórico por outro. Redundante, pois o operador de divisão (/) faz a mesma coisa.

| Nome | Descrição |
| -------------- | ----------------------------------------- |
| Float:dividend | Primeiro flutuar.                              |
| Float:divisor | Segundo float (divide o primeiro float.) |

## Retornos

O quociente dos dois carros alegóricos fornecidos.

## Exemplos

```c
public OnGameModeInit()
{
    new Float:Number1 = 8.05, Float:Number2 = 3.5; // Declara dois floats, Number1 (8.05) e Number2 (3.5)
    new Float:Quotient;
    Quotient = floatdiv(Number1, Number2); // Salva o quociente(=8.05/3.5 = 2.3) de Número1 e Número2 no float "Quotient"
    return 1;
}
```
## Funções Relacionadas

- [floatadd](floatadd): Adiciona dois carros alegóricos.
- [floatsub](floatsub): Subtrai um float de outro float.
- [floatmul](floatmul): Multiplique dois carros alegóricos.
