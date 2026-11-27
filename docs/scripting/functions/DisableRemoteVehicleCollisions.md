---
title: "DisableRemoteVehicleCollisions | open.mp"
description: "Disables collisions between occupied vehicles for a player."
canonical: https://open.mp/docs/scripting/functions/DisableRemoteVehicleCollisions
language: en
---

# DisableRemoteVehicleCollisions

warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

Disables collisions between occupied vehicles for a player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player for whom you want to disable collisions. |
| bool:disable | 'true' to disable collisions, 'false' to enable collisions. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The player specified does not exist.

## Examples

```c
new bool:gPlayerVehicleCollision[MAX_PLAYERS];

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/collision", true))
    {
        new string[64];

        format(string, sizeof(string), "Vehicle collision for you is now '%s'", (gPlayerVehicleCollision[playerid] == false) ? ("Disabled") : ("Enabled"));
        SendClientMessage(playerid, 0xFFFFFFFF, string);

        gPlayerVehicleCollision[playerid] = !gPlayerVehicleCollision[playerid];

        DisableRemoteVehicleCollisions(playerid, gPlayerVehicleCollision[playerid]);
        return 1;
    }
    return 0;
}
```
