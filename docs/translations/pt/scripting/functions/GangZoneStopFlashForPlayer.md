---
title: GangZoneStopFlashForPlayer
description: Pare uma Gangzone de piscar para um jogador.
tags: ["player", "gangzone"]
---

## Descrição

Pare uma Gangzone de piscar para um jogador.

| Nome     | Descrição                                               |
| -------- | ------------------------------------------------------- |
| playerid | O ID do jogador para o qual parar de piscar a gangzone. |
| zone     | O ID da gangzone que quer parar de piscar.              |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new gGangZoneId;

public OnGameModeInit()
{
    gGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    GangZoneFlashForPlayer(playerid, gGangZoneId, COLOR_RED);
    return 1;
}

public OnPlayerEnterVehicle(playerid, vehicleid)
{
    GangZoneStopFlashForPlayer(playerid, gGangZoneId);
    return 1;
}
```

## Funções Relacionadas

- [GangZoneCreate](GangZoneCreate): Cria uma gangzone.
- [GangZoneDestroy](GangZoneDestroy): Destrói uma gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Mostra uma gangzone a um jogador.
- [GangZoneShowForAll](GangZoneShowForAll): Mostra uma gangzone para todos os jogadores.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Esconde uma gangzone a um jogador.
- [GangZoneHideForAll](GangZoneHideForAll): Esconde uma gangzone para todos os jogadores.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Faz uma gangzone piscar para um jogador.
- [GangZoneFlashForAll](GangZoneFlashForAll): Faz uma gangzone piscar para todos os jogadores.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Pare uma Gangzone de piscar para todos os jogadores.
