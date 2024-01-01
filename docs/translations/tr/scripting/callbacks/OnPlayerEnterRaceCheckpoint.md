---
title: OnPlayerEnterRaceCheckpoint
description: Bu callback, bir oyuncu yarış checkpointine girdiğinde çağırılır.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Açıklama

Bu callback, bir oyuncu yarış checkpointine girdiğinde çağırılır.

| İsim     | Açıklama                                              |
| -------- | ----------------------------------------------------- |
| playerid | Yarış checkpointine giren oyuncunun ID'si.            |

## Çalışınca Vereceği Sonuçlar

Her zaman ilk olarak filterscriptlerde çağırılır.

## Örnekler

```c
public OnPlayerEnterRaceCheckpoint(playerid)
{
    printf("%d ID'li oyuncu bir yarış checkpointine girdi!", playerid);
    return 1;
}
```

## Notlar

<TipNPCCallbacks />

## Geri Döndürülen Değerler

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Create a checkpoint for a player.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Disable the player's current checkpoint.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Check if a player is in a checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.
