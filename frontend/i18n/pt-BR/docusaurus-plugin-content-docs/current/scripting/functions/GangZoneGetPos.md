---
title: GangZoneGetPos
sidebar_label: GangZoneGetPos
description: "Obtenha a posição de uma gangzone, representada pelas coordenadas minX, minY, maxX, maxY"
tags: ["player", "gangzone"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha a posição de uma gangzone, representada pelas coordenadas minX, minY, maxX, maxY.

| Nome | Descrição |
| ----------- | ----------------------------------------------------------- |
| zoneid | O ID da zona cujas coordenadas deseja obter. |
| &Float:minX | A coordenada X para o lado oeste da gangzone do jogador.  |
| &Float:minY | A coordenada Y para o lado sul da gangzone do jogador. |
| &Float:maxX | A coordenada X para o lado leste da gangzone do jogador.  |
| &Float:maxY | A coordenada Y para o lado norte da gangzone do jogador. |

## Retornos

Esta função sempre retorna **true**.

## Exemplos

```c
new gangZone;

public OnGameModeInit()
{
    gangZone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);

    new
        Float:minX,
        Float:minY,
        Float:maxX,
        Float:maxY;

    GangZoneGetPos(gangZone, minX, minY, maxX, maxY);
    return 1;
}
```
## Funções Relacionadas

- [GangZoneDestroy](GangZoneDestroy): Destrua uma zona de gangue.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Mostra uma gangzone para um jogador.
- [GangZoneShowForAll](GangZoneShowForAll): Mostra uma gangzone para todos os jogadores.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Ocultar uma gangzone para um jogador.
- [GangZoneHideForAll](GangZoneHideForAll): Oculte uma gangzone para todos os jogadores.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Faz um flash de gangzone para um jogador.
- [GangZoneFlashForAll](GangZoneFlashForAll): Faça um flash de gangzone para todos os jogadores.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Interrompe o flash de uma gangzone para um jogador.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Interrompe o flash de uma gangzone para todos os jogadores.
- [IsValidGangZone](IsValidGangZone): Verifique se a gangzone é válida.
- [IsPlayerInGangZone](IsPlayerInGangZone): Verifica se o jogador está na gangzone.
- [IsGangZoneVisibleForPlayer](IsGangZoneVisibleForPlayer): Verifique se a gangzone está visível para o jogador.
- [GangZoneGetFlashColourForPlayer](GangZoneGetFlashColourForPlayer): Obtenha a cor piscante de uma gangzone para o jogador.
- [IsGangZoneFlashingForPlayer](IsGangZoneFlashingForPlayer): Verifique se a gangzone está piscando para o jogador.
