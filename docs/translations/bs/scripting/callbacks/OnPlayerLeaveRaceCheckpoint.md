---
title: OnPlayerLeaveRaceCheckpoint
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

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint.md): Kreira checkpoint za igrača.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint.md): Onemogući igračev trenutni checkpoint.
- [IsPlayerInCheckpoint](../functions/IsPlayerInRaceCheckpoint.md): Provjeri da li je igrač u checkpointu.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint.md): Kreira race checkpoint za igrača.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint.md): Onemogući igračev trenutni race checkpoint.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint.md): Provjeri da li je igrač u race checkpointu.
