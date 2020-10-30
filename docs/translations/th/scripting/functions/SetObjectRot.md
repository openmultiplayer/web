---
title: SetObjectRot
description: Set the rotation of an object on the three axes (X, Y and Z).
tags: []
---

## คำอธิบาย

Set the rotation of an object on the three axes (X, Y and Z).

| Name       | Description                                  |
| ---------- | -------------------------------------------- |
| objectid   | The ID of the object to set the rotation of. |
| Float:RotX | The X rotation.                              |
| Float:RotY | The Y rotation.                              |
| Float:RotZ | The Z rotation.                              |

## ส่งคืน

This function always returns 1, even if the object doesn't exist.

## ตัวอย่าง

```c
SetObjectRot(objectid, 45, 90, 180);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- CreateObject: Create an object.
- DestroyObject: Destroy an object.
- IsValidObject: Checks if a certain object is vaild.
- MoveObject: Move an object.
- StopObject: Stop an object from moving.
- SetObjectPos: Set the position of an object.
- GetObjectPos: Locate an object.
- GetObjectRot: Check the rotation of an object.
- AttachObjectToPlayer: Attach an object to a player.
- CreatePlayerObject: Create an object for only one player.
- DestroyPlayerObject: Destroy a player object.
- IsValidPlayerObject: Checks if a certain player object is vaild.
- MovePlayerObject: Move a player object.
- StopPlayerObject: Stop a player object from moving.
- SetPlayerObjectPos: Set the position of a player object.
- SetPlayerObjectRot: Set the rotation of a player object.
- GetPlayerObjectPos: Locate a player object.
- GetPlayerObjectRot: Check the rotation of a player object.
- AttachPlayerObjectToPlayer: Attach a player object to a player.
