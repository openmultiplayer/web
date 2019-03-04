---
title: AttachObjectToPlayer
description: Attach an object to a player.
tags: ["player"]
---

# AttachObjectToPlayer

<TagLinks />

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

- AttachObjectToVehicle: Attach an object to a vehicle.
- AttachObjectToObject: Attach an object to an object.
- AttachPlayerObjectToPlayer: Attach a player object to a player.
- SetPlayerAttachedObject: Attach an object to a player
- CreateObject: Create an object.
- DestroyObject: Destroy an object.
- IsValidObject: Checks if a certain object is vaild.
- MoveObject: Move an object.
- StopObject: Stop an object from moving.
- SetObjectPos: Set the position of an object.
- SetObjectRot: Set the rotation of an object.
- GetObjectPos: Locate an object.
- GetObjectRot: Check the rotation of an object.
- CreatePlayerObject: Create an object for only one player.
- DestroyPlayerObject: Destroy a player object.
- IsValidPlayerObject: Checks if a certain player object is vaild.
- MovePlayerObject: Move a player object.
- StopPlayerObject: Stop a player object from moving.
- SetPlayerObjectPos: Set the position of a player object.
- SetPlayerObjectRot: Set the rotation of a player object.
- GetPlayerObjectPos: Locate a player object.
- GetPlayerObjectRot: Check the rotation of a player object.
