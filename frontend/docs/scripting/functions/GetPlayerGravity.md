---
title: GetPlayerGravity
sidebar_label: GetPlayerGravity
description: Get a player's gravity.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get a player's gravity.

| Name     | Description                                 |
| -------- | ------------------------------------------- |
| playerid | The ID of the player to get the gravity of. |

## Returns

The player's gravity as float.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/mygravity", true))
    {
        new string[32];
        format(string, sizeof(string), "Your gravity is: %f", GetPlayerGravity(playerid));
        SendClientMessage(playerid, 0xFFFF00FF, string);
        return 1;
    }
    return 0;
}
```

## Related Functions

- [SetPlayerGravity](SetPlayerGravity): Set a player's gravity.
- [GetGravity](GetGravity): Get the currently global gravity.
- [SetGravity](SetGravity): Set the gravity for all players.