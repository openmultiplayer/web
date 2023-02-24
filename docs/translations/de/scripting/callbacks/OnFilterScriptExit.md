---
title: OnFilterScriptExit
description: Wird aufgerufen wenn ein Filterscript deaktiviert wird.
tags: []
---

## Beschreibung

Wird aufgerufen wenn ein Filterscript deaktiviert wird. Wird nur im entsprechenden Filterscript ausgeführt.

## Beispiele

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print(" Filterscript herausgeladen");
    print("--------------------------------------\n");
    return 1;
}
```

## Ähnliche Callbacks

- [OnFilterScriptInit](OnFilterScriptInit): Wird aufgerufen wenn ein Filterscript geladen wird.
- [OnGameModeInit](OnGameModeInit): Wird aufgerufen wenn ein Gamemode gestartet wird.
- [OnGameModeExit](OnGameModeExit): Wird aufgerufen wenn ein Gamemode gestoppt wird.
