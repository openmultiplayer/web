---
title: floatpower
sidebar_label: floatpower
description: "Eleva o valor fornecido à potência do expoente."
tags: ["math", "floating-point"]
---


<LowercaseNote />

## Descrição

Eleva o valor fornecido à potência do expoente.

| Nome | Descrição |
| -------------- | ------------------------------------------------------------------------- |
| Float:value | O valor a ser elevado a uma potência, como um número de ponto flutuante.                |
| Float:exponent | O expoente também é um número de ponto flutuante. Pode ser zero ou negativo. |

## Retornos

O resultado de 'valor' elevado à potência de 'expoente'.

## Exemplos

```c
printf("2 to the power of 8 is %.1f", floatpower(2.0, 8.0));
// Resultado: 256.0
```
## Funções Relacionadas

- [floatsqroot](floatsqroot): Calcula a raiz quadrada de um valor de ponto flutuante.
- [floatlog](floatlog): Obtenha o logaritmo do valor flutuante.
