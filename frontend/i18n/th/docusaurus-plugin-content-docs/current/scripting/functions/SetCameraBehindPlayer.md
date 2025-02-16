---
title: SetCameraBehindPlayer
sidebar_label: SetCameraBehindPlayer
description: Restore the camera to a place behind the player, after using a function like SetPlayerCameraPos.
tags: ["player"]
---

## คำอธิบาย

Restore the camera to a place behind the player, after using a function like SetPlayerCameraPos.

| Name     | Description                                    |
| -------- | ---------------------------------------------- |
| playerid | The player you want to restore the camera for. |

## ส่งคืน

1: The function was executed successfully.

0: The function failed to execute. This means the player specified does not exist.

## ตัวอย่าง

```c
SetCameraBehindPlayer(playerid);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetPlayerCameraPos: Set a player's camera position.
- SetPlayerCameraLookAt: Set where a player's camera should face.
