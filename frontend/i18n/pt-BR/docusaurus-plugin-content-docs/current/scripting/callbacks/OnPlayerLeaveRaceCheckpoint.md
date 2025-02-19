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

<TipNPCCallbacksPT />

## Related Functions

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Create a checkpoint for a player.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Disable the player's current checkpoint.
- [IsPlayerInCheckpoint](../functions/IsPlayerInRaceCheckpoint): Check if a player is in a checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.
