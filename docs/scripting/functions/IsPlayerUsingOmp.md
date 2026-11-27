---
title: "IsPlayerUsingOmp | open.mp"
description: "Check if the player is using the open.mp launcher."
canonical: https://open.mp/docs/scripting/functions/IsPlayerUsingOmp
language: en
---

# IsPlayerUsingOmp

warning

This function was added in omp 1.4.0.2779 and will not work in earlier versions!

## Description

Check if the player is using the open.mp launcher.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to check. |

## Returns

Returns 1 if the player is using the open.mp launcher, otherwise 0.

## Examples

```c
public OnPlayerConnect(playerid)
{
    // Player is using the open.mp launcher
    if (IsPlayerUsingOmp(playerid))
    {
        SendClientMessage(playerid, -1, "You are using the open.mp launcher.");
    }

    // Player is not using the open.mp launcher
    else
    {
        SendClientMessage(playerid, 0xFF0000FF, "[KICK]: You don't seem to be using the open.mp launcher");
        Kick(playerid);
    }

    return 1;
}
```

## Related Functions

-   [IsPlayerUsingOfficialClient](https://open.mp/docs/scripting/functions/IsPlayerUsingOfficialClient): Check if the player is using the official SA-MP client.
-   [SendClientCheck](https://open.mp/docs/scripting/functions/SendClientCheck): Perform a memory check on the client.
