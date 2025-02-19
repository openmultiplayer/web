---
title: OnPlayerLeaveGangZone
sidebar_label: OnPlayerLeaveGangZone
description: Este callback é chamado quando um jogador sai de uma gangzone.
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Descrição

Este callback é chamado quando um jogador sai de uma gangzone.

| Nome     | Descrição                                    |
| -------- | -------------------------------------------- |
| playerid | O ID do jogador que saiu da gangzone.        |
| zoneid   | O ID da gangzone que o jogador saiu.         |

## Retornos

Ele é sempre chamado primeiro no modo de jogo.

## Exemplos

```c
public OnPlayerLeaveGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "Você está saindo da gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Callbacks Relacionados

Os seguintes callbacks podem ser úteis, pois estão relacionados a este callback de alguma forma.

- [OnPlayerEnterGangZone](OnPlayerEnterGangZone): Este callback é chamado quando um jogador entra em uma gangzone.

## Funções Relacionadas

As seguintes funções podem ser úteis, pois estão relacionadas a este callback de alguma forma:

- [GangZoneCreate](../functions/GangZoneCreate): Cria uma gangzone (área colorida no radar).
- [GangZoneDestroy](../functions/GangZoneDestroy): Destroi uma gangzone.