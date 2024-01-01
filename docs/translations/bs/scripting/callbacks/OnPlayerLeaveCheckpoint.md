---
title: OnPlayerLeaveCheckpoint
description: Ovaj callback je pozvan kada igrač napusti checkpoint koji mu je postavljen sa SetPlayerCheckpoint.
tags: ["player", "checkpoint"]
---

## Deskripcija

Ovaj callback je pozvan kada igrač napusti checkpoint koji mu je postavljen sa SetPlayerCheckpoint. Samo jedan checkpoint može biti postavljen odjednom.

| Ime      | Deskripcija                                 |
| -------- | ------------------------------------------- |
| playerid | ID igrača koji je napustio svoj checkpoint. |

## Returns

Uvijek je pozvana prva u filterskripti.

## Primjeri

```c
public OnPlayerLeaveCheckpoint(playerid)
{
    printf("Igrac %i je napustio checkpoint!", playerid);
    return 1;
}
```

## Zabilješke

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
