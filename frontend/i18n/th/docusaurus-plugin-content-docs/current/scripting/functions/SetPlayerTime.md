---
title: SetPlayerTime
sidebar_label: SetPlayerTime
description: Sets the game time for a player.
tags: ["player"]
---

## คำอธิบาย

Sets the game time for a player. If a player's clock is enabled (TogglePlayerClock) the time displayed by it will update automatically.

| Name     | Description                                   |
| -------- | --------------------------------------------- |
| playerid | The ID of the player to set the game time of. |
| hour     | Hour to set (0-23).                           |
| minute   | Minutes to set (0-59).                        |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The player specified does not exist.

## ตัวอย่าง

```c
SetPlayerTime(playerid, 12, 0); // Noon
SetPlayerTime(playerid, 0, 0); // Midnight
```

## บันทึก

:::tip

Using this function under OnPlayerConnect doesn't work.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetWorldTime: Set the global server time.
- GetPlayerTime: Get the time of a player.
- TogglePlayerClock: Toggle the clock in the top-right corner.
