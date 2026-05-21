---
title: float
sidebar_label: float
description: "Converte um inteiro em um float."
tags: ["floating-point"]
---


<LowercaseNote />

## Descrição

Converte um inteiro em um float.

| Nome | Descrição |
| ----- | ----------------------------------- |
| valor | Valor inteiro a ser convertido em float |

## Retornos

O inteiro fornecido como um float

## Exemplos

```c
new Float:FloatValue;
new Value = 52;
FloatValue = float(Value);   // Converte Value(52) em um float e o armazena em 'FloatValue' (52.0)
```
## Funções Relacionadas

- [floatround](floatround): Converte um float em um número inteiro (arredondamento).
- [floatstr](floatstr): Converte uma string em um float.
