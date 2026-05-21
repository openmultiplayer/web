---
title: floatstr
sidebar_label: floatstr
description: "Converte uma string em um float."
tags: ["string", "floating-point"]
---


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
new string[4] = "6.9"; // Um STRING segurando um FLOAT.

new Float:value = floatstr(string);

SetPlayerPos(playerid, 0.0, 0.0, value);
```
## Funções Relacionadas

- [floatround](floatround): Converte um float em um número inteiro (arredondamento).
- [float](float): Converte um número inteiro em float.
