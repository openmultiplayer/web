---
title: GangZoneFlashForAll
description: Faz a gangzone piscar para todos os jogadores.
tags: ["gangzone"]
---

## Descrição

Faz a gangzone piscar para todos os jogadores.

| Nome       | Descrição                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------- |
| zone       | O ID da gangzone a piscar.                                                                                    |
| flashcolor | A cor que irá piscar na gangzone, pode ser integer ou hex no formato de cor RGBA. Transparência Alpha suportada. |

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

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    GangZoneFlashForAll(gGangZoneId, COLOR_RED);
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
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Pare uma Gangzone de piscar para um jogador.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Pare uma Gangzone de piscar para todos os jogadores.
