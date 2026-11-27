---
title: "OnFilterScriptExit | open.mp"
description: "This callback is called when a filterscript is unloaded."
canonical: https://open.mp/docs/scripting/callbacks/OnFilterScriptExit
language: en
---

# OnFilterScriptExit

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

-   [OnFilterScriptInit](https://open.mp/docs/scripting/callbacks/OnFilterScriptInit): This callback is called when a filterscript is loaded.
-   [OnGameModeInit](https://open.mp/docs/scripting/callbacks/OnGameModeInit): This callback is called when a gamemode starts.
-   [OnGameModeExit](https://open.mp/docs/scripting/callbacks/OnGameModeExit): This callback is called when a gamemode ends.
