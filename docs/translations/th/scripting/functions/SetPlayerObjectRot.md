---
title: SetPlayerObjectRot
description: Set the rotation of an object on the X, Y and Z axis.
tags: ["player"]
---

## คำอธิบาย

Set the rotation of an object on the X, Y and Z axis.

| Name       | Description                                         |
| ---------- | --------------------------------------------------- |
| playerid   | The ID of the player whose player-object to rotate. |
| objectid   | The ID of the player-object to rotate.              |
| Float:RotX | The X rotation to set.                              |
| Float:RotY | The Y rotation to set.                              |
| Float:RotZ | The Z rotation to set.                              |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute.

## ตัวอย่าง

```c
SetPlayerObjectRot(playerid, objectid, RotX, RotY, RotZ);
```

## บันทึก

:::tip

To smoothly rotate an object, see MovePlayerObject.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- CreatePlayerObject: Create an object for only one player.
- DestroyPlayerObject: Destroy a player object.
- IsValidPlayerObject: Checks if a certain player object is vaild.
- MovePlayerObject: Move a player object.
- StopPlayerObject: Stop a player object from moving.
- SetPlayerObjectPos: Set the position of a player object.
- GetPlayerObjectPos: Locate a player object.
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
