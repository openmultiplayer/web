---
title: "OnPlayerEnterCheckpoint | open.mp"
description: "This callback is called when a player enters the checkpoint set for that player."
canonical: https://open.mp/docs/scripting/callbacks/OnPlayerEnterCheckpoint
language: en
---

# OnPlayerEnterCheckpoint

## Description

This callback is called when a player enters the checkpoint set for that player.

| Name | Description |
| --- | --- |
| playerid | The player who entered the checkpoint. |

## Returns

It is always called first in filterscripts.

## Examples

```c
//In this example, a checkpoint is created for the player when spawning,
//which creates a vehicle and disables the checkpoint.
public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    CreateVehicle(520, 1982.6150, -221.0145, -0.2432, 82.2873, -1, -1, 60000);
    DisablePlayerCheckpoint(playerid);
    return 1;
}
```

## Notes

note

This callback can also be called by NPC.

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnPlayerLeaveCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerLeaveCheckpoint): This callback is called when a player leaves a checkpoint.
-   [OnPlayerEnterRaceCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint): This callback is called when a player enters a race checkpoint.
-   [OnPlayerLeaveRaceCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerLeaveRaceCheckpoint): This callback is called when a player leaves a race checkpoint.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [SetPlayerCheckpoint](https://open.mp/docs/scripting/functions/SetPlayerCheckpoint): Create a checkpoint for a player.
-   [DisablePlayerCheckpoint](https://open.mp/docs/scripting/functions/DisablePlayerCheckpoint): Disable the player's current checkpoint.
-   [IsPlayerInCheckpoint](https://open.mp/docs/scripting/functions/IsPlayerInCheckpoint): Check if a player is in a checkpoint.
-   [SetPlayerRaceCheckpoint](https://open.mp/docs/scripting/functions/SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
-   [DisablePlayerRaceCheckpoint](https://open.mp/docs/scripting/functions/DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.
-   [IsPlayerInRaceCheckpoint](https://open.mp/docs/scripting/functions/IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.
