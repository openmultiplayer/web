---
title: GivePlayerMoney
description: Dá ou retira dinheiro para/de um jogador.
tags: ["player"]
---

## Descrição

Dá ou tira dinheiro para/de um jogador.

| Nome     | Descrição                                                                              |
| -------- | -------------------------------------------------------------------------------------- |
| playerid | O ID do jogador ao qual dá ou retira dinheiro.                                         |
| money    | Quantidade de dinheiro a dar ao jogador. Use um valor negativo(-) para tirar dinheiro. |

## Retorno

1: A função foi executada com sucesso.

0: A função falhou ao ser executada. Isso significa que o jogador não está conectado.

## Exemplos

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    if (killerid != INVALID_PLAYER_ID)
    {
       // Dê $1000 para o assassino
       GivePlayerMoney(killerid, 1000);
       SendClientMessage(killerid, -1, "Você recebeu $1000 pelo assassinato.");
    }

    // Retira $500 do jogador que morreu.
    GivePlayerMoney(playerid, -500);
}
```

## Funções Relacionadas

- [ResetPlayerMoney](ResetPlayerMoney.md): Define o dinheiro de um jogador para \$0.
- [GetPlayerMoney](GetPlayerMoney.md): Verifique quanto dinheiro um jogador tem.
