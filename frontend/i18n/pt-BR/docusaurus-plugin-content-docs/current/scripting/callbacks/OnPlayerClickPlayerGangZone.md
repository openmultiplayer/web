---
title: OnPlayerClickPlayerGangZone
sidebar_label: OnPlayerClickPlayerGangZone
description: Este callback é chamado quando um jogador clica em uma gangzone de jogador no mapa do menu de pausa (clicando com o botão direito).
tags: ["player", "gangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Este callback é chamado quando um jogador clica em uma gangzone de jogador no mapa do menu de pausa (clicando com o botão direito).

| Nome     | Descrição                                            |
| -------- | ---------------------------------------------------- |
| playerid | O ID do jogador que clicou em uma gangzone de jogador.|
| zoneid   | O ID da gangzone de jogador que o jogador clicou.     |

## Retornos

Este callback não lida com retornos.

Ele é sempre chamado primeiro no modo de jogo.

## Exemplos

```c
public OnPlayerClickPlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "Você clicou na gangzone de jogador %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Funções Relacionadas

As seguintes funções podem ser úteis, pois estão relacionadas a este callback de alguma forma:

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): Cria uma gangzone de jogador.
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): Destroi uma gangzone de jogador.