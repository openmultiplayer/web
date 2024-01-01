---
title: ResetPlayerMoney
description: Resetar o dinheiro de um jogador para $0.
tags: ["player"]
---

## Descrição

Resetar o dinheiro de um jogador para \$0.

| Nome     | Descrição                                   |
| -------- | ------------------------------------------- |
| playerid | O ID do jogador do qual resetar o dinheiro. |

## Retorno

1: A função foi executada com sucesso.

0: A função falhou ao ser executada. Isso significa que o jogador não está conectado.

## Exemplos

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    SendClientMessage(playerid, 0xFFFFFFAA, "Você morreu e perdeu todo o seu dinheiro!");
    ResetPlayerMoney(playerid);
    return 1;
}
```

## Funções Relacionadas

- [GetPlayerMoney](GetPlayerMoney): Retorna quanto dinheiro um jogador tem.
- [GivePlayerMoney](GivePlayerMoney): Dê dinheiro a um jogador.
