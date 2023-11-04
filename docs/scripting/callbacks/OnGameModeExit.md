---
title: OnGameModeExit
description: This callback is called when a gamemode ends, either through 'gmx', the server being shut down, or GameModeExit.
tags: []
---

## Description

This callback is called when a gamemode ends, either through 'gmx', the server being shut down, or [GameModeExit](../functions/GameModeExit).

## Examples

```c
public OnGameModeExit()
{
    print("Gamemode ended.");
    return 1;
}
```

## Notes

:::tip

This function can also be used in a filterscript to detect if the gamemode changes with [RCON commands](../../server/ControllingServer#rcon-commands) like changemode or gmx, as changing the gamemode does not reload a filterscript. 

:::

:::warning

When using OnGameModeExit in conjunction with the 'rcon gmx' console command keep in mind there is a potential for client bugs to occur.

An example of this is excessive [RemoveBuildingForPlayer](../functions/RemoveBuildingForPlayer) calls during [OnGameModeInit](OnGameModeInit) which could result in a client crash. This callback will NOT be called if the server crashes or the process is killed by other means, such as using the Linux kill command or pressing the close-button on the Windows console.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnGameModeInit](OnGameModeInit): This callback is called when a gamemode starts.
- [OnFilterScriptInit](OnFilterScriptInit): This callback is called when a filterscript is loaded.
- [OnFilterSciptExit](OnFilterScriptExit): This callback is called when a filterscript is unloaded.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [GameModeExit](../functions/GameModeExit): Exit the current gamemode.
