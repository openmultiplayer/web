---
title: PlayerSpectatePlayer
sidebar_label: PlayerSpectatePlayer
description: Makes a player spectate (watch) another player.
tags: ["player"]
---

## คำอธิบาย

Makes a player spectate (watch) another player.

| Name           | Description                                                                               |
| -------------- | ----------------------------------------------------------------------------------------- |
| playerid       | The ID of the player that will spectate.                                                  |
| targetplayerid | The ID of the player that should be spectated.                                            |
| mode           | The [mode](../resources/spectatemodes) to spectate with (optional; defaults to 'normal'). |

## ส่งคืน

1: The function was executed successfully.

0: The function failed to execute. One of the players specified does not exist.

## ตัวอย่าง

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    TogglePlayerSpectating(playerid, 1);
    PlayerSpectatePlayer(playerid, killerid);
    return 1;
}
```

## บันทึก

:::warning

Order is CRITICAL! Ensure that you use TogglePlayerSpectating before PlayerSpectatePlayer. playerid and targetplayerid's virtual world and interior must be the same for this function to work properly.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- PlayerSpectateVehicle: Spectate a vehicle.
- TogglePlayerSpectating: Start or stop spectating.
