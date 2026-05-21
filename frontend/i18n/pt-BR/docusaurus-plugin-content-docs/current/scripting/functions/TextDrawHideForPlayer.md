---
title: TextDrawHideForPlayer
sidebar_label: TextDrawHideForPlayer
description: "Oculta um textdraw para um jogador específico."
tags: ["player", "textdraw"]
---


## Descrição

Oculta um textdraw para um jogador específico.

| Nome | Descrição |
| ----------- | ----------------------------------------------------------- |
| playerid | O ID do jogador para o qual o textdraw deve ser ocultado |
| Text:textid | O ID do textdraw a ser ocultado |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(123.0, 123.0, "Example");
    return 1;
}

public OnGameModeExit()
{
    TextDrawDestroy(gMyTextdraw);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}

public OnPlayerDeath(playerid, reason)
{
    TextDrawHideForPlayer(playerid, gMyTextdraw);
    return 1;
}
```
## Funções Relacionadas

- [TextDrawHideForAll](TextDrawHideForAll): Oculta um textdraw para todos os jogadores.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Mostra um textdraw para um determinado jogador.
- [TextDrawShowForAll](TextDrawShowForAll): Mostra um textdraw para todos os jogadores.
- [IsTextDrawVisibleForPlayer](IsTextDrawVisibleForPlayer): Verifica se um textdraw é mostrado para um jogador.
