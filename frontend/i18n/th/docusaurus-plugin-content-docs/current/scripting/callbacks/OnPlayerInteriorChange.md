---
title: OnPlayerInteriorChange
sidebar_label: OnPlayerInteriorChange
description: Called when a player changes interior.
tags: ["player"]
---

## คำอธิบาย

Called when a player changes interior. Can be triggered by SetPlayerInterior or when a player enter/exits a building.

| Name          | Description                            |
| ------------- | -------------------------------------- |
| playerid      | The playerid who changed interior.     |
| newinteriorid | The interior the player is now in.     |
| oldinteriorid | The interior the player was in before. |

## ส่งคืน

มันถูกเรียกในเกมโหมดก่อนเสมอ

## ตัวอย่าง

```c
public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid)
{
    new string[42];
    format(string, sizeof(string), "You went from interior %d to interior %d!", oldinteriorid, newinteriorid);
    SendClientMessage(playerid, COLOR_ORANGE, string);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetPlayerInterior](../functions/SetPlayerInterior): Set a player's interior.
- [GetPlayerInterior](../functions/GetPlayerInterior): Get the current interior of a player.
- [LinkVehicleToInterior](../functions/LinkVehicleToInterior): Change the interior that a vehicle is seen in.
- [OnPlayerStateChange](OnPlayerStateChange): Called when a player changes state.
