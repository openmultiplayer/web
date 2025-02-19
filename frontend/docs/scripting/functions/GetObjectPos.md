---
title: GetObjectPos
sidebar_label: GetObjectPos
description: Get the position of an object.
tags: ["object"]
---

## Description

Get the position of an object.

| Name     | Description                                                         |
| -------- | ------------------------------------------------------------------- |
| objectid | The ID of the object to get the position of..                       |
| &Float:x | A variable in which to store the X coordinate, passed by reference. |
| &Float:y | A variable in which to store the Y coordinate, passed by reference. |
| &Float:z | A variable in which to store the Z coordinate, passed by reference. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The specified object does not exist.

## Examples

```c
public OnGameModeInit()
{
    new objectid = CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    new Float:x, Float:y, Float:z;
    GetObjectPos(objectid, x, y, z);
    // x = 2001.195679
    // y = 1547.113892
    // z = 14.283400
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
