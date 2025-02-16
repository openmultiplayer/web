---
title: EnablePlayerCameraTarget
sidebar_label: EnablePlayerCameraTarget
description: Toggle camera targeting functions for a player.
tags: ["player"]
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Toggle camera targeting functions for a player. Disabled by default to save bandwidth.

| Name     | Description                                                    |
| -------- | -------------------------------------------------------------- |
| playerid | The ID of the player to toggle camera targeting functions for. |
| enable   | 1 to enable camera targeting functions and 0 to disable them.  |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The player is not connected.

## ตัวอย่าง

```c
public OnPlayerConnect(playerid)
{
     EnablePlayerCameraTarget(playerid, 1);
     return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GetPlayerCameraTargetVehicle](../functions/GetPlayerCameraTargetVehicle): Get the ID of the vehicle a player is looking at.
- [GetPlayerCameraTargetPlayer](../functions/GetPlayerCameraTargetPlayer): Get the ID of the player a player is looking at.
- [GetPlayerCameraFrontVector](../functions/GetPlayerCameraFrontVector): Get the player's camera front vector
