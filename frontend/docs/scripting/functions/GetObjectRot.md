---
title: GetObjectRot
sidebar_label: GetObjectRot
description: Use this function to get the objects current rotation.
tags: ["object"]
---

## Description

Use this function to get the objects current rotation. The rotation is saved by reference in three rotationX/rotationY/rotationZ variables.

| Name             | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| objectid         | The objectid of the object you want to get the rotation from. |
| &Float:rotationX | The variable to store the X rotation, passed by reference.    |
| &Float:rotationY | The variable to store the Y rotation, passed by reference.    |
| &Float:rotationZ | The variable to store the Z rotation, passed by reference.    |

## Returns

The object's rotation is stored in the referenced variables, not in the return value.

## Examples

```c
public OnGameModeInit()
{
    new objectid = CreateObject(652, 732.32690, 1940.21289, 4.27340, 357.00000, 0.00000, -76.00000);

    new Float:rotationX, Float:rotationY, Float:rotationZ;
    GetObjectRot(objectid, rotationX, rotationY, rotationZ);
    // rotationX = 357.00000
    // rotationY = 0.00000
    // rotationZ = -76.00000
    return 1;
}
```

## Related Functions

- [GetObjectPos](GetObjectPos): Locate an object.
- [CreateObject](CreateObject): Create an object.
- [DestroyObject](DestroyObject): Destroy an object.
- [IsValidObject](IsValidObject): Checks if a certain object is vaild.
- [MoveObject](MoveObject): Move an object.
- [StopObject](StopObject): Stop an object from moving.
- [SetObjectPos](SetObjectPos): Set the position of an object.
- [SetObjectRot](SetObjectRot): Set the rotation of an object.
- [GetObjectRot](GetObjectRot): Check the rotation of an object.
- [AttachObjectToPlayer](AttachObjectToPlayer): Attach an object to a player.
- [CreatePlayerObject](CreatePlayerObject): Create an object for only one player.
- [DestroyPlayerObject](DestroyPlayerObject): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject): Checks if a certain player object is vaild.
- [MovePlayerObject](MovePlayerObject): Move a player object.
- [StopPlayerObject](StopPlayerObject): Stop a player object from moving.
- [SetPlayerObjectPos](SetPlayerObjectPos): Set the position of a player object.
- [SetPlayerObjectRot](SetPlayerObjectRot): Set the rotation of a player object.
- [GetPlayerObjectPos](GetPlayerObjectPos): Locate a player object.
- [GetPlayerObjectRot](GetPlayerObjectRot): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Attach a player object to a player.
