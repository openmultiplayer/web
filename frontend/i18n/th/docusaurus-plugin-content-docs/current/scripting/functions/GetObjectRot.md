---
title: GetObjectRot
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

- [GetObjectPos](../functions/GetObjectPos): Locate an object.
- [CreateObject](../functions/CreateObject): Create an object.
- [DestroyObject](../functions/DestroyObject): Destroy an object.
- [IsValidObject](../functions/IsValidObject): Checks if a certain object is vaild.
- [MoveObject](../functions/MoveObject): Move an object.
- [StopObject](../functions/StopObject): Stop an object from moving.
- [SetObjectPos](../functions/SetObjectPos): Set the position of an object.
- [SetObjectRot](../functions/SetObjectRot): Set the rotation of an object.
- [GetObjectRot](../functions/GetObjectRot): Check the rotation of an object.
- [AttachObjectToPlayer](../functions/AttachObjectToPlayer): Attach an object to a player.
- [CreatePlayerObject](../functions/CreatePlayerObject): Create an object for only one player.
- [DestroyPlayerObject](../functions/DestroyPlayerObject): Destroy a player object.
- [IsValidPlayerObject](../functions/IsValidPlayerObject): Checks if a certain player object is vaild.
- [MovePlayerObject](../functions/MovePlayerObject): Move a player object.
- [StopPlayerObject](../functions/StopPlayerObject): Stop a player object from moving.
- [SetPlayerObjectPos](../functions/SetPlayerObjectPos): Set the position of a player object.
- [SetPlayerObjectRot](../functions/SetPlayerObjectRot): Set the rotation of a player object.
- [GetPlayerObjectPos](../functions/GetPlayerObjectPos): Locate a player object.
- [GetPlayerObjectRot](../functions/GetPlayerObjectRot): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](../functions/AttachPlayerObjectToPlayer): Attach a player object to a player.
