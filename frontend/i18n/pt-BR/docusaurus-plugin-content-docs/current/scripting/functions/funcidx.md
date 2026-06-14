---
title: funcidx
sidebar_label: funcidx
description: "Esta função retorna o ID de uma função pública pelo seu nome."
tags: ["core"]
---


<LowercaseNote />

## Descrição

Esta função retorna o ID de uma função pública pelo seu nome.

| Nome | Descrição |
| ------------ | ------------------------------------------------- |
| const name[] | O nome da função pública da qual obter o ID. |

## Retornos

O ID da função (IDs começa em **0**).

**-1** se a função não existir.

## Exemplos

```c
public OnFilterScriptInit()
{
    printf("ID of OnFilterScriptInit: %d", funcidx("OnFilterScriptInit"));
    return 1;
}
```
## Funções Relacionadas

- [CallLocalFunction](CallLocalFunction): Chame uma função no script.
- [CallRemoteFunction](CallRemoteFunction): Chame uma função em qualquer script carregado.
