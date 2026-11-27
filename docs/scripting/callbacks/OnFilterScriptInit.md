---
title: "OnFilterScriptInit | open.mp"
description: "This callback is called when a filterscript is initialized (loaded)."
canonical: https://open.mp/docs/scripting/callbacks/OnFilterScriptInit
language: en
---

# OnFilterScriptInit

## Description

This callback is called when a filterscript is **init**ialized (loaded). It is only called inside the filterscript which is starting.

## Examples

```c
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

-   [OnFilterScriptExit](https://open.mp/docs/scripting/callbacks/OnFilterScriptExit): This callback is called when a filterscript is unloaded.
-   [OnGameModeInit](https://open.mp/docs/scripting/callbacks/OnGameModeInit): This callback is called when a gamemode starts.
-   [OnGameModeExit](https://open.mp/docs/scripting/callbacks/OnGameModeExit): This callback is called when a gamemode ends.
