---
title: OnPlayerRequestClass
sidebar_label: OnPlayerRequestClass
description: Deze callback wordt aangeroepen wanneer een speler van klasse wisselt in de klasse-selectie (en wanneer klasse-selectie voor het eerst verschijnt).
tags: ["player", "class"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler van klasse wisselt in de klasse-selectie (en wanneer klasse-selectie voor het eerst verschijnt).

| Naam     | Beschrijving                                                                                           |
| -------- | ----------------------------------------------------------------------------------------------------- |
| playerid | Het ID van de speler die van klasse wisselde.                                                          |
| classid  | Het ID van de huidige klasse die wordt bekeken (teruggegeven door [AddPlayerClass](../functions/AddPlayerClass)). |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnPlayerRequestClass(playerid,classid)
{
    if (classid == 3 && !IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, COLOR_RED, "This skin is only for admins!");
        return 0;
    }
    return 1;
}
```

## Notities

:::tip

Deze callback wordt ook aangeroepen wanneer een speler F4 indrukt.

:::

## Gerelateerde Callbacks

- [OnPlayerRequestSpawn](OnPlayerRequestSpawn): Deze callback wordt aangeroepen wanneer een speler probeert te spawnen via klasse-selectie.

## Gerelateerde Functies

- [AddPlayerClass](../functions/AddPlayerClass): Voeg een spelerklasse toe.
