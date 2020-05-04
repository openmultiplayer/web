---
id: GetPlayerObjectRot
title: GetPlayerObjectRot
description: Use this function to get the object's current rotation.
tags: ["player"]
---

<TagLinks />

## Description

Use this function to get the object's current rotation. The rotation is saved by reference in three RotX/RotY/RotZ variables.

| Name     | Description                                                   |
| -------- | ------------------------------------------------------------- |
| playerid | The player you associated this object to.                     |
| objectid | The objectid of the object you want to get the rotation from. |
| &Float:X | The variable to store the X rotation, passed by reference.    |
| &Float:Y | The variable to store the Y rotation, passed by reference.    |
| &Float:Z | The variable to store the Z rotation, passed by reference.    |

## Returns

The object's rotation is stored in the specified variables.

## Examples

```c
GetPlayerObjectRot(playerid, objectid, RotX, RotY, RotZ);
```

## Related Functions

- CreatePlayerObject: Create an object for only one player.
- DestroyPlayerObject: Destroy a player object.
- IsValidPlayerObject: Checks if a certain player object is vaild.
- MovePlayerObject: Move a player object.
- StopPlayerObject: Stop a player object from moving.
- SetPlayerObjectPos: Set the position of a player object.
- SetPlayerObjectRot: Set the rotation of a player object.
- GetPlayerObjectPos: Locate a player object.
- AttachPlayerObjectToPlayer: Attach a player object to a player.
- CreateObject: Create an object.
- DestroyObject: Destroy an object.
- IsValidObject: Checks if a certain object is vaild.
- MoveObject: Move an object.
- StopObject: Stop an object from moving.
- SetObjectPos: Set the position of an object.
- SetObjectRot: Set the rotation of an object.
- GetObjectPos: Locate an object.
- GetObjectRot: Check the rotation of an object.
- AttachObjectToPlayer: Attach an object to a player.
