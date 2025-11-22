---
title: OnPlayerLeaveRaceCheckpoint
sidebar_label: OnPlayerLeaveRaceCheckpoint
description: Ovaj callback se poziva kada igrač napusti race checkpoint.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Deskripcija

Ovaj callback se poziva kada igrač napusti race checkpoint.

| Ime      | Deskripcija                                 |
| -------- | ------------------------------------------- |
| playerid | ID igrača koji je napustio race checkpoint. |

## Returns

Uvijek je pozvana prva u filterskripti.

## Primjeri

```c
public OnPlayerLeaveRaceCheckpoint(playerid)
{
    printf("Igrač %d je napustio race checkpoint!", playerid);
    return 1;
}
```

:::tip

Ovaj callback pozvat će i NPC.

:::

## Srodne Funkcije

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Kreira checkpoint za igrača.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Onemogući igračev trenutni checkpoint.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Provjeri da li je igrač u checkpointu.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Kreira race checkpoint za igrača.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Onemogući igračev trenutni race checkpoint.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Provjeri da li je igrač u race checkpointu.
