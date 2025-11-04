---
title: OnFilterScriptInit
sidebar_label: OnFilterScriptInit
description: Deze callback wordt aangeroepen wanneer een filterscript wordt geïnitialiseerd (geladen).
tags: []
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een filterscript wordt geïnitialiseerd (geladen). Het wordt alleen aangeroepen binnen het filterscript dat start.

## Voorbeelden

```c
public OnFilterScriptInit()
{
    print("\n--------------------------------------");
    print("The filterscript is loaded.");
    print("--------------------------------------\n");
    return 1;
}
```

## Gerelateerde Callbacks

De volgende callbacks kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [OnFilterSciptExit](OnFilterScriptExit): Deze callback wordt aangeroepen wanneer een filterscript wordt uitgezet.
- [OnGameModeInit](OnGameModeInit): Deze callback wordt aangeroepen wanneer een gamemode start.
- [OnGameModeExit](OnGameModeExit): Deze callback wordt aangeroepen wanneer een gamemode eindigt.
