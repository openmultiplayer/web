---
title: OnFilterScriptInit
description: This callback is called when a filterscript is initialized (loaded).
tags: []
---

## Description

This callback is called when a filterscript is initialized (loaded). It is only called inside the filterscript which is starting.

## Examples

```pawn
public OnFilterScriptInit()
{
    print("\n--------------------------------------");
    print("The filterscript is loaded.");
    print("--------------------------------------\n");
    return 1;
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnFilterSciptExit](OnFilterScriptExit): This callback is called when a filterscript is unloaded.
- [OnGameModeInit](OnGameModeInit): This callback is called when a gamemode starts.
- [OnGameModeExit](OnGameModeExit): This callback is called when a gamemode ends.
