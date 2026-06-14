---
title: floatsqroot
sidebar_label: floatsqroot
description: "Calcula a raiz quadrada de determinado valor."
tags: ["math", "floating-point"]
---


<LowercaseNote />

## Descrição

Calcula a raiz quadrada de determinado valor.

| Nome | Descrição |
| ----------- | ------------------------------------------ |
| Float:value | O valor para calcular a raiz quadrada de. |

## Retornos

A raiz quadrada do valor de entrada, como um ponto flutuante.

## Exemplos

```c
new Float:sqroot = floatsqroot(25.0); // Retorna 5.0, porque 5x5 = 25
```
## Notas

:::tip

Esta função gera um erro de “domínio” se o valor de entrada for negativo. Você pode usar [floatabs](floatabs) para obter o valor absoluto (positivo).

:::

## Funções Relacionadas

- [floatpower](floatpower): Aumenta o valor fornecido para uma potência de expoente.
- [floatlog](floatlog): Obtenha o logaritmo do valor flutuante.
