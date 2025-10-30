---
title: OnObjectMoved
sidebar_label: OnObjectMoved
description: Deze callback wordt aangeroepen wanneer een object is verplaatst na MoveObject (wanneer het stopt met bewegen).
tags: ["object"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een object is verplaatst na MoveObject (wanneer het stopt met bewegen).

| Naam     | Beschrijving                        |
| -------- | ----------------------------------- |
| objectid | Het ID van het object dat bewoog    |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnObjectMoved(objectid)
{
    printf("Object %d finished moving.", objectid);
    return 1;
}
```

## Notities

:::tip

[SetObjectPos](../functions/SetObjectPos) werkt niet wanneer het in deze callback gebruikt wordt. Recreate het object om dit te verhelpen.

:::

## Gerelateerde Callbacks

- [OnPlayerObjectMoved](OnPlayerObjectMoved): Deze callback wordt aangeroepen wanneer een player-object stopt met bewegen.

## Gerelateerde Functies

- [MoveObject](../functions/MoveObject): Verplaats een object.
- [MovePlayerObject](../functions/MovePlayerObject): Verplaats een player-object.
- [IsObjectMoving](../functions/IsObjectMoving): Controleer of het object beweegt.
- [StopObject](../functions/StopObject): Stop een object met bewegen.
