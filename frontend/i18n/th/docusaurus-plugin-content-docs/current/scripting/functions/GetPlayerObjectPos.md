---
title: GetPlayerObjectPos
description: Get the position of a player object (CreatePlayerObject).
tags: ["player"]
---

## คำอธิบาย

Get the position of a player object (CreatePlayerObject).

| Name     | Description                                                               |
| -------- | ------------------------------------------------------------------------- |
| playerid | The ID of the player whose player object to get the position of.          |
| objectid | The object's id of which you want the current location.                   |
| &Float:X | A float variable in which to store the X coordinate, passed by reference. |
| &Float:Y | A float variable in which to store the Y coordinate, passed by reference. |
| &Float:Z | A float variable in which to store the Z coordinate, passed by reference. |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The player and/or the object don't exist.

The object's position is stored in the specified variables.

## ตัวอย่าง

```c
new Float:x, Float:y, Float:z;
GetPlayerObjectPos(playerid, objectid, x, y, z);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- CreatePlayerObject: Create an object for only one player.
- DestroyPlayerObject: Destroy a player object.
- IsValidPlayerObject: Checks if a certain player object is vaild.
- MovePlayerObject: Move a player object.
- StopPlayerObject: Stop a player object from moving.
- SetPlayerObjectPos: Set the position of a player object.
- SetPlayerObjectRot: Set the rotation of a player object.
- GetPlayerObjectRot: Check the rotation of a player object.
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
