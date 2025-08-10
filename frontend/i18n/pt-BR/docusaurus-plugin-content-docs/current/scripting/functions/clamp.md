---
title: clamp
sidebar_label: clamp
description: Força um valor a estar dentro de um intervalo.
tags: ["core"]
---

<LowercaseNote />

## Descrição

Força um valor a estar dentro de um intervalo.

| Nome  | Descrição                                         |
| ----- | ------------------------------------------------- |
| value | O valor a ser forçado em um intervalo.           |
| min   | O limite inferior do intervalo. _(opcional=cellmin)_  |
| max   | O limite superior do intervalo. _(opcional=cellmax)_ |

## Retorno

value, se estiver no intervalo min–max, min, se value for menor que min ou max, se value for maior que max.

## Exemplos

```c
new
    valueA = 3,
    valueB = 7,
    valueC = 100
;
printf("O valor é: %d", clamp(valueA, 5, 10)); // saída: "O valor é: 5" porque 3 é menor que 5.
printf("O valor é: %d", clamp(valueB, 5, 10)); // saída: "O valor é: 7" porque 7 está entre 5 e 10.
printf("O valor é: %d", clamp(valueC, 5, 10)); // saída: "O valor é: 10" porque 100 é maior que 10.
```