---
title: toupper
sidebar_label: toupper
description: "Esta função altera um único caractere para maiúscula."
tags: ["string"]
---


<LowercaseNote />

## Descrição

Esta função altera um único caractere para maiúscula.

| Nome | Descrição |
| ---- | ------------------------------------- |
| c | O caractere a ser alterado para maiúsculo. |

## Retornos

O valor ASCII do caractere fornecido, mas em letras maiúsculas.

## Exemplos

```c
public OnPlayerText(playerid, text[])
{
    text[0] = toupper(text[0]);
    //Isso define o primeiro caractere como maiúsculo.
    return 1;
}
```
## Funções Relacionadas

- [tolower](tolower): Esta função altera um único caractere para minúsculo.
