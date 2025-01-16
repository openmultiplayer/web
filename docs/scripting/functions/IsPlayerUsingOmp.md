---
title: IsPlayerUsingOmp
description: Check if the player is using the open.mp launcher.
tags: ["player"]
---

<VersionWarn version='omp 1.4.0.2779' />

## Description

Check if the player is using the open.mp launcher.

| Name     | Description                                                 |
| -------- | ----------------------------------------------------------- |
| playerid | The ID of the player to check.       |

## Returns

Returns 1 if the player is using the open.mp launcher, otherwise 0.

## Examples

```c
public OnPlayerConnect(playerid)
{
    // Player is using the open.mp launcher
    if(IsPlayerUsingOmp(playerid))
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

- [IsPlayerUsingOfficialClient](IsPlayerUsingOfficialClient): Check if the player is using the official SA-MP client.
- [SendClientCheck](SendClientCheck): Perform a memory check on the client.
