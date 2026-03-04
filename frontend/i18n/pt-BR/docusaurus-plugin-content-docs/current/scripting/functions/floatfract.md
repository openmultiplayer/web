---
title: floatfract
sidebar_label: floatfract
description: Obtém a parte fracionária de um float.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## Descrição

Obtém a parte fracionária de um float. Isso significa o valor dos números após o ponto decimal.

| Name        | Description                                     |
| ----------- | ----------------------------------------------- |
| Float:value | O float do qual obter a parte fracionária.      |

## Retorno

A parte fracionária do float, como valor float.

## Exemplos

```c
new Float:fFract = floatfract(3.14159); // retorna 0.14159
```

## Funções Relacionadas

- [floatround](floatround): Converte um float em inteiro (arredondando).
