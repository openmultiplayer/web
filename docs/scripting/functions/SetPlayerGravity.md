---
title: "SetPlayerGravity | open.mp"
description: "Set a player's gravity."
canonical: https://open.mp/docs/scripting/functions/SetPlayerGravity
language: en
---

# SetPlayerGravity

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Set a player's gravity.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to set the gravity. |
| Float:gravity | The value that the gravity should be set to (between -50 and 50). |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The player specified does not exist.

## Examples

```c
public OnPlayerConnect(playerid)
{
    // Set moon-like gravity
    SetPlayerGravity(playerid, 0.001);

    return 1;
}
```

## Notes

note

Default gravity is 0.008.

## Related Functions

-   [GetPlayerGravity](https://open.mp/docs/scripting/functions/GetPlayerGravity): Get a player's gravity.
-   [SetGravity](https://open.mp/docs/scripting/functions/SetGravity): Set the gravity for all players.
-   [GetGravity](https://open.mp/docs/scripting/functions/GetGravity): Get the currently global gravity.
