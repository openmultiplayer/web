---
title: IsPlayerUsingOfficialClient
sidebar_label: IsPlayerUsingOfficialClient
description: Check if the player is using the official SA-MP client.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Check if the player is using the official SA-MP client.

| Name     | Description                                                 |
| -------- | ----------------------------------------------------------- |
| playerid | The ID of the player to check.       |

## Returns

Returns 1 if the player is using the official client, otherwise 0.

## Examples

```c
public OnPlayerConnect(playerid)
{
    if (IsPlayerUsingOfficialClient(playerid) == 0)
    {
        SendClientMessage(playerid, 0xFF0000FF, "[KICK]: You doesn't seem to be using the official sa-mp client!");
        Kick(playerid);
    }

    return 1;
}
```

## Related Functions

- [IsPlayerUsingOmp](IsPlayerUsingOmp): Check if the player is using the open.mp launcher.
- [SendClientCheck](SendClientCheck): Perform a memory check on the client.
