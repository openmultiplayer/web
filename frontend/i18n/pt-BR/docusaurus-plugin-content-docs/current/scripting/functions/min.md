---
title: min
sidebar_label: min
description: "Retorne o menor de dois números."
tags: ["core"]
---


<LowercaseNote />

## Descrição

Função usada para comparar os valores.

| Nome | Descrição |
| ------ | ----------------------- |
| value1 | Valor 1 (a) para comparar. |
| value1 | Valor 2 (b) para comparar. |

## Retornos

O valor mais baixo de `value1` e `value2`

Se ambos forem equivalentes, `value1` será retornado.

## Exemplos

```c

public OnGameModeInit()
{
    new a, b, result;

    a = 5;
    b = 10;
    result = min(a, b);

    printf("min(%d, %d) = %d", a, b, result);
    // Como a é menor que b, o resultado será 5.

    return 1;
}
```
## Funções Relacionadas

- [max](max): Compare e obtenha o valor máximo.
