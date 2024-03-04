---
title: GetVehicleVelocity
description: Get the velocity of a vehicle on the X, Y and Z axes.
tags: ["vehicle"]
---

## คำอธิบาย

Get the velocity of a vehicle on the X, Y and Z axes.

| Name      | Description                                                                          |
| --------- | ------------------------------------------------------------------------------------ |
| vehicleid | The ID of the vehicle to get the velocity of.                                        |
| &Float:x  | A float variable in to which to store the vehicle's X velocity, passed by reference. |
| &Float:y  | A float variable in to which to store the vehicle's Y velocity, passed by reference. |
| &Float:z  | A float variable in to which to store the vehicle's Z velocity, passed by reference. |

## ส่งคืน

1: The function was executed successfully.

0: The function failed to execute. This means the vehicle specified does not exist.

The vehicle's velocity is stored in the specified variables.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/GetMyCarVelocity", cmdtext) && IsPlayerInAnyVehicle(playerid))
    {
        new Float:Velocity[3], output[80];
        GetVehicleVelocity(GetPlayerVehicleID(playerid), Velocity[0], Velocity[1], Velocity[2]);
        format(output, sizeof(output), "You are going at a velocity of X%f, Y%f, Z%f", Velocity[0], Velocity[1], Velocity[2]);
        SendClientMessage(playerid, 0xFFFFFFFF, output);
        return 1;
    }
    return 0;
}
```

## บันทึก

:::tip

This function can be used to retrieve a vehicle's speed (km/h, m/s or mph). For more info look here.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetPlayerVelocity: Get a player's velocity.
- SetVehicleVelocity: Set a vehicle's velocity.
- SetPlayerVelocity: Set a player's velocity.
