---
title: GetPlayerVelocity
sidebar_label: GetPlayerVelocity
description: Get the velocity (speed) of a player on the X, Y and Z axes.
tags: ["player"]
---

## คำอธิบาย

Get the velocity (speed) of a player on the X, Y and Z axes.

| Name     | Description                                                                         |
| -------- | ----------------------------------------------------------------------------------- |
| playerid | The player to get the speed from.                                                   |
| &Float:x | A float variable in which to store the velocity on the X axis, passed by reference. |
| &Float:y | A float variable in which to store the velocity on the Y axis, passed by reference. |
| &Float:z | A float variable in which to store the velocity on the Z axis, passed by reference. |

## ส่งคืน

The function itself doesn't return a specific value. The X, Y and Z velocities are stored in the specified variables.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/velocity", cmdtext))
    {
        new Float:Velocity[3], string[80];
    GetPlayerVelocity(playerid, Velocity[0], Velocity[1], Velocity[2]);
        format(string, sizeof(string), "You are going at a velocity of X: %f, Y: %f, Z: %f", Velocity[0], Velocity[1], Velocity[2]);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
    }
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetPlayerVelocity: Set a player's velocity.
- SetVehicleVelocity: Set a vehicle's velocity.
- GetVehicleVelocity: Get a vehicle's velocity.
