---
title: TogglePlayerSpectating
description: Toggle whether a player is in spectator mode or not.
tags: ["player"]
---

## คำอธิบาย

Toggle whether a player is in spectator mode or not. While in spectator mode a player can spectate (watch) other players and vehicles. After using this function, either PlayerSpectatePlayer or PlayerSpectateVehicle needs to be used.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The ID of the player who should spectate |
| toggle   | 1 to enable spectating and 0 to disable  |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The player does not exist.

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

:::tip

When spectator mode is disabled, OnPlayerSpawn will automatically be called, if you wish to restore player to state before spectating, you will have to handle that in OnPlayerSpawn. Note also, that player can also go to class selection before if they used F4 during spectate, a player also CAN die in spectate mode due to various glitches.

:::

:::tip

When a player is in spectate mode their HUD is hidden, making it useful for setting a player's camera without the HUD. Also, objects near the player's camera will be streamed in, making this useful for interpolating cameras.

:::

:::warning

If the player is not loaded in before setting the spectate status to false, the connection can be closed unexpectedly.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [PlayerSpectatePlayer](../functions/PlayerSpectatePlayer.md): Spectate a player.
- [PlayerSpectateVehicle](../functions/PlayerSpectateVehicle.md): Spectate a vehicle.
