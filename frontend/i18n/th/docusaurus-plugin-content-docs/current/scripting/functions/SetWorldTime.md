---
title: SetWorldTime
sidebar_label: SetWorldTime
description: Sets the world time (for all players) to a specific hour.
tags: []
---

## คำอธิบาย

Sets the world time (for all players) to a specific hour.

| Name | Description            |
| ---- | ---------------------- |
| hour | The hour to set (0-23) |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
// Set the time to 12 o'clock (noon)
SetWorldTime(12);
```

## บันทึก

:::tip

This function is only relevant for players that do not use a passing clock - see TogglePlayerClock.

:::

:::tip

To set the minutes and/or to set the time for individual players, see SetPlayerTime.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetPlayerTime: Set a player's time.
- SetWeather: Set the global weather.
- SetGravity: Set the global gravity.
