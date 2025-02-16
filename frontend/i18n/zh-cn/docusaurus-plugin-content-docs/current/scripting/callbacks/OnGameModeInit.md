---
title: OnGameModeInit
sidebar_label: OnGameModeInit
description: This callback is triggered when the gamemode starts.
tags: []
---

## Description

This callback is triggered when the gamemode starts.

## Examples

```c
public OnGameModeInit()
{
    print("Gamemode started!");
    return 1;
}
```

## Notes

:::tip

This function can also be used in a filterscript to detect if the gamemode changes with RCON commands like changemode or gmx, as changing the gamemode does not reload a filterscript.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnGameModeExit](OnGameModeExit): This callback is called when a gamemode ends.
- [OnFilterScriptInit](OnFilterScriptInit): This callback is called when a filterscript is loaded.
- [OnFilterSciptExit](OnFilterScriptExit): This callback is called when a filterscript is unloaded.
