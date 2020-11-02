---
title: GetPlayerMoney
description: Retorna a quantidade de dinheiro que um jogador tem.
tags: ["player"]
---

## Descrição

Retorna a quantidade de dinheiro que um jogador tem.

| Nome     | Descrição                                      |
| -------- | ---------------------------------------------- |
| playerid | O ID do jogador do qual deseja ver o dinheiro. |

## Retorno

A quantidade de dinheiro que um jogador tem.

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

- [GivePlayerMoney](GivePlayerMoney.md): Dá dinheiro a um jogador.
- [ResetPlayerMoney](ResetPlayerMoney.md): Define o dinheiro de um jogador para \$0.
