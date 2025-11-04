---
title: OnPlayerEnterRaceCheckpoint
sidebar_label: OnPlayerEnterRaceCheckpoint
description: Deze callback wordt aangeroepen wanneer een speler een race-checkpoint binnengaat.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler een race-checkpoint binnengaat.

| Naam     | Beschrijving                                      |
| -------- | ------------------------------------------------ |
| playerid | Het ID van de speler die de race-checkpoint binnenging. |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnPlayerEnterRaceCheckpoint(playerid)
{
    printf("Player %d entered a race checkpoint!", playerid);
    return 1;
}
```

## Notities

<TipNPCCallbacks />

## Gerelateerde Callbacks

- [OnPlayerEnterCheckpoint](OnPlayerEnterCheckpoint): Deze callback wordt aangeroepen wanneer een speler een checkpoint binnengaat.
- [OnPlayerLeaveCheckpoint](OnPlayerLeaveCheckpoint): Deze callback wordt aangeroepen wanneer een speler een checkpoint verlaat.
- [OnPlayerLeaveRaceCheckpoint](OnPlayerLeaveRaceCheckpoint): Deze callback wordt aangeroepen wanneer een speler een race-checkpoint verlaat.

## Gerelateerde Functies

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Maak een checkpoint voor een speler.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Schakel de huidige checkpoint uit.
- [IsPlayerInCheckpoint](../functions/IsPlayerInRaceCheckpoint): Check of een speler in een checkpoint staat.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Maak een race-checkpoint voor een speler.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Schakel de huidige race-checkpoint uit.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Check of een speler in een race-checkpoint staat.
