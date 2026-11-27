---
title: "GetPlayerGravity | open.mp"
description: "Get a player's gravity."
canonical: https://open.mp/docs/scripting/functions/GetPlayerGravity
language: en
---

# GetPlayerGravity

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get a player's gravity.

| Name | Description |
| --- | --- |
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

-   [SetPlayerGravity](https://open.mp/docs/scripting/functions/SetPlayerGravity): Set a player's gravity.
-   [GetGravity](https://open.mp/docs/scripting/functions/GetGravity): Get the currently global gravity.
-   [SetGravity](https://open.mp/docs/scripting/functions/SetGravity): Set the gravity for all players.
