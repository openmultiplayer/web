---
id: AttachPlayerObjectToPlayer
title: AttachPlayerObjectToPlayer
description: The same as AttachObjectToPlayer but for objects which were created for player.
tags: ["player"]
---

## Description

The same as AttachObjectToPlayer but for objects which were created for player.

| Name          | Description                                                        |
| ------------- | ------------------------------------------------------------------ |
| objectplayer  | The id of the player which is linked with the object.              |
| objectid      | The objectid you want to attach to the player.                     |
| attachid      | The id of the player you want to attach to the object.             |
| Float:OffsetX | The distance between the player and the object in the X direction. |
| Float:OffsetY | The distance between the player and the object in the Y direction. |
| Float:OffsetZ | The distance between the player and the object in the Z direction. |
| Float:RotX    | The X rotation.                                                    |
| Float:RotY    | The Y rotation.                                                    |
| Float:RotZ    | The Z rotation.                                                    |

## Returns

This function does not return any specific values.

## Examples

```c
AttachPlayerObjectToPlayer(objectplayer, objectid, attachplayer, 1.5, 0.5, 0, 0, 1.5, 2 );
```

## Notes

:::warning

This function was removed in SA-MP 0.3.

:::

## Related Functions

- [CreatePlayerObject](../functions/CreateObject.md): Create an object for only one player.
- [DestroyPlayerObject](../functions/DestroyObject.md): Destroy a player object.
- [IsValidPlayerObject](../functions/IsValidObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](../functions/MoveObject.md): Move a player object.
- [StopPlayerObject](../functions/StopObject.md): Stop a player object from moving.
- [SetPlayerObjectRot](../functions/SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](../functions/GetPlayerObjectPos.md): Locate a player object.
- [SetPlayerObjectPos](../functions/SetPlayerObjectPos.md): Set the position of a player object.
- [GetPlayerObjectRot](../functions/GetPlayerObjectRot.md): Check the rotation of a player object.
- [SetPlayerAttachedObject](../functions/SetPlayerAttachedObject.md): Attach an object to a player
- [RemovePlayerAttachedObject](../functions/RemovePlayerAttachedObject.md): Remove an attached object from a player
- [IsPlayerAttachedObjectSlotUsed](../functions/IsPlayerAttachedObjectSlotUsed.md): Check whether an object is attached to a player in a specified index
- [CreateObject](../functions/CreateObject.md): Create an object.
- [DestroyObject](../functions/DestroyObject.md): Destroy an object.
- [IsValidObject](../functions/IsValidObject.md): Checks if a certain object is vaild.
- [MoveObject](../functions/MoveObject.md): Move a object.
- [StopObject](../functions/StopObject.md): Stop an object from moving.
- [SetObjectPos](../functions/SetObjectPos.md): Set the position of an object.
- [SetObjectRot](../functions/SetObjectRot.md): Set the rotation of an object.
- [GetObjectPos](../functions/GetObjectPos.md): Locate an object.
- [GetObjectRot](../functions/GetObjectRot.md): Check the rotation of an object.
- [AttachObjectToPlayer](../functions/AttachObjectToPlayer.md): Attach an object to a player.
