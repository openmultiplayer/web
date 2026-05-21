---
title: floatsub
sidebar_label: floatsub
description: "Subtrai um float de outro."
tags: ["math", "floating-point"]
---


<LowercaseNote />

## Descrição

Subtrai um float de outro. Observe que esta função não tem uso real, pois pode simplesmente usar o operador padrão (-).

| Nome | Descrição |
| ----------- | --------------------------------------------------- |
| Float:oper1 | Primeiro Float.                                        |
| Float:oper2 | Segundo Float (é subtraído do primeiro float) |

## Retornos

A diferença dos dois carros alegóricos fornecidos.

## Exemplos

```c
public OnGameModeInit()
{
    new Float:Number1 = 5, Float:Number2 = 2; // Declara dois floats, Number1 (5) e Number2 (2)
    new Float:Difference;
    Difference = floatsub(Number1, Number2); // Salva o Difference(5-2 = 3) de Número1 e Número2 no float "Difference"
    return 1;
}
```
## Funções Relacionadas

- [floatadd](floatadd): Adiciona dois carros alegóricos.
- [floatmul](floatmul): Multiplica dois carros alegóricos.
- [floatdiv](floatdiv): Divide um float por outro.
