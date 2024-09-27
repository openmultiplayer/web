---
title: OnPlayerEnterGangZone
description: Este callback é chamado quando um jogador entra em uma gangzone.
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Descrição

Este callback é chamado quando um jogador entra em uma gangzone.

| Nome     | Descrição                                     |
| -------- | --------------------------------------------- |
| playerid | O ID do jogador que entrou na gangzone.       |
| zoneid   | O ID da gangzone em que o jogador entrou.     |

## Retornos

Ele é sempre chamado primeiro no modo de jogo.

## Exemplos

```c
public OnPlayerEnterGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "Você está entrando na gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Callbacks Relacionados

Os seguintes callbacks podem ser úteis, pois estão relacionados a este callback de alguma forma.

- [OnPlayerLeaveGangZone](OnPlayerLeaveGangZone): Este callback é chamado quando um jogador sai de uma gangzone.

## Funções Relacionadas

As seguintes funções podem ser úteis, pois estão relacionadas a este callback de alguma forma:

- [GangZoneCreate](../functions/GangZoneCreate): Cria uma gangzone (área colorida no radar).
- [GangZoneDestroy](../functions/GangZoneDestroy): Destroi uma gangzone.
- [UseGangZoneCheck](../functions/UseGangZoneCheck): Ativa o callback quando um jogador entra nesta zona.