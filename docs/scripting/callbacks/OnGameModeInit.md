---
title: "OnGameModeInit | open.mp"
description: "This callback is triggered when the gamemode starts."
canonical: https://open.mp/docs/scripting/callbacks/OnGameModeInit
language: en
---

# OnGameModeInit

## Description

This callback is triggered when the gamemode starts.

## Returns

This callback does not handle returns.

It is always called first in gamemode.

## Examples

```c
public OnGameModeInit()
{
    print("Gamemode started!");
    return 1;
}
```

## Notes

tip

This function can also be used in a filterscript to detect if the gamemode changes with [RCON commands](https://open.mp/docs/server/ControllingServer#rcon-commands) like changemode or gmx, as changing the gamemode does not reload a filterscript.

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnGameModeExit](https://open.mp/docs/scripting/callbacks/OnGameModeExit): This callback is called when a gamemode ends.
-   [OnFilterScriptInit](https://open.mp/docs/scripting/callbacks/OnFilterScriptInit): This callback is called when a filterscript is loaded.
-   [OnFilterScriptExit](https://open.mp/docs/scripting/callbacks/OnFilterScriptExit): This callback is called when a filterscript is unloaded.
