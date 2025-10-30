---
title: OnPlayerLeaveCheckpoint
sidebar_label: OnPlayerLeaveCheckpoint
description: Deze callback wordt aangeroepen wanneer een speler de checkpoint verlaat die met SetPlayerCheckpoint voor hem/haar is gezet.
tags: ["player", "checkpoint"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler de checkpoint verlaat die met [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint) is gezet. Er kan maar één checkpoint tegelijk actief zijn.

| Naam     | Beschrijving                                    |
| -------- | ---------------------------------------------- |
| playerid | Het ID van de speler die de checkpoint verliet. |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnPlayerLeaveCheckpoint(playerid)
{
    printf("Player %i left a checkpoint!", playerid);
    return 1;
}
```

## Notities

<TipNPCCallbacks />

## Gerelateerde Callbacks

- [OnPlayerEnterCheckpoint](OnPlayerEnterCheckpoint): Deze callback wordt aangeroepen wanneer een speler een checkpoint binnengaat.
- [OnPlayerEnterRaceCheckpoint](OnPlayerEnterRaceCheckpoint): Deze callback wordt aangeroepen wanneer een speler een race-checkpoint binnengaat.
- [OnPlayerLeaveRaceCheckpoint](OnPlayerLeaveRaceCheckpoint): Deze callback wordt aangeroepen wanneer een speler een race-checkpoint verlaat.

## Gerelateerde Functies

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Maak een checkpoint voor een speler.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Schakel de huidige checkpoint uit.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Check of een speler in een checkpoint staat.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Maak een race-checkpoint.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Schakel de huidige race-checkpoint uit.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Check of een speler in een race-checkpoint staat.
