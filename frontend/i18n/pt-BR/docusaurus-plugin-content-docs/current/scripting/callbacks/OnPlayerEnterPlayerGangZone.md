---
title: OnPlayerEnterPlayerGangZone
description: Este callback é chamado quando um jogador entra em uma player gangzone.
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Descrição

Este callback é chamado quando um jogador entra em uma player gangzone.

| Nome     | Descrição                                            |
| -------- | ---------------------------------------------------- |
| playerid | O ID do jogador que entrou na player gangzone.       |
| zoneid   | O ID da player gangzone em que o jogador entrou.     |

## Retornos

Ele é sempre chamado primeiro no modo de jogo.

## Exemplos

```c
public OnPlayerEnterPlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "Você está entrando na player gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Callbacks Relacionados

Os seguintes callbacks podem ser úteis, pois estão relacionados a este callback de alguma forma.

- [OnPlayerLeavePlayerGangZone](OnPlayerLeavePlayerGangZone): Este callback é chamado quando um jogador sai de uma player gangzone.

## Funções Relacionadas

As seguintes funções podem ser úteis, pois estão relacionadas a este callback de alguma forma:

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): Cria uma player gangzone.
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): Destroi uma player gangzone.
- [UsePlayerGangZoneCheck](../functions/UsePlayerGangZoneCheck): Ativa o callback quando um jogador entra nesta zona.