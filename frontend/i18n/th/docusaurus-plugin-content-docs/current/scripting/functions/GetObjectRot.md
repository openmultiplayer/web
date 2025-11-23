---
title: GetObjectRot
sidebar_label: GetObjectRot
description: Use this function to get the objects current rotation.
tags: []
---

## คำอธิบาย

Use this function to get the objects current rotation. The rotation is saved by reference in three RotX/RotY/RotZ variables.

| Name     | Description                                                   |
| -------- | ------------------------------------------------------------- |
| objectid | The objectid of the object you want to get the rotation from. |
| &Float:X | The variable to store the X rotation, passed by reference.    |
| &Float:Y | The variable to store the Y rotation, passed by reference.    |
| &Float:Z | The variable to store the Z rotation, passed by reference.    |

## ส่งคืน

The object's rotation is stored in the referenced variables, not in the return value.

## ตัวอย่าง

```c
new Float:RotX,Float:RotY,Float:RotZ;
GetObjectRot(objectid, RotX, RotY, RotZ);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

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
