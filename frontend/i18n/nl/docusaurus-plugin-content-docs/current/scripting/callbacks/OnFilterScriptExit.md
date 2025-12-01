---
title: OnFilterScriptExit
sidebar_label: OnFilterScriptExit
description: Deze callback wordt aangeroepen wanneer een filterscript wordt uitgeladen.
tags: []
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een filterscript wordt uitgeladen. Het wordt alleen aangeroepen binnen het filterscript dat wordt uitgeladen.

## Voorbeelden

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print(" My filterscript unloaded");
    print("--------------------------------------\n");
    return 1;
}
```

## Gerelateerde Callbacks

- [OnFilterScriptInit](OnFilterScriptInit): Deze callback wordt aangeroepen wanneer een filterscript wordt geladen.
- [OnGameModeInit](OnGameModeInit): Deze callback wordt aangeroepen wanneer een gamemode start.
- [OnGameModeExit](OnGameModeExit): Deze callback wordt aangeroepen wanneer een gamemode eindigt.
