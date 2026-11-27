---
title: "SetPlayerCheckpoint | open.mp"
description: "Sets a checkpoint (red cylinder) for a player."
canonical: https://open.mp/docs/scripting/functions/SetPlayerCheckpoint
language: en
---

# SetPlayerCheckpoint

## Description

Sets a checkpoint (red cylinder) for a player. Also shows a red blip on the radar. When players enter a checkpoint, [OnPlayerEnterCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerEnterCheckpoint) is called and actions can be performed.

| Name | Description |
| --- | --- |
| playerid | The ID of the player for whom to set a checkpoint. |
| Float:centreX | The X coordinate to set the checkpoint at. |
| Float:centreY | The Y coordinate to set the checkpoint at. |
| Float:centreZ | The Z coordinate to set the checkpoint at. |
| Float:radius | The size of the checkpoint. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. This means the player specified does not exist.

## Examples

```c
// In this example the player's checkpoint will be set when they spawn.
// On entering the checkpoint they will receive $1000 and the checkpoint will be disabled.

new bool:gOnCheck[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    gOnCheck[playerid] = true;
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    if (gOnCheck[playerid]) // if it's true
    {
        GivePlayerMoney(playerid, 1000);
        DisablePlayerCheckpoint(playerid);
        gOnCheck[playerid] = false;
    }
    return 1;
}
```

## Notes

warning

-   Checkpoints are asynchronous, meaning only one can be shown at a time. To 'stream' checkpoints (only show them when players are close enough), use a checkpoint streamer.
-   Checkpoints created on server-created objects ([CreateObject](https://open.mp/docs/scripting/functions/CreateObject)/[CreatePlayerObject](https://open.mp/docs/scripting/functions/CreatePlayerObject)) will appear down on the 'real' ground, but will still function correctly. A [pickup](https://open.mp/docs/scripting/functions/CreatePickup) can be used instead.

## Related Functions

-   [DisablePlayerCheckpoint](https://open.mp/docs/scripting/functions/DisablePlayerCheckpoint): Disable the player's current checkpoint.
-   [GetPlayerCheckpoint](https://open.mp/docs/scripting/functions/GetPlayerCheckpoint): Get the location of the current checkpoint.
-   [IsPlayerInCheckpoint](https://open.mp/docs/scripting/functions/IsPlayerInCheckpoint): Check if a player is in a checkpoint.
-   [IsPlayerCheckpointActive](https://open.mp/docs/scripting/functions/IsPlayerCheckpointActive): Check if the player currently has a checkpoint visible.
-   [SetPlayerRaceCheckpoint](https://open.mp/docs/scripting/functions/SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
-   [DisablePlayerRaceCheckpoint](https://open.mp/docs/scripting/functions/DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.
-   [IsPlayerInRaceCheckpoint](https://open.mp/docs/scripting/functions/IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.

## Related Callbacks

-   [OnPlayerEnterCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerEnterCheckpoint): Called when a player enters a checkpoint.
-   [OnPlayerLeaveCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerLeaveCheckpoint): Called when a player leaves a checkpoint.
-   [OnPlayerEnterRaceCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint): Called when a player enters a race checkpoint.
-   [OnPlayerLeaveRaceCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerLeaveRaceCheckpoint): Called when a player leaves a race checkpoint.
