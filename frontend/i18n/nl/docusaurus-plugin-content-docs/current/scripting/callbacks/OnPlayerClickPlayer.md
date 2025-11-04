---
title: OnPlayerClickPlayer
sidebar_label: OnPlayerClickPlayer
description: Deze callback wordt aangeroepen wanneer een speler dubbelklikt op een speler in de scoreboard.
tags: ["player"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler dubbelklikt op een speler in de scoreboard.

| Naam            | Beschrijving                                                     |
| --------------- | --------------------------------------------------------------- |
| playerid        | Het ID van de speler die klikte op een speler in de scoreboard. |
| clickedplayerid | Het ID van de speler waarop geklikt werd.                        |
| source          | De [bron](../resources/clicksources) van de klik.               |

## Returns

1 - Voorkomt dat andere filterscripts deze callback ontvangen.

0 - Geeft aan dat deze callback wordt doorgegeven aan het volgende filterscript.

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnPlayerClickPlayer(playerid, clickedplayerid, CLICK_SOURCE:source)
{
    new string[32];
    format(string, sizeof(string), "You clicked on player %d", clickedplayerid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notities

:::tip

Er is momenteel maar één 'source' (0 - `CLICK_SOURCE_SCOREBOARD`). Het bestaan van dit argument suggereert dat er in de toekomst meer bronnen kunnen komen.

:::

## Gerelateerde Callbacks

- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): Deze callback wordt aangeroepen wanneer een speler op een textdraw klikt.

## Gerelateerde Resources

- [Click Sources](../resources/clicksources)
