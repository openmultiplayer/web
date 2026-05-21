---
title: strfloat
sidebar_label: strfloat
description: "Converte uma string em um float."
tags: ["string", "floating-point"]
---


<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## Descrição

Converte uma string em um float.

| Nome | Descrição |
| -------------- | ----------------------------------- |
| const string[] | A string a ser convertida em um float. |

## Retornos

O valor flutuante solicitado.

## Exemplos

```c
new string[4] = "6.9"; // Uma string contendo um float.

new Float:value = strfloat(string);

SetPlayerPos(playerid, 0.0, 0.0, value);
```
## Notas

:::tip

Esta função é igual a [floatstr](floatstr).

:::

## Funções Relacionadas

- [floatround](floatround): Converte um float em um número inteiro (arredondamento).
- [float](float): Converte um número inteiro em float.
