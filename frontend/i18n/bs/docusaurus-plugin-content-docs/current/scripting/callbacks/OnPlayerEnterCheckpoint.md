---
title: OnPlayerEnterCheckpoint
sidebar_label: OnPlayerEnterCheckpoint
description: Ovaj callback je pozvan kada igrač uđe u checkpoint koji je postavljen za tog igrača.
tags: ["player", "checkpoint"]
---

## Deskripcija

Ovaj callback je pozvan kada igrač uđe u checkpoint koji je postavljen za tog igrača.

| Name     | Deskripcija                    |
| -------- | ------------------------------ |
| playerid | Igrač koji je ušao checkpoint. |

## Returns

Uvijek je pozvana prva u filterskripti.

## Primjeri

```c
//U ovom primjeru, checkpoint je kreiran za tog igrača kada se spawnuje,
//kada uđe u checkpoint kreira vozilo i onesposobljava (disable-uje) checkpoint.
public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    CreateVehicle(520, 1982.6150, -221.0145, -0.2432, 82.2873, -1, -1, 60000);
    DisablePlayerCheckpoint(playerid);
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
