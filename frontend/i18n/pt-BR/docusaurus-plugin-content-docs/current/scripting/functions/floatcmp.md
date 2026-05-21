---
title: floatcmp
sidebar_label: floatcmp
description: "floatcmp pode ser usado para comparar valores flutuantes entre si, para validar a comparação."
tags: ["math", "floating-point"]
---


<LowercaseNote />

## Descrição

floatcmp pode ser usado para comparar valores flutuantes entre si, para validar a comparação.

| Nome | Descrição |
| ----------- | ---------------------------------- |
| Float:oper1 | O primeiro valor flutuante a ser comparado.  |
| Float:oper2 | O segundo valor flutuante a ser comparado. |

## Retornos

**0** se o valor corresponder, **1** se o primeiro valor for maior e **-1** se o segundo valor for maior.

## Exemplos

```c
new value;

value = floatcmp(2.0, 2.0); // Retorna 0 porque eles correspondem.

value = floatcmp(1.0, 2.0); // Retorna -1 porque o segundo valor é maior.

value = floatcmp(2.0, 1.0); // Retorna 1 porque o primeiro valor é maior.
```