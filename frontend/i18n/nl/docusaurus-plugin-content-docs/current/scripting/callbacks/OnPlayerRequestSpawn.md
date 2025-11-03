---
title: OnPlayerRequestSpawn
sidebar_label: OnPlayerRequestSpawn
description: Deze callback wordt aangeroepen wanneer een speler probeert te spawnen via klasse-selectie door SHIFT in te drukken of op de 'Spawn'-knop te klikken.
tags: ["player", "class"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler probeert te spawnen via klasse-selectie door SHIFT in te drukken of op de 'Spawn'-knop te klikken.

| Naam     | Beschrijving                                   |
| -------- | --------------------------------------------- |
| playerid | Het ID van de speler die probeerde te spawnen. |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts, dus return 0 blokkeert ook andere scripts.

## Voorbeelden

```c
public OnPlayerRequestSpawn(playerid)
{
    if (!IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, -1, "You may not spawn.");
        return 0;
    }
    return 1;
}
```

## Notities

<TipNPCCallbacks />

:::tip

Om te voorkomen dat spelers spawnen met bepaalde klassen, moet de laatst bekeken klasse worden opgeslagen in een variabele in OnPlayerRequestClass.

:::

## Gerelateerde Callbacks

- [OnPlayerSpawn](OnPlayerSpawn): Deze callback wordt aangeroepen wanneer een speler spawnt.
- [OnPlayerRequestClass](OnPlayerRequestClass): Deze callback wordt aangeroepen wanneer een speler van klasse wisselt in de klasse-selectie.
