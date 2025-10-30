---
title: OnPlayerObjectMoved
sidebar_label: OnPlayerObjectMoved
description: Deze callback wordt aangeroepen wanneer een player-object is verplaatst na MovePlayerObject (wanneer het stopt met bewegen).
tags: ["player", "object", "playerobject"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een player-object is verplaatst na [MovePlayerObject](../functions/MovePlayerObject) (wanneer het stopt met bewegen).

| Naam     | Beschrijving                               |
| -------- | ------------------------------------------- |
| playerid | De speler aan wie het object is toegewezen |
| objectid | Het ID van het player-object dat bewoog    |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    printf("Player object moved: objectid: %d playerid: %d", objectid, playerid);
    return 1;
}
```

## Notities

<TipNPCCallbacks />

## Gerelateerde Callbacks

- [OnObjectMoved](OnObjectMoved): Deze callback wordt aangeroepen wanneer een object stopt met bewegen.

## Gerelateerde Functies

- [MovePlayerObject](../functions/MovePlayerObject): Verplaats een player-object.
- [IsPlayerObjectMoving](../functions/IsPlayerObjectMoving): Check of het player-object beweegt.
- [StopPlayerObject](../functions/StopPlayerObject): Stop een player-object met bewegen.
- [CreatePlayerObject](../functions/CreatePlayerObject): Maak een object voor slechts één speler.
- [DestroyPlayerObject](../functions/DestroyPlayerObject): Vernietig een player-object.


