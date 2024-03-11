---
title: GangZoneHideForPlayer
description: Esconde a gangzone para um jogador.
tags: ["player", "gangzone"]
---

## Descrição

Esconde a gangzone para um jogador.

| Nome     | Descrição                                        |
| -------- | ------------------------------------------------ |
| playerid | O ID do jogador para o qual esconder a gangzone. |
| zone     | O ID da gangzone a esconder.                     |

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
    GangZoneShowForPlayer(playerid, gGangZoneId, 0xFF0000FF);
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    GangZoneHideForPlayer(playerid, gGangZoneId);
    return 1;
}
```

## Funções Relacionadas

- [GangZoneCreate](GangZoneCreate): Cria uma gangzone.
- [GangZoneDestroy](GangZoneDestroy): Destrói uma gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Mostra uma gangzone a um jogador.
- [GangZoneShowForAll](GangZoneShowForAll): Mostra uma gangzone para todos os jogadores.
- [GangZoneHideForAll](GangZoneHideForAll): Esconde uma gangzone para todos os jogadores.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Faz uma gangzone piscar para um jogador.
- [GangZoneFlashForAll](GangZoneFlashForAll): Faz uma gangzone piscar para todos os jogadores.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Pare uma Gangzone de piscar para um jogador.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Pare uma Gangzone de piscar para todos os jogadores.
