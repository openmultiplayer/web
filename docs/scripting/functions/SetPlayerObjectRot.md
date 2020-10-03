---
id: SetPlayerObjectRot
title: SetPlayerObjectRot
description: Set the rotation of an object on the X, Y and Z axis.
tags: ["player"]
---

## Description

Set the rotation of an object on the X, Y and Z axis.

| Name       | Description                                         |
| ---------- | --------------------------------------------------- |
| playerid   | The ID of the player whose player-object to rotate. |
| objectid   | The ID of the player-object to rotate.              |
| Float:RotX | The X rotation to set.                              |
| Float:RotY | The Y rotation to set.                              |
| Float:RotZ | The Z rotation to set.                              |

## Returns

1: The function executed successfully.

0: The function failed to execute.

## Examples

```c
SetPlayerObjectRot(playerid, objectid, RotX, RotY, RotZ);
```

## Notes

:::tip

To smoothly rotate an object, see MovePlayerObject.

:::

## Related Functions

- [CreatePlayerObject](../functions/CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](../functions/DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](../functions/IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](../functions/MovePlayerObject.md): Move a player object.
- [StopPlayerObject](../functions/StopPlayerObject.md): Stop a player object from moving.
- [SetPlayerObjectPos](../functions/SetPlayerObjectPos.md): Set the position of a player object.
- [GetPlayerObjectPos](../functions/GetPlayerObjectPos.md): Locate a player object.
- [GetPlayerObjectRot](../functions/GetPlayerObjectRot.md): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](../functions/AttachPlayerObjectToPlayer.md): Attach a player object to a player.
- [CreateObject](../functions/CreateObject.md): Create an object.
- [DestroyObject](../functions/DestroyObject.md): Destroy an object.
- [IsValidObject](../functions/IsValidObject.md): Checks if a certain object is vaild.
- [MoveObject](../functions/MoveObject.md): Move an object.
- [StopObject](../functions/StopObject.md): Stop an object from moving.
- [SetObjectPos](../functions/SetObjectPos.md): Set the position of an object.
- [SetObjectRot](../functions/SetObjectRot.md): Set the rotation of an object.
- [GetObjectPos](../functions/GetObjectPos.md): Locate an object.
- [GetObjectRot](../functions/GetObjectRot.md): Check the rotation of an object.
- [AttachObjectToPlayer](../functions/AttachObjectToPlayer.md): Attach an object to a player.
