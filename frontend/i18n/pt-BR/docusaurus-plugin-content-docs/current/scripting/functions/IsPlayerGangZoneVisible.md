---
title: IsPlayerGangZoneVisible
sidebar_label: IsPlayerGangZoneVisible
description: "Verifique se a gangzone do jogador está visível."
tags: ["player", "gangzone", "playergangzone"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifique se a gangzone do jogador está visível.

| Nome | Descrição |
| -------- | ------------------------------------------------------ |
| playerid | O ID do jogador ao qual a zona de gangue do jogador está vinculada. |
| zoneid | O ID da gangzone do jogador.                         |

## Retornos

**true** - A gangzone do jogador está visível.

**false** - A gangzone do jogador não está visível.

## Exemplos

```c
new gGangZoneID[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Crie a zona de gangue
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    // Mostrar a gangzone ao jogador
    PlayerGangZoneShow(playerid, gGangZoneID[playerid], 0xFF0000FF);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/zone", true))
    {
        if (IsPlayerGangZoneVisible(playerid, gGangZoneID[playerid]))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Gangzone is visible.");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Gangzone is not visible.");
        }
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [CreatePlayerGangZone](CreatePlayerGangZone): Criar gangzone de jogador.
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): Destrua a gangzone do jogador.
- [PlayerGangZoneShow](PlayerGangZoneShow): Mostrar gangzone do jogador.
- [PlayerGangZoneHide](PlayerGangZoneHide): Ocultar zona de gangue do jogador.
- [PlayerGangZoneFlash](PlayerGangZoneFlash): Inicia o flash da gangzone do jogador.
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): Interrompe o flash da gangzone do jogador.
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): Obtenha a cor piscante da gangzone de um jogador.
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): Obtenha a cor da gangzone de um jogador.
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): Obtenha a posição de uma gangzone, representada pelas coordenadas minX, minY, maxX, maxY.
- [IsValidPlayerGangZone](IsValidPlayerGangZone): Verifique se a gangzone do jogador é válida.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): Verifica se o jogador está na gangzone do jogador.
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): Verifique se a gangzone do jogador está piscando.
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): Habilita o callback quando um jogador entra/sai desta zona.
