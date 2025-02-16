---
title: OnFilterScriptInit
sidebar_label: OnFilterScriptInit
description: Wird ausgeführt wenn ein Filterscript gestartet wird (initialize).
tags: []
---

## Beschreibung

Wird ausgeführt wenn ein Filterscript gestartet wird (initialize). Wird nur im entsprechenden Filterscript ausgeführt.

## Beispiele

```c
public OnFilterScriptInit()
{
    print("\n--------------------------------------");
    print("The filterscript is loaded.");
    print("--------------------------------------\n");
    return 1;
}
```

## Ähnliche Callbacks

- [OnFilterSciptExit](OnFilterScriptExit): Wird ausgeführt wenn ein Filterscript deaktiviert wird.
- [OnGameModeInit](OnGameModeInit): Wird ausgeführt wenn ein Gamemode gestartet wird.
- [OnGameModeExit](OnGameModeExit): Wird ausgeführt wenn ein Gamemode beendet wird.
