---
title: floatadd
sidebar_label: floatadd
description: "Adiciona dois carros alegóricos juntos."
tags: ["math", "floating-point"]
---


<LowercaseNote />

## Descrição

Adiciona dois carros alegóricos juntos. Esta função é redundante porque o operador padrão (+) faz a mesma coisa.

| Nome | Descrição |
| ------------- | ------------- |
| Float:Number1 | Primeiro flutuar.  |
| Float:Number2 | Segundo flutuador. |

## Retornos

A soma dos dois carros alegóricos fornecidos.

## Exemplos

```c
public OnGameModeInit()
{
    new Float:Number1 = 2, Float:Number2 = 3; // Declara dois floats, Number1 (2) e Number2 (3)
    new Float:Sum;
    Sum = floatadd(Number1, Number2); // Salva o Sum(=2+3 = 5) de Número1 e Número2 no float "Sum"
    return 1;
}
```
## Funções Relacionadas

- [floatsub](floatsub): Subtrai dois carros alegóricos.
- [floatmul](floatmul): Multiplica dois carros alegóricos.
- [floatdiv](floatdiv): Divide um float por outro.
