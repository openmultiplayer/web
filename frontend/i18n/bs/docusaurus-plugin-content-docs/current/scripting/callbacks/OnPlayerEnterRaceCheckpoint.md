---
title: OnPlayerEnterRaceCheckpoint
sidebar_label: OnPlayerEnterRaceCheckpoint
description: Ovaj callback je pozvan kada igrač uđe u trkački checkpoint.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Deskripcija

Ovaj callback je pozvan kada igrač uđe u trkački checkpoint.

| Ime      | Deskripcija                                  |
| -------- | -------------------------------------------- |
| playerid | ID igrača koji je ušao u trkački checkpoint. |

## Returns

Uvijek je pozvana prva u filterskripti.

## Primjeri

```c
public OnPlayerEnterRaceCheckpoint(playerid)
{
    printf("Igrac %d je usao u trkacki checkpoint!", playerid);
    return 1;
}
```

:::tip

Ovaj callback pozvat će i NPC.

:::

## Srodne Funkcije

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Kreiraj checkpoint za igrača.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Onesposobi igračev trenutni checkpoint.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Provjeri da li je igrač u checkpointu.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Kreiraj trkački checkpoint.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Onesposobi igračev trenutni trkački checkpoint.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Provjeri da li je igrač u trkačkom checkpointu.
