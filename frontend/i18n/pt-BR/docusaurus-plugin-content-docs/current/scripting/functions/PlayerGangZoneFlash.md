---
title: PlayerGangZoneFlash
sidebar_label: PlayerGangZoneFlash
description: "Iniciar flash de gangzone do jogador"
tags: ["player", "gangzone", "playergangzone"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Inicie o flash da gangzone do jogador.

| Nome | Descrição |
| ----------- | --------------------------------------------------------- |
| playerid | O ID do jogador ao qual a zona de gangue do jogador está vinculada.    |
| zoneid | O ID da gangzone do jogador para começar a piscar.      |
| flashColour | A cor pela qual a gangzone do jogador estará piscando. |

## Retornos

**1:** A função foi executada com sucesso. O sucesso é relatado mesmo que a gangzone do jogador estivesse piscando para começar.

**0:** A função não foi executada. A gangzone especificada não existe.

## Exemplos

```c
// Esta variável é usada para armazenar o id da gangzone
// para que possamos usá-lo em todo o script
new gGangZoneID[MAX_PLAYERS] = {INVALID_GANG_ZONE, ...};

public OnPlayerConnect(playerid)
{
    // Crie a zona de gangue
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    // Mostre o jogador da gangzone
    PlayerGangZoneShow(playerid, gGangZoneID[playerid]);

    // Iniciar flash de gangzone do jogador
    PlayerGangZoneFlash(playerid, gGangZoneID[playerid], 0xFF00FFFF);
}
```
## Funções Relacionadas

- [CreatePlayerGangZone](CreatePlayerGangZone): Criar gangzone de jogador.
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): Destrua a gangzone do jogador.
- [PlayerGangZoneShow](PlayerGangZoneShow): Mostrar gangzone do jogador.
- [PlayerGangZoneHide](PlayerGangZoneHide): Ocultar zona de gangue do jogador.
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): Interrompe o flash da gangzone do jogador.
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): Obtenha a cor da gangzone de um jogador.
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): Obtenha a cor piscante da gangzone de um jogador.
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): Obtenha a posição de uma gangzone, representada pelas coordenadas minX, minY, maxX, maxY.
- [IsValidPlayerGangZone](IsValidPlayerGangZone): Verifique se a gangzone do jogador é válida.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): Verifica se o jogador está na gangzone do jogador.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): Verifique se a gangzone do jogador está visível.
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): Verifique se a gangzone do jogador está piscando.
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): Habilita o callback quando um jogador entra/sai desta zona.
