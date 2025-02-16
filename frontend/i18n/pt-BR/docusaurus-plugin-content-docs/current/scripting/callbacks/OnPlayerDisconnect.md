---
title: OnPlayerDisconnect
sidebar_label: OnPlayerDisconnect
description: Esta callback é chamada quando um jogador disconecta do servidor.
tags: ["player"]
---

## Descrição

Esta callback é chamada quando um jogador disconecta do servidor.

| Nome     | Descrição                                                        |
| -------- | ---------------------------------------------------------------- |
| playerid | O ID do jogador que disconectou                                  |
| reason   | O motivo pela qual o jogador desconectou (veja a tabela abaixo). |

## Retorno

1 - Irá previnir que outro filterscript receba esta callback.

0 - Indica que esta callback será passada para o próximo filterscript.

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
public OnPlayerDisconnect(playerid, reason)
{
    new
        szString[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);

    new szDisconnectReason[3][] =
    {
        "Timeout/Crash",
        "Quit",
        "Kick/Ban"
    };

    format(szString, sizeof szString, "%s desconectou do servidor (%s).", playerName, szDisconnectReason[reason]);

    SendClientMessageToAll(0xC4C4C4FF, szString);
    return 1;
}
```

## Notas

:::tip

Algumas funções podem não funcionar corretamente quando usadas nesta callback pois o jogador já está desconectado quando a callback é chamada. Isso significa que você não pode ter informações inequívocas de funções como GetPlayerIp e GetPlayerPos.

:::

## Funções Relacionadas
