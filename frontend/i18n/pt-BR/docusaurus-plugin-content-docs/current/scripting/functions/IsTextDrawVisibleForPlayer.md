---
title: IsTextDrawVisibleForPlayer
sidebar_label: IsTextDrawVisibleForPlayer
description: "Verifica se um textdraw é mostrado para um jogador."
tags: ["textdraw"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se um textdraw é mostrado para um jogador.

| Nome | Descrição |
| ----------- | ------------------------------ |
| playerid | O ID do jogador a ser verificado. |
| Text:textid | O ID do textdraw.        |

## Retornos

**true** - Textdraw é mostrado para o jogador.

**false** - Textdraw não é mostrado para o jogador.

## Exemplos

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(240.0, 580.0, "Example Text");
    return 1;
}

public OnPlayerConnect(playerid)
{
    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (IsTextDrawVisibleForPlayer(playerid, gMyTextdraw))
    {
        // gMyTextdraw é mostrado para o jogador
    }
    return 1;
}
```
## Funções Relacionadas

- [TextDrawCreate](TextDrawCreate): Cria um desenho de texto.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Mostra um textdraw para um determinado jogador.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Oculta um textdraw para um determinado jogador.
