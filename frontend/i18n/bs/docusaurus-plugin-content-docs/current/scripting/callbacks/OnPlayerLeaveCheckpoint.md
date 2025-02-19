---
title: OnPlayerLeaveCheckpoint
sidebar_label: OnPlayerLeaveCheckpoint
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

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint.md): Kreira checkpoint za igrača.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint.md): Onemogući igračev trenutni checkpoint.
- [IsPlayerInCheckpoint](../functions/IsPlayerInRaceCheckpoint.md): Provjeri da li je igrač u checkpointu.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint.md): Kreira race checkpoint za igrača.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint.md): Onemogući igračev trenutni race checkpoint.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint.md): Provjeri da li je igrač u race checkpointu.
