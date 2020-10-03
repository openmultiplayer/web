---
id: StopPlayerObject
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
StopPlayerObject(playerid, objectid);
```

## Related Functions

- [MovePlayerObject](MovePlayerObject.md): Move a player object.
- [CreatePlayerObject](CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [IsPlayerObjectMoving](IsPlayerObjectMoving.md): Check if the player object is moving.
- [SetPlayerObjectPos](SetPlayerObjectPos.md): Set the position of a player object.
- [SetPlayerObjectRot](SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](GetPlayerObjectPos.md): Locate a player object.
- [GetPlayerObjectRot](GetPlayerObjectRot.md): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer.md): Attach a player object to a player.
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
