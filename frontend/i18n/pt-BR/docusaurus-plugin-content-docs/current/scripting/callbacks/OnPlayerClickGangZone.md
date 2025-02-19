---
title: OnPlayerClickGangZone
sidebar_label: OnPlayerClickGangZone
description: Este callback é chamado quando um jogador clica em uma gangzone no mapa do menu de pausa (clicando com o botão direito).
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Descrição

Este callback é chamado quando um jogador clica em uma gangzone no mapa do menu de pausa (clicando com o botão direito).

| Nome     | Descrição                                            |
| -------- | ---------------------------------------------------- |
| playerid | O ID do jogador que clicou em uma gangzone.          |
| zoneid   | O ID da gangzone que o jogador clicou.               |

## Retornos

Este callback não lida com retornos.

Ele é sempre chamado primeiro no modo de jogo.

## Exemplos

```c
public OnPlayerClickGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "Você clicou na gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Funções Relacionadas

As seguintes funções podem ser úteis, pois estão relacionadas a este callback de alguma forma:

- [GangZoneCreate](../functions/GangZoneCreate): Cria uma gangzone (área colorida no radar).
- [GangZoneDestroy](../functions/GangZoneDestroy): Destroi uma gangzone.