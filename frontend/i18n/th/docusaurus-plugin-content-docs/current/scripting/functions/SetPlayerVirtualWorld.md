---
title: SetPlayerVirtualWorld
sidebar_label: SetPlayerVirtualWorld
description: Set the virtual world of a player.
tags: ["player"]
---

## คำอธิบาย

Set the virtual world of a player. They can only see other players or vehicles that are in that same world.

| Name     | Description                                                |
| -------- | ---------------------------------------------------------- |
| playerid | The ID of the player you want to set the virtual world of. |
| worldid  | The virtual world ID to put the player in.                 |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. This means the player is not connected.

## ตัวอย่าง

```c
if (strcmp(cmdtext, "/world3", true) == 0)
{
    SetPlayerVirtualWorld(playerid, 3);
    return 1;
}
```

## บันทึก

:::tip

The default virtual world is 0.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetPlayerVirtualWorld: Check what virtual world a player is in.
- SetVehicleVirtualWorld: Set the virtual world of a vehicle.
