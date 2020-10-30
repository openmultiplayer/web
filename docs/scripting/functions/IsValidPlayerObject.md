---
title: IsValidPlayerObject
description: Checks if the given object ID is valid for the given player.
tags: ["player"]
---

## Description

Checks if the given object ID is valid for the given player.

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| playerid | The ID of the player whose player-object to validate. |
| objectid | The ID of the object to validate.                     |

## Returns

1 if the object exists, 0 if not.

## Examples

```c
// Check if an object is valid (exists) before we delete it
if (IsValidPlayerObject(playerid, objectid))
{
	DestroyPlayerObject(playerid, objectid);
}
```

## Related Functions

- [CreatePlayerObject](CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](DestroyPlayerObject.md): Destroy a player object.
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
