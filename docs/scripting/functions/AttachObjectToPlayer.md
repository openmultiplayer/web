---
id: AttachObjectToPlayer
title: AttachObjectToPlayer
description: Attach an object to a player.
tags: ["player"]
---

## Description

Attach an object to a player.

| Name          | Description                                                        |
| ------------- | ------------------------------------------------------------------ |
| objectid      | The ID of the object to attach to the player.                      |
| playerid      | The ID of the player to attach the object to.                      |
| Float:OffsetX | The distance between the player and the object in the X direction. |
| Float:OffsetY | The distance between the player and the object in the Y direction. |
| Float:OffsetZ | The distance between the player and the object in the Z direction. |
| Float:RotX    | The X rotation between the object and the player.                  |
| Float:RotY    | The Y rotation between the object and the player.                  |
| Float:RotZ    | The Z rotation between the object and the player.                  |

## Returns

This function always returns 0.

## Examples

```c
new myobject;
myobject = CreateObject(19341, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
AttachObjectToPlayer(myobject, playerid, 1.5, 0.5, 0.0, 0.0, 1.5, 2);
```

## Related Functions

- [AttachObjectToVehicle](../functions/AttachObjectToVehicle.md): Attach an object to a vehicle.
- [AttachObjectToObject](../functions/AttachObjectToObject.md): Attach an object to an object.
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
- [CreatePlayerObject](../functions/CreatePlayerObject.md): Create an object for only one player.
- [DestroyPlayerObject](../functions/DestroyPlayerObject.md): Destroy a player object.
- [IsValidPlayerObject](../functions/IsValidPlayerObject.md): Checks if a certain player object is vaild.
- [MovePlayerObject](../functions/MovePlayerObject.md): Move a player object.
- [StopPlayerObject](../functions/StopPlayerObject.md): Stop a player object from moving.
- [SetPlayerObjectPos](../functions/SetPlayerObjectPos.md): Set the position of a player object.
- [SetPlayerObjectRot](../functions/SetPlayerObjectRot.md): Set the rotation of a player object.
- [GetPlayerObjectPos](../functions/GetPlayerObjectPos.md): Locate a player object.
- [GetPlayerObjectRot](../functions/GetPlayerObjectRot.md): Check the rotation of a player object.
