---
title: StopPlayerObject
description: Stop a moving player-object after MovePlayerObject has been used.
tags: ["player"]
---

## Description

Stop a moving player-object after MovePlayerObject has been used.

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | The ID of the player whose player-object to stop. |
| objectid | The ID of the player-object to stop.              |

## Returns

This function does not return any specific values.

## Examples

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    MovePlayerObject(playerid, gPlayerObject[playerid], 2001.195679, 1547.113892, 10.000000, 2.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/stopobject", true) == 0)
    {
        StopPlayerObject(playerid, gPlayerObject[playerid]);
        return 1;
    }
    return 0;
}
```

## Related Functions

- [MovePlayerObject](MovePlayerObject): Move a player object.
- [CreatePlayerObject](CreatePlayerObject): Create an object for only one player.
- [DestroyPlayerObject](DestroyPlayerObject): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject): Checks if a certain player object is vaild.
- [IsPlayerObjectMoving](IsPlayerObjectMoving): Check if the player object is moving.
- [SetPlayerObjectPos](SetPlayerObjectPos): Set the position of a player object.
- [SetPlayerObjectRot](SetPlayerObjectRot): Set the rotation of a player object.
- [GetPlayerObjectPos](GetPlayerObjectPos): Locate a player object.
- [GetPlayerObjectRot](GetPlayerObjectRot): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Attach a player object to a player.
- [CreateObject](CreateObject): Create an object.
- [DestroyObject](DestroyObject): Destroy an object.
- [IsValidObject](IsValidObject): Checks if a certain object is vaild.
- [MoveObject](MoveObject): Move an object.
- [IsObjectMoving](IsObjectMoving): Check if the object is moving.
- [StopObject](StopObject): Stop an object from moving.
- [SetObjectPos](SetObjectPos): Set the position of an object.
- [SetObjectRot](SetObjectRot): Set the rotation of an object.
- [GetObjectPos](GetObjectPos): Locate an object.
- [GetObjectRot](GetObjectRot): Check the rotation of an object.
- [AttachObjectToPlayer](AttachObjectToPlayer): Attach an object to a player.
