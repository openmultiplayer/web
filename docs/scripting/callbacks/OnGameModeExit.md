---
title: "OnGameModeExit | open.mp"
description: "This callback is called when a gamemode ends, either through 'gmx', the server being shut down, or GameModeExit."
canonical: https://open.mp/docs/scripting/callbacks/OnGameModeExit
language: en
---

# OnGameModeExit

## Description

This callback is called when a gamemode ends, either through 'gmx', the server being shut down, or [GameModeExit](https://open.mp/docs/scripting/functions/GameModeExit).

## Returns

This callback does not handle returns.

It is always called first in gamemode.

## Examples

```c
public OnGameModeExit()
{
    print("Gamemode ended.");
    return 1;
}
```

## Notes

tip

This function can also be used in a filterscript to detect if the gamemode changes with [RCON commands](https://open.mp/docs/server/ControllingServer#rcon-commands) like changemode or gmx, as changing the gamemode does not reload a filterscript.

warning

-   When using OnGameModeExit in conjunction with the 'rcon gmx' console command keep in mind there is a potential for client bugs to occur. An example of this is excessive [RemoveBuildingForPlayer](https://open.mp/docs/scripting/functions/RemoveBuildingForPlayer) calls during [OnGameModeInit](https://open.mp/docs/scripting/callbacks/OnGameModeInit) which could result in a client crash.
-   This callback will NOT be called if the server crashes or the process is killed by other means, such as using the Linux kill command.

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnGameModeInit](https://open.mp/docs/scripting/callbacks/OnGameModeInit): This callback is called when a gamemode starts.
-   [OnFilterScriptInit](https://open.mp/docs/scripting/callbacks/OnFilterScriptInit): This callback is called when a filterscript is loaded.
-   [OnFilterScriptExit](https://open.mp/docs/scripting/callbacks/OnFilterScriptExit): This callback is called when a filterscript is unloaded.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [GameModeExit](https://open.mp/docs/scripting/functions/GameModeExit): Exit the current gamemode.
