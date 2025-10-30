---
title: OnGameModeInit
sidebar_label: OnGameModeInit
description: Deze callback wordt getriggerd wanneer de gamemode start.
tags: []
---

## Beschrijving

Deze callback wordt getriggerd wanneer de gamemode start.

## Voorbeelden

```c
public OnGameModeInit()
{
    print("Gamemode started!");
    return 1;
}
```

## Notities

:::tip

Deze functie kan ook gebruikt worden in een filterscript om te detecteren of de gamemode verandert met RCON commands zoals changemode of gmx, omdat het veranderen van de gamemode een filterscript niet herlaadt.

:::

## Gerelateerde Callbacks

De volgende callbacks kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [OnGameModeExit](OnGameModeExit): Deze callback wordt aangeroepen wanneer een gamemode eindigt.
- [OnFilterScriptInit](OnFilterScriptInit): Deze callback wordt aangeroepen wanneer een filterscript wordt geladen.
- [OnFilterSciptExit](OnFilterScriptExit): Deze callback wordt aangeroepen wanneer een filterscript wordt uitgezet.
