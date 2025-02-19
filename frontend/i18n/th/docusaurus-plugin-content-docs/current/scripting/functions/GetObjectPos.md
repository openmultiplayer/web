---
title: GetObjectPos
sidebar_label: GetObjectPos
description: Get the position of an object.
tags: []
---

## คำอธิบาย

Get the position of an object.

| Name     | Description                                                         |
| -------- | ------------------------------------------------------------------- |
| objectid | The ID of the object to get the position of..                       |
| &Float:X | A variable in which to store the X coordinate, passed by reference. |
| &Float:Y | A variable in which to store the Y coordinate, passed by reference. |
| &Float:Z | A variable in which to store the Z coordinate, passed by reference. |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The specified object does not exist.

## ตัวอย่าง

```c
new Float:x, Float:y, Float:z;
GetObjectPos(objectid, x, y, z);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

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
