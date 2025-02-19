---
title: OnPlayerLeavePlayerGangZone
sidebar_label: OnPlayerLeavePlayerGangZone
description: Este callback é chamado quando um jogador sai de uma player gangzone.
tags: ["player", "gangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Este callback é chamado quando um jogador sai de uma player gangzone.

| Nome     | Descrição                                         |
| -------- | ------------------------------------------------- |
| playerid | O ID do jogador que saiu da player gangzone.      |
| zoneid   | O ID da player gangzone que o jogador saiu.       |

## Retornos

Ele é sempre chamado primeiro no modo de jogo.

## Exemplos

```c
public OnPlayerLeavePlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "Você está saindo da player gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Callbacks Relacionados

Os seguintes callbacks podem ser úteis, pois estão relacionados a este callback de alguma forma. 

- [OnPlayerEnterPlayerGangZone](OnPlayerEnterPlayerGangZone): Este callback é chamado quando um jogador entra em uma player gangzone. 

## Funções Relacionadas

As seguintes funções podem ser úteis, pois estão relacionadas a este callback de alguma forma:

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): Cria uma player gangzone.
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): Destroi uma player gangzone.
- [UsePlayerGangZoneCheck](../functions/UsePlayerGangZoneCheck): Ativa o callback quando um jogador sai desta zona.