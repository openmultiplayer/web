---
title: max
sidebar_label: max
description: "Retorne o maior de dois números."
tags: ["core"]
---


<LowercaseNote />

## Descrição

Função usada para comparar os valores.

| Nome | Descrição |
| ------ | ----------------------- |
| value1 | Valor 1 (a) para comparar. |
| value2 | Valor 2 (b) para comparar. |

## Retornos

O valor mais alto de `value1` e `value2`

Se ambos forem equivalentes, `value1` será retornado.

## Exemplos

```c
public OnGameModeInit()
{
    new a, b, result;

    a = 5;
    b = 10;
    result = max(a, b);

    printf("max(%d, %d) = %d", a, b, result);
    // Como b é maior que a, o resultado será 10.

    return 1;
}
```
## Funções Relacionadas

- [min](min): Compare e obtenha o valor mínimo.
