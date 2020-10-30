---
title: SetPlayerObjectPos
description: Sets the position of a player-object to the specified coordinates.
tags: ["player"]
---

## คำอธิบาย

Sets the position of a player-object to the specified coordinates.

| Name     | Description                                                                         |
| -------- | ----------------------------------------------------------------------------------- |
| playerid | The ID of the player whose player-object to set the position of.                    |
| objectid | The ID of the player-object to set the position of. Returned by CreatePlayerObject. |
| Float:X  | The X coordinate to put the object at.                                              |
| Float:Y  | The Y coordinate to put the object at.                                              |
| Float:Z  | The Z coordinate to put the object at.                                              |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. Player and/or object do not exist.

## ตัวอย่าง

```c
new obj = CreatePlayerObject(...);

// Later on

SetPlayerObjectPos(playerid, obj, 2001.195679, 1547.113892, 14.283400);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- CreatePlayerObject: Create an object for only one player.
- DestroyPlayerObject: Destroy a player object.
- IsValidPlayerObject: Checks if a certain player object is vaild.
- MovePlayerObject: Move a player object.
- StopPlayerObject: Stop a player object from moving.
- SetPlayerObjectRot: Set the rotation of a player object.
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
