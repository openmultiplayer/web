---
title: OnFilterScriptExit
sidebar_label: OnFilterScriptExit
description: This callback is called when a filterscript is unloaded.
tags: []
---

## Description

This callback is called when a filterscript is unloaded. It is only called inside the filterscript which is unloaded.

## Examples

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print(" My filterscript unloaded");
    print("--------------------------------------\n");
    return 1;
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnFilterScriptInit](OnFilterScriptInit): This callback is called when a filterscript is loaded.
- [OnGameModeInit](OnGameModeInit): This callback is called when a gamemode starts.
- [OnGameModeExit](OnGameModeExit): This callback is called when a gamemode ends.
