---
title: OnPlayerEnterRaceCheckpoint
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

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint.md): Kreiraj checkpoint za igrača.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint.md): Onesposobi igračev trenutni checkpoint.
- [IsPlayerInCheckpoint](../functions/IsPlayerInRaceCheckpoint.md): Provjeri da li je igrač u checkpointu.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint.md): Kreiraj trkački checkpoint.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint.md): Onesposobi igračev trenutni trkački checkpoint.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint.md): Provjeri da li je igrač u trkačkom checkpointu.
