---
title: tolower
sidebar_label: tolower
description: "Esta função altera um único caractere para minúsculo."
tags: ["string"]
---


<LowercaseNote />

## Descrição

Esta função altera um único caractere para minúsculo.

| Nome | Descrição |
| ---- | ------------------------------------- |
| c | O caractere a ser alterado para minúsculo. |

## Retornos

O valor ASCII do caractere fornecido em minúsculas.

## Exemplos

```c
public OnPlayerText(playerid, text[])
{
    text[0] = tolower(text[0]);
    //Isso define o primeiro caractere como minúsculo.
    return 1;
}
```
## Funções Relacionadas

- [toupper](toupper): Esta função altera um único caractere para maiúsculo.
