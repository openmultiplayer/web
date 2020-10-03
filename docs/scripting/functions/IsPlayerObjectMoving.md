---
id: IsPlayerObjectMoving
title: IsPlayerObjectMoving
description: Checks if the given player objectid is moving.
tags: ["player"]
---

:::warning

This function was added in SA-MP 0.3d and will not work in earlier versions!

:::

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
if(IsPlayerObjectMoving(playerid, objectid)) StopPlayerObject(playerid, objectid);
```

## Related Functions

- [CreatePlayerObject](../functions/CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](../functions/DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](../functions/IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](../functions/MovePlayerObject.md): Move a player object.
- [StopPlayerObject](../functions/StopPlayerObject.md): Stop a player object from moving.
- [SetPlayerObjectPos](../functions/SetPlayerObjectPos.md): Set the position of a player object.
- [SetPlayerObjectRot](../functions/SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](../functions/GetPlayerObjectPos.md): Locate a player object.
- [GetPlayerObjectRot](../functions/GetPlayerObjectRot.md): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](../functions/AttachObjectToPlayer.md): Attach a player object to a player.
- [CreateObject](../functions/CreateObject.md): Create an object.
- [DestroyObject](../functions/DestroyObject.md): Destroy an object.
- [IsValidObject](../functions/IsValidObject.md): Checks if a certain object is vaild.
- [MoveObject](../functions/MoveObject.md): Move an object.
- [IsObjectMoving](../functions/IsObjectMoving.md): Check if the object is moving.
- [StopObject](../functions/StopObject.md): Stop an object from moving.
- [SetObjectPos](../functions/SetObjectPos.md): Set the position of an object.
- [SetObjectRot](../functions/SetObjectRot.md): Set the rotation of an object.
- [GetObjectPos](../functions/GetObjectPos.md): Locate an object.
- [GetObjectRot](../functions/GetObjectRot.md): Check the rotation of an object.
- [AttachObjectToPlayer](../functions/AttachObjectToPlayer.md): Attach an object to a player.
- [OnPlayerObjectMoved](../callbacks/OnPlayerObjectMoved.md): Called when a player-object stops moving.
