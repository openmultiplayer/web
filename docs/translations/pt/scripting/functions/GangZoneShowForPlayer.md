---
title: GangZoneShowForPlayer
description: Mostra a gangzone para um jogador.
tags: ["player", "gangzone"]
---

## Descrição

Mostra a gangzone para um jogador. Deve ser criado com GangZoneCreate primeiro.

| Nome     | Descrição                                                                                                        |
| -------- | ---------------------------------------------------------------------------------------------------------------- |
| playerid | O ID do jogador para o qual mostrar a gangzone.                                                                  |
| zone     | O ID da gangzone a esconder para o jogador. Retornado por GangZoneCreate                                         |
| color    | A cor a ser mostrada na gangzone, pode ser integer ou hex no formato de cor RGBA. Transparência Alpha suportada. |

## Retorno

1 se a gangzone for mostrada, caso contrário 0 (não-existente).

## Exemplos

```c
new gGangZoneId;

public OnGameModeInit()
{
    gGangZoneId = GangZoneCreate(1082.962, -2787.229, 2942.549, -1859.51);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    GangZoneShowForPlayer(playerid, gGangZoneId, 0xFFFF0096);
    return 1;
}
```

## Funções Relacionadas

- [GangZoneCreate](GangZoneCreate): Cria uma gangzone.
- [GangZoneDestroy](GangZoneDestroy): Destrói uma gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Mostra uma gangzzone a um jogador.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Esconde uma gangzone a um jogador.
- [GangZoneHideForAll](GangZoneHideForAll): Esconde uma gangzone para todos os jogadores.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Faz uma gangzone piscar para um jogador.
- [GangZoneFlashForAll](GangZoneFlashForAll): Faz uma gangzone piscar para todos os jogadores.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Pare uma Gangzone de piscar para um jogador.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Pare uma Gangzone de piscar para todos os jogadores.
