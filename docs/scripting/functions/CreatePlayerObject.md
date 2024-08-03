---
title: CreatePlayerObject
description: Creates an object which will be visible to only one player.
tags: ["player", "object", "playerobject"]
---

## Description

Creates an object which will be visible to only one player.

| Name               | Description                                                                                                                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid           | The ID of the player to create the object for.                                                                                                                                                              |
| modelid            | The model to create.                                                                                                                                                                                        |
| Float:x            | The X coordinate to create the object at.                                                                                                                                                                   |
| Float:y            | The Y coordinate to create the object at.                                                                                                                                                                   |
| Float:z            | The Z coordinate to create the object at.                                                                                                                                                                   |
| Float:rotationX    | The X rotation of the object.                                                                                                                                                                               |
| Float:rotationY    | The Y rotation of the object.                                                                                                                                                                               |
| Float:rotationZ    | The Z rotation of the object.                                                                                                                                                                               |
| Float:drawDistance | The distance from which objects will appear to players. 0.0 will cause an object to render at its default distance. Leaving this parameter out will cause objects to be rendered at their default distance. |

## Returns

The ID of the object that was created, or INVALID_OBJECT_ID if the object limit (MAX_OBJECTS) was reached.

## Examples

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    // Or alternatively, using the DrawDistance parameter to show it from as far away as possible:
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0, 300.0);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    DestroyPlayerObject(playerid, gPlayerObject[playerid]);
    return 1;
}
```

## Related Functions

- [DestroyPlayerObject](DestroyPlayerObject): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject): Checks if a certain player object is vaild.
- [MovePlayerObject](MovePlayerObject): Move a player object.
- [StopPlayerObject](StopPlayerObject): Stop a player object from moving.
- [SetPlayerObjectPos](SetPlayerObjectPos): Set the position of a player object.
- [SetPlayerObjectRot](SetPlayerObjectRot): Set the rotation of a player object.
- [GetPlayerObjectPos](GetPlayerObjectPos): Locate a player object.
- [GetPlayerObjectRot](GetPlayerObjectRot): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Attach a player object to a player.
- [CreateObject](CreateObject): Create an object.
- [DestroyObject](DestroyObject): Destroy an object.
- [IsValidObject](IsValidObject): Checks if a certain object is vaild.
- [MoveObject](MoveObject): Move an object.
- [StopObject](StopObject): Stop an object from moving.
- [SetObjectPos](SetObjectPos): Set the position of an object.
- [SetObjectRot](SetObjectRot): Set the rotation of an object.
- [GetObjectPos](GetObjectPos): Locate an object.
- [GetObjectRot](GetObjectRot): Check the rotation of an object.
- [AttachObjectToPlayer](AttachObjectToPlayer): Attach an object to a player.
