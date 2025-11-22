---
title: GetPlayerMoney
sidebar_label: GetPlayerMoney
description: Retorna a quantidade de dinheiro que um jogador possui.
tags: ["player"]
---

## Descrição

Retorna a quantidade de dinheiro que um jogador possui.

| Nome     | Descrição                                           |
| -------- | --------------------------------------------------- |
| playerid | O ID do jogador que se deseja verificar o dinheiro. |

## Retorno

A quantidade de dinheiro que o jogador possui.

## Exemplos

```c
public OnPlayerSpawn(playerid)
{
   new string[32];
   format(string, sizeof(string), "Seu dinheiro: $%i.", GetPlayerMoney(playerid));
   SendClientMessage(playerid, 0xFFFFFFAA, string);
}
```

## Funções Relacionadas

- [GivePlayerMoney](GivePlayerMoney): Dá dinheiro a um jogador.
- [ResetPlayerMoney](ResetPlayerMoney): Define o dinheiro de um jogador para \$0.
