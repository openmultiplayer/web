---
title: SetWeather
description: Set the world weather for all players.
tags: []
---

## คำอธิบาย

Set the world weather for all players.

| Name      | Description         |
| --------- | ------------------- |
| weatherid | The weather to set. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
if (!strcmp(cmdtext, "/sandstorm", true))
{
    SetWeather(19);
    return 1;
}
```

## บันทึก

:::tip

If TogglePlayerClock is enabled, weather will slowly change over time, instead of changing instantly. There are only valid 21 weather IDs in the game (0 - 20), however the game does not have any form of range check.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetPlayerWeather: Set a player's weather.
- SetGravity: Set the global gravity.
