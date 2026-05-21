---
title: PlayerGangZoneGetPos
sidebar_label: PlayerGangZoneGetPos
description: "Obtenha a posição de uma gangzone, representada pelas coordenadas minX, minY, maxX, maxY"
tags: ["player", "gangzone", "playergangzone"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha a posição de uma gangzone, representada pelas coordenadas minX, minY, maxX, maxY.

| Nome | Descrição |
| ----------- | ----------------------------------------------------------- |
| playerid | O ID do jogador ao qual a zona de gangue do jogador está vinculada.      |
| zoneid | O ID da zona cujas coordenadas deseja obter. |
| &Float:minX | A coordenada X para o lado oeste da gangzone do jogador.  |
| &Float:minY | A coordenada Y para o lado sul da gangzone do jogador. |
| &Float:maxX | A coordenada X para o lado leste da gangzone do jogador.  |
| &Float:maxY | A coordenada Y para o lado norte da gangzone do jogador. |

## Retornos

Esta função sempre retorna **true**.

## Exemplos

```c
new gGangZoneID[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Crie a zona de gangue
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    new
        Float:minX,
        Float:minY,
        Float:maxX,
        Float:maxY;

    PlayerGangZoneGetPos(playerid, gGangZoneID[playerid], minX, minY, maxX, maxY);
    return 1;
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
- [IsValidPlayerGangZone](IsValidPlayerGangZone): Verifique se a gangzone do jogador é válida.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): Verifica se o jogador está na gangzone do jogador.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): Verifique se a gangzone do jogador está visível.
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): Verifique se a gangzone do jogador está piscando.
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): Habilita o callback quando um jogador entra/sai desta zona.
