---
title: OnPlayerLeaveRaceCheckpoint
sidebar_label: OnPlayerLeaveRaceCheckpoint
description: Esta callback é chamada quando um jogador sai de um checkpoint de corrida.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Descrição

Esta callback é chamada quando um jogador sai de um checkpoint de corrida

| Nome     | Descrição                               |
| -------- | --------------------------------------- |
| playerid | O ID do jogador que saiu do checkpoint. |

## Retorno

É sempre chamado primeiro nos filterscripts.

## Examples

```c
public OnPlayerLeaveRaceCheckpoint(playerid)
{
    printf("Player %d left a race checkpoint!", playerid);
    return 1;
}
```

## Notes

<NoteNPCCallbacks />

## Callbacks Relacionadas

Os seguintes callbacks podem ser úteis, pois estão relacionados a este callback de alguma forma.

- [OnPlayerEnterCheckpoint](OnPlayerEnterCheckpoint): Chamado quando um jogador entra em um checkpoint.
- [OnPlayerLeaveCheckpoint](OnPlayerLeaveCheckpoint): Chamado quando um jogador sai de um checkpoint.
- [OnPlayerEnterRaceCheckpoint](OnPlayerEnterRaceCheckpoint): Chamado quando um jogador entra em um checkpoint de corrida.

## Funções Relacionadas

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Cria o checkpoint para um jogador.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Desativa o atual checkpoint do jogador.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Verifica se o jogador está em checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Cria um checkpoint de corrida.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Desativa o atual checkpoint de corrida do jogador.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Verifica se o jogador está em um checkpoint de corrida.
