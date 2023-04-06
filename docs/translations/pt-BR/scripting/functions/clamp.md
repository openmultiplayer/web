---
title: clamp
description: Força um valor a estar dentro de um alcance.
tags: []
---

<LowercaseNote />

## Descrição

Força um valor a estar dentro de um alcance.

| Nome  | Descrição                            |
| ----- | ------------------------------------ |
| valor | O valor a ser forçado em um alcance. |
| min   | O limite mínimo do alcance.          |
| max   | O limite máximo do alcance.         |

## Retornos

valor, se estiver no alcance min–max, min, se o valor for menor que min ou max, se o valor for maior que max.

## Exemplos

```c
new
    valorA = 3,
    valorB = 7,
    valorC = 100
;
printf("O valor é: %d", clamp(valorA, 5, 10)); // saída: "O valor é: 5" porque 3 é menor que 5.
printf("O valor é: %d", clamp(valorB, 5, 10)); // saída: "O valor é: 7" porque 7 está entre 5 e 10.
printf("O valor é: %d", clamp(valorC, 5, 10)); // saída: "The valor is: 10" porque 100 é mais que 10.
```
