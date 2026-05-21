---
title: numargs
sidebar_label: numargs
description: "Obtenha o número de argumentos passados ​​para uma função."
tags: ["core", "arguments", "args"]
---


<LowercaseNote />

## Descrição

Obtenha o número de argumentos passados para uma função.

## Exemplos

```c
SomeFunction(...)
{
    printf("numargs(): %i", numargs());
}

public OnFilterScriptInit()
{
    SomeFunction(1, 2, 3);
}

// Saída: "numargs(): 3"
// Porque os parâmetros 3 (1, 2, 3) foram passados.
```
## Funções Relacionadas

- [getarg](getarg): recupera um argumento de uma lista de argumentos variáveis.
- [setarg](setarg): Defina um argumento.
