---
title: OnPlayerStateChange
sidebar_label: OnPlayerStateChange
description: This callback is called when a player changes state.
tags: ["player"]
---

## คำอธิบาย

This callback is called when a player changes state. For example, when a player changes from being the driver of a vehicle to being on-foot.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The ID of the player that changed state. |
| newstate | The player's new state.                  |
| oldstate | The player's previous state.             |

Refer to [Player States](../../scripting/resources/playerstates.md) for a list of all available player states.

## ส่งคืน

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (oldstate == PLAYER_STATE_ONFOOT && newstate == PLAYER_STATE_DRIVER) // Player entered a vehicle as a driver
    {
        new vehicleid = GetPlayerVehicleID(playerid);
        AddVehicleComponent(vehicleid, 1010); // Add NOS to the vehicle
    }
    return 1;
}
```

## บันทึก

:::tip

NPC สามารถเรียก Callback นี้ได้

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GetPlayerState](../../scripting/functions/GetPlayerState.md): Get a player's current state.
- [GetPlayerSpecialAction](../../scripting/functions/GetPlayerSpecialAction.md): Get a player's current special action.
- [SetPlayerSpecialAction](../../scripting/functions/SetPlayerSpecialAction.md): Set a player's special action.
