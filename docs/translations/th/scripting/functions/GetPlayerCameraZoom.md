---
title: GetPlayerCameraZoom
description: Retrieves the game camera zoom level for a given player.
tags: ["player"]
---

## คำอธิบาย

Retrieves the game camera zoom level for a given player.

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| playerid | The ID of the player to get the camera zoom level of. |

## ส่งคืน

The player's camera zoom level (camera, sniper etc.), a float.

## ตัวอย่าง

```c
new szString[144];
format(szString, sizeof(szString), "Your camera zoom level: %f", GetPlayerCameraZoom(playerid));
SendClientMessage(playerid, -1, szString);
```

## บันทึก

:::tip

This retrieves the zoom level of the GAME camera, not the camera WEAPON.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GetPlayerCameraAspectRatio](../functions/GetPlayerCameraAspectRation): Get the aspect ratio of a player's camera.
- [GetPlayerCameraPos](../functions/GetPlayerCameraPos): Find out where the player's camera is.
- [GetPlayerCameraFrontVector](../functions/GetPlayerCameraFrontVector): Get the player's camera front vector
