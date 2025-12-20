---
title: OnPlayerEnterCheckpoint
sidebar_label: OnPlayerEnterCheckpoint
description: Deze callback wordt aangeroepen wanneer een speler de checkpoint binnengaat die voor hem/haar is gezet.
tags: ["player", "checkpoint"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler de checkpoint binnengaat die voor hem/haar is gezet.

| Naam     | Beschrijving                          |
| -------- | ------------------------------------ |
| playerid | De speler die de checkpoint binnenging. |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
// Voorbeeld: bij spawn een checkpoint maken; er in gaan maakt een voertuig en schakelt de checkpoint uit.
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

## Notities

<TipNPCCallbacks />

## Gerelateerde Callbacks

- [OnPlayerLeaveCheckpoint](OnPlayerLeaveCheckpoint): Deze callback wordt aangeroepen wanneer een speler een checkpoint verlaat.
- [OnPlayerEnterRaceCheckpoint](OnPlayerEnterRaceCheckpoint): Deze callback wordt aangeroepen wanneer een speler een race-checkpoint binnengaat.
- [OnPlayerLeaveRaceCheckpoint](OnPlayerLeaveRaceCheckpoint): Deze callback wordt aangeroepen wanneer een speler een race-checkpoint verlaat.

## Gerelateerde Functies

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Maak een checkpoint voor een speler.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Schakel de huidige checkpoint uit.
- [IsPlayerInCheckpoint](../functions/IsPlayerInRaceCheckpoint): Check of een speler in een checkpoint staat.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Maak een race-checkpoint.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Schakel de huidige race-checkpoint uit.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Check of een speler in een race-checkpoint staat.
