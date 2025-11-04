---
title: OnPlayerExitedMenu
sidebar_label: OnPlayerExitedMenu
description: Deze callback wordt aangeroepen wanneer een speler een menu verlaat.
tags: ["player", "menu"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler een menu verlaat.

| Naam     | Beschrijving                             |
| -------- | ---------------------------------------- |
| playerid | Het ID van de speler die het menu verlaat |

## Returns

Wordt altijd als eerste aangeroepen in gamemode.

## Voorbeelden

```c
public OnPlayerExitedMenu(playerid)
{
    TogglePlayerControllable(playerid, true); // speler weer unfreezen bij verlaten menu
    return 1;
}
```

## Gerelateerde Callbacks

- [OnPlayerSelectedMenuRow](OnPlayerSelectedMenuRow): Deze callback wordt aangeroepen wanneer een speler een rij in een menu selecteert.

## Gerelateerde Functies

- [CreateMenu](../functions/CreateMenu): Maak een menu.
- [DestroyMenu](../functions/DestroyMenu): Vernietig een menu.
