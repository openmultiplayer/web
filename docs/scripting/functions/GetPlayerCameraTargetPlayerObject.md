---
title: "GetPlayerCameraTargetPlayerObject | open.mp"
description: "Allows you to retrieve the ID of the player-object the player is looking at."
canonical: https://open.mp/docs/scripting/functions/GetPlayerCameraTargetPlayerObject
language: en
---

# GetPlayerCameraTargetPlayerObject

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Allows you to retrieve the ID of the player-object the player is looking at.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to check |

## Returns

The ID of the player-object the player is looking at.

If `INVALID_OBJECT_ID` (65535) is returned, player isn't looking at any object.

## Examples

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 19174, 978.9045, -986.3599, 40.9522, 0.0000, 0.0000, 228.0000);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/check", true))
    {
        new objectid = GetPlayerCameraTargetPlayerObject(playerid);
        if (objectid == gPlayerObject[playerid])
        {
            SendClientMessage(playerid, -1, "You're looking at your object.");
        }
        else if (objectid == INVALID_OBJECT_ID) // INVALID_OBJECT_ID = 65535
        {
            SendClientMessage(playerid, -1, "You're not looking at any object.");
        }
        return 1;
    }
    return 0;
}
```

## Notes

warning

This function is disabled by default to save bandwidth. Use [EnablePlayerCameraTarget](https://open.mp/docs/scripting/functions/EnablePlayerCameraTarget) to enable it for each player.

## Related Functions

-   [GetPlayerCameraTargetObject](https://open.mp/docs/scripting/functions/GetPlayerCameraTargetObject): Get the ID of the object a player is looking at.
-   [GetPlayerCameraTargetVehicle](https://open.mp/docs/scripting/functions/GetPlayerCameraTargetVehicle): Get the ID of the vehicle a player is looking at.
-   [GetPlayerCameraTargetPlayer](https://open.mp/docs/scripting/functions/GetPlayerCameraTargetPlayer): Get the ID of the player a player is looking at.
-   [GetPlayerCameraFrontVector](https://open.mp/docs/scripting/functions/GetPlayerCameraFrontVector): Get the player's camera front vector
