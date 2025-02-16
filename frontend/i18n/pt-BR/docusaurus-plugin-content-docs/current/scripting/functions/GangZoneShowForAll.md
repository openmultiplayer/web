---
title: GangZoneShowForAll
description: Mostra uma gangzone com a cor desejada para todos os jogadores.
tags: ["gangzone"]
---

## Descrição

Mostra uma gangzone com a cor desejada para todos os jogadores.

| Nome  | Descrição                                                                                                        |
| ----- | ---------------------------------------------------------------------------------------------------------------- |
| zone  | O ID da gangzone a ser mostrada (retornada por GangZoneCreate).                                                  |
| color | A cor a ser mostrada na gangzone, pode ser integer ou hex no formato de cor RGBA. Transparência Alpha suportada. |

## Retorno

1: A função foi executada com sucesso. A gangzone foi mostrada para todos os jogadores.

0: A função falhou ao ser executada. A gangzone não existe.

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
    if (IsPlayerAdmin(playerid))
    {
        GangZoneShowForAll(gGangZoneId, COLOR_RED);
    }
    return 1;
}
```

## Funções Relacionadas

- [GangZoneCreate](GangZoneCreate): Cria uma gangzone.
- [GangZoneDestroy](GangZoneDestroy): Destrói uma gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Mostra uma gangzone a um jogador.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Esconde uma gangzone a um jogador.
- [GangZoneHideForAll](GangZoneHideForAll): Esconde uma gangzone para todos os jogadores.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Faz uma gangzone piscar para um jogador.
- [GangZoneFlashForAll](GangZoneFlashForAll): Faz uma gangzone piscar para todos os jogadores.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Pare uma Gangzone de piscar para um jogador.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Pare uma Gangzone de piscar para todos os jogadores.
