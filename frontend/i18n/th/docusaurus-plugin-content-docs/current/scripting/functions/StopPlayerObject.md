---
title: StopPlayerObject
sidebar_label: StopPlayerObject
description: Stop a moving player-object after MovePlayerObject has been used.
tags: ["player"]
---

## คำอธิบาย

Stop a moving player-object after MovePlayerObject has been used.

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | The ID of the player whose player-object to stop. |
| objectid | The ID of the player-object to stop.              |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
StopPlayerObject(playerid, objectid);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- MovePlayerObject: Move a player object.
- CreatePlayerObject: Create an object for only one player.
- DestroyPlayerObject: Destroy a player object.
- IsValidPlayerObject: Checks if a certain player object is vaild.
- IsPlayerObjectMoving: Check if the player object is moving.
- SetPlayerObjectPos: Set the position of a player object.
- SetPlayerObjectRot: Set the rotation of a player object.
- GetPlayerObjectPos: Locate a player object.
- GetPlayerObjectRot: Check the rotation of a player object.
- AttachPlayerObjectToPlayer: Attach a player object to a player.
- CreateObject: Create an object.
- DestroyObject: Destroy an object.
- IsValidObject: Checks if a certain object is vaild.
- MoveObject: Move an object.
- IsObjectMoving: Check if the object is moving.
- StopObject: Stop an object from moving.
- SetObjectPos: Set the position of an object.
- SetObjectRot: Set the rotation of an object.
- GetObjectPos: Locate an object.
- GetObjectRot: Check the rotation of an object.
- AttachObjectToPlayer: Attach an object to a player.
