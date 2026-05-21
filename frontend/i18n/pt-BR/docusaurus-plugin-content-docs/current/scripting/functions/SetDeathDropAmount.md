---
title: SetDeathDropAmount
sidebar_label: SetDeathDropAmount
description: "Define a morte e deixa cair dinheiro."
tags: []
---


:::warning

Não funciona, use [CreatePickup](CreatePickup).

:::

## Descrição

Define a morte e deixa cair dinheiro.

| Nome | Descrição |
| ------ | ----------------------- |
| amount | Quantidade de dinheiro a definir. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnGameModeInit()
{
    SetDeathDropAmount(5000);
    return 1;
}
```
## Notas

:::warning

Esta função não funciona na versão SA:MP atual!

:::

## Funções Relacionadas

- [CreatePickup](CreatePickup): Crie um pickup.
- [GivePlayerMoney](GivePlayerMoney): Dê dinheiro a um jogador.

## Callbacks Relacionadas

- [OnPlayerDeath](../callbacks/OnPlayerDeath): Chamado quando um jogador morre.
