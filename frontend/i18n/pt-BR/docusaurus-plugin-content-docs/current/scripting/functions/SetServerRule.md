---
title: SetServerRule
sidebar_label: SetServerRule
description: "Adicione uma regra de servidor."
tags: ["rule"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Adicione uma regra de servidor.

## Parâmetros

| Nome | Descrição |
| ---------------- | ------------------------------------------ |
| const rule[] | O nome da regra do servidor a ser adicionado.               |
| const format[] | O valor da regra do servidor.                     |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag. |

## Retornos

Retorna true se a função foi executada com sucesso, caso contrário, false.

## Exemplos

```c
public OnGameModeInit()
{
    SetServerRule("discord", "discord.gg/samp");
    return 1;
}
```
## Notas

:::tip

Esta função é igual a [AddServerRule](AddServerRule).

:::

## Funções Relacionadas

- [RemoveServerRule](RemoveServerRule): Remova a regra do servidor.
- [IsValidServerRule](IsValidServerRule): Verifica se a regra do servidor fornecida é válida.
