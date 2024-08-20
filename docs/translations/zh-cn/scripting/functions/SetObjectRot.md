---
title: SetObjectRot
description: Set the rotation of an object on the three axes (X, Y and Z).
tags: ["object"]
---

## Description

Set the rotation of an object on the three axes (X, Y and Z).

| Name            | Description                                  |
| --------------- | -------------------------------------------- |
| objectid        | The ID of the object to set the rotation of. |
| Float:rotationX | The X rotation.                              |
| Float:rotationY | The Y rotation.                              |
| Float:rotationZ | The Z rotation.                              |

## Returns

This function always returns 1, even if the object doesn't exist.

## Examples

```c
public OnGameModeInit()
{
    new objectid = CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    SetObjectRot(objectid, 0.0, 0.0, 180.0);
    return 1;
}
```

## Related Functions

- [CreateObject](CreateObject): Create an object.
- [DestroyObject](DestroyObject): Destroy an object.
- [IsValidObject](IsValidObject): Checks if a certain object is vaild.
- [MoveObject](MoveObject): Move an object.
- [StopObject](StopObject): Stop an object from moving.
- [SetObjectPos](SetObjectPos): Set the position of an object.
- [GetObjectPos](GetObjectPos): Locate an object.
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
