---
title: AttachPlayerObjectToPlayer
description: The same as AttachObjectToPlayer but for objects which were created for player.
tags: ["player", "object", "playerobject"]
---

## Description

The same as [AttachObjectToPlayer](AttachObjectToPlayer) but for objects which were created for player.

| Name            | Description                                                        |
| --------------- | ------------------------------------------------------------------ |
| playerid        | The id of the player which is linked with the object.              |
| objectid        | The objectid you want to attach to the player.                     |
| parentid        | The id of the player you want to attach to the object.             |
| Float:offsetX   | The distance between the player and the object in the X direction. |
| Float:offsetY   | The distance between the player and the object in the Y direction. |
| Float:offsetZ   | The distance between the player and the object in the Z direction. |
| Float:rotationX | The X rotation.                                                    |
| Float:rotationY | The Y rotation.                                                    |
| Float:rotationZ | The Z rotation.                                                    |

## Returns

This function does not return any specific values.

## Examples

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    AttachPlayerObjectToPlayer(playerid, gPlayerObject[playerid], other_playerid, 1.5, 0.5, 0.0, 0.0, 1.5, 2.0);
    return 1;
}
```

## Notes

:::warning

This function was removed in SA-MP 0.3.

:::

## Related Functions

- [CreatePlayerObject](CreatePlayerObject): Create an object for only one player.
- [DestroyPlayerObject](DestroyPlayerObject): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject): Checks if a certain player object is vaild.
- [MovePlayerObject](MovePlayerObject): Move a player object.
- [StopPlayerObject](StopPlayerObject): Stop a player object from moving.
- [SetPlayerObjectRot](SetPlayerObjectRot): Set the rotation of a player object.
- [GetPlayerObjectPos](GetPlayerObjectPos): Locate a player object.
- [SetPlayerObjectPos](SetPlayerObjectPos): Set the position of a player object.
- [GetPlayerObjectRot](GetPlayerObjectRot): Check the rotation of a player object.
- [SetPlayerAttachedObject](SetPlayerAttachedObject): Attach an object to a player
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): Remove an attached object from a player
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): Check whether an object is attached to a player in a specified index
- [CreateObject](CreateObject): Create an object.
- [DestroyObject](DestroyObject): Destroy an object.
- [IsValidObject](IsValidObject): Checks if a certain object is vaild.
- [MoveObject](MoveObject): Move a object.
- [StopObject](StopObject): Stop an object from moving.
- [SetObjectPos](SetObjectPos): Set the position of an object.
- [SetObjectRot](SetObjectRot): Set the rotation of an object.
- [GetObjectPos](GetObjectPos): Locate an object.
- [GetObjectRot](GetObjectRot): Check the rotation of an object.
- [AttachObjectToPlayer](AttachObjectToPlayer): Attach an object to a player.
