---
title: IsPlayerObjectMoving
description: Checks if the given player objectid is moving.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3d' />

## Description

Checks if the given player objectid is moving.

| Name     | Description                                          |
| -------- | ---------------------------------------------------- |
| playerid | The ID of the player whose player-object is checked. |
| objectid | The player objectid you want to check if is moving.  |

## Returns

1 if the player object is moving, 0 if not.

## Examples

```c
if (IsPlayerObjectMoving(playerid, objectid))
{
	StopPlayerObject(playerid, objectid);
}
```

## Related Functions

- [CreatePlayerObject](CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](MovePlayerObject.md): Move a player object.
- [StopPlayerObject](StopPlayerObject.md): Stop a player object from moving.
- [SetPlayerObjectPos](SetPlayerObjectPos.md): Set the position of a player object.
- [SetPlayerObjectRot](SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](GetPlayerObjectPos.md): Locate a player object.
- [GetPlayerObjectRot](GetPlayerObjectRot.md): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](AttachObjectToPlayer.md): Attach a player object to a player.
- [CreateObject](CreateObject.md): Create an object.
- [DestroyObject](DestroyObject.md): Destroy an object.
- [IsValidObject](IsValidObject.md): Checks if a certain object is vaild.
- [MoveObject](MoveObject.md): Move an object.
- [IsObjectMoving](IsObjectMoving.md): Check if the object is moving.
- [StopObject](StopObject.md): Stop an object from moving.
- [SetObjectPos](SetObjectPos.md): Set the position of an object.
- [SetObjectRot](SetObjectRot.md): Set the rotation of an object.
- [GetObjectPos](GetObjectPos.md): Locate an object.
- [GetObjectRot](GetObjectRot.md): Check the rotation of an object.
- [AttachObjectToPlayer](AttachObjectToPlayer.md): Attach an object to a player.
- [OnPlayerObjectMoved](../callbacks/OnPlayerObjectMoved.md): Called when a player-object stops moving.
