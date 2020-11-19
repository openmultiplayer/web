---
title: CreatePlayerObject
description: Creates an object which will be visible to only one player.
tags: ["player"]
---

## Description

Creates an object which will be visible to only one player.

| Name               | Description                                                                                                                                                                                                                                                                                                       |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid           | The ID of the player to create the object for.                                                                                                                                                                                                                                                                    |
| modelid            | The model to create.                                                                                                                                                                                                                                                                                              |
| Float:X            | The X coordinate to create the object at.                                                                                                                                                                                                                                                                         |
| Float:Y            | The Y coordinate to create the object at.                                                                                                                                                                                                                                                                         |
| Float:Z            | The Z coordinate to create the object at.                                                                                                                                                                                                                                                                         |
| Float:rX           | The X rotation of the object.                                                                                                                                                                                                                                                                                     |
| Float:rY           | The Y rotation of the object.                                                                                                                                                                                                                                                                                     |
| Float:rZ           | The Z rotation of the object.                                                                                                                                                                                                                                                                                     |
| Float:DrawDistance | The distance from which objects will appear to players. 0.0 will cause an object to render at its default distance. Leaving this parameter out will cause objects to be rendered at their default distance. The maximum usable distance is 300 in versions prior to 0.3x, in which drawdistance can be unlimited. |

## Returns

The ID of the object that was created, or INVALID_OBJECT_ID if the object limit (MAX_OBJECTS) was reached.

## Examples

```c
new gObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0, 0, 96);

    // Or alternatively, using the DrawDistance parameter to show it from as far away as possible:
    gObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0, 0, 96, 300.0);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    DestroyPlayerObject(playerid, gObject[playerid]);
    return 1;
}
```

## Notes

:::warning

The 'DrawDistance' parameter was added in 0.3b. It must be left out in scripts for older versions of SA:MP.

:::

## Related Functions

- [DestroyPlayerObject](DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](MovePlayerObject.md): Move a player object.
- [StopPlayerObject](StopPlayerObject.md): Stop a player object from moving.
- [SetPlayerObjectPos](SetPlayerObjectPos.md): Set the position of a player object.
- [SetPlayerObjectRot](SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](GetPlayerObjectPos.md): Locate a player object.
- [GetPlayerObjectRot](GetPlayerObjectRot.md): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer.md): Attach a player object to a player.
- [CreateObject](CreateObject.md): Create an object.
- [DestroyObject](DestroyObject.md): Destroy an object.
- [IsValidObject](IsValidObject.md): Checks if a certain object is vaild.
- [MoveObject](MoveObject.md): Move an object.
- [StopObject](StopObject.md): Stop an object from moving.
- [SetObjectPos](SetObjectPos.md): Set the position of an object.
- [SetObjectRot](SetObjectRot.md): Set the rotation of an object.
- [GetObjectPos](GetObjectPos.md): Locate an object.
- [GetObjectRot](GetObjectRot.md): Check the rotation of an object.
- [AttachObjectToPlayer](AttachObjectToPlayer.md): Attach an object to a player.
