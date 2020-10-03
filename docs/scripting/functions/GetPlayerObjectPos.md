---
id: GetPlayerObjectPos
title: GetPlayerObjectPos
description: Get the position of a player object (CreatePlayerObject).
tags: ["player"]
---

## Description

Get the position of a player object (CreatePlayerObject).

| Name     | Description                                                               |
| -------- | ------------------------------------------------------------------------- |
| playerid | The ID of the player whose player object to get the position of.          |
| objectid | The object's id of which you want the current location.                   |
| &Float:X | A float variable in which to store the X coordinate, passed by reference. |
| &Float:Y | A float variable in which to store the Y coordinate, passed by reference. |
| &Float:Z | A float variable in which to store the Z coordinate, passed by reference. |

## Returns

1: The function executed successfully.

0: The function failed to execute. The player and/or the object don't exist.

The object's position is stored in the specified variables.

## Examples

```c
new Float:x, Float:y, Float:z;
GetPlayerObjectPos(playerid, objectid, x, y, z);
```

## Related Functions

- [CreatePlayerObject](CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](MovePlayerObject.md): Move a player object.
- [StopPlayerObject](StopPlayerObject.md): Stop a player object from moving.
- [SetPlayerObjectPos](SetPlayerObjectPos.md): Set the position of a player object.
- [SetPlayerObjectRot](SetPlayerObjectRot.md): Set the rotation of a player object.
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
