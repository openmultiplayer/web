---
title: SetObjectPos
description: Change the position of an object.
tags: []
---

## คำอธิบาย

Change the position of an object.

| Name     | Description                                                            |
| -------- | ---------------------------------------------------------------------- |
| objectid | The ID of the object to set the position of. Returned by CreateObject. |
| Float:X  | The X coordinate to position the object at.                            |
| Float:Y  | The Y coordinate to position the object at.                            |
| Float:Z  | The Z coordinate to position the object at.                            |

## ส่งคืน

This function always returns 1, even if the object specified does not exist.

## ตัวอย่าง

```c
SetObjectPos(objectid, 2001.195679, 1547.113892, 14.283400);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- CreateObject: Create an object.
- DestroyObject: Destroy an object.
- IsValidObject: Checks if a certain object is vaild.
- MoveObject: Move an object.
- StopObject: Stop an object from moving.
- SetObjectRot: Set the rotation of an object.
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
