---
title: SetPlayerVelocity
sidebar_label: SetPlayerVelocity
description: Set a player's velocity on the X, Y and Z axes.
tags: ["player"]
---

## คำอธิบาย

Set a player's velocity on the X, Y and Z axes.

| Name     | Description                         |
| -------- | ----------------------------------- |
| playerid | The player to apply the speed to.   |
| Float:X  | The velocity (speed) on the X axis. |
| Float:Y  | The velocity (speed) on the Y axis. |
| Float:Z  | The velocity (speed) on the Z axis. |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. This means the player is not connected.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/jump", cmdtext))
    {
    SetPlayerVelocity(playerid, 0.0, 0.0, 0.2); // Forces the player to jump (Z velocity + 0.2)
    return 1;
    }
    return 0;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetPlayerVelocity: Get a player's velocity.
- SetVehicleVelocity: Set a vehicle's velocity.
- GetVehicleVelocity: Get a vehicle's velocity.
