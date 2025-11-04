---
title: OnPlayerLeaveRaceCheckpoint
sidebar_label: OnPlayerLeaveRaceCheckpoint
description: Deze callback wordt aangeroepen wanneer een speler de race-checkpoint verlaat.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler de race-checkpoint verlaat.

| Naam     | Beschrijving                                    |
| -------- | ---------------------------------------------- |
| playerid | Het ID van de speler die de race-checkpoint verliet. |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnPlayerLeaveRaceCheckpoint(playerid)
{
    printf("Player %d left a race checkpoint!", playerid);
    return 1;
}
```

## Notities

<TipNPCCallbacks />

## Gerelateerde Callbacks

- [OnPlayerEnterCheckpoint](OnPlayerEnterCheckpoint): Deze callback wordt aangeroepen wanneer een speler een checkpoint binnengaat.
- [OnPlayerLeaveCheckpoint](OnPlayerLeaveCheckpoint): Deze callback wordt aangeroepen wanneer een speler een checkpoint verlaat.
- [OnPlayerEnterRaceCheckpoint](OnPlayerEnterRaceCheckpoint): Deze callback wordt aangeroepen wanneer een speler een race-checkpoint binnengaat.

## Gerelateerde Functies

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Maak een checkpoint voor een speler.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Schakel de huidige checkpoint uit.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Check of een speler in een checkpoint staat.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Maak een race-checkpoint voor een speler.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Schakel de huidige race-checkpoint uit.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Check of een speler in een race-checkpoint staat.
