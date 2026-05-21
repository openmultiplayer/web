---
title: getarg
sidebar_label: getarg
description: "Obtenha um argumento que foi passado para uma função."
tags: ["core", "arguments", "args"]
---


<LowercaseNote />

## Descrição

Obtenha um argumento que foi passado para uma função.

| Nome | Descrição |
| ----- | ----------------------------------------------------------- |
| arg | O número de sequência do argumento. Use 0 para o primeiro argumento.     |
| index | O índice (caso o argumento seja um array) _(opcional=0)_ |

## Retornos

O valor do argumento.

## Exemplos

```c
SomeFunc(...)
{
    printf("%i", getarg(3));
}

public OnFilterScriptInit()
{
    SomeFunc(1, 3, 3, 7);
}

// Saída: 7. O quarto argumento (índice 3) é 7.
```
## Funções Relacionadas

- [numargs](numargs): Retorna o número de argumentos.
- [setarg](setarg): Defina um argumento.
