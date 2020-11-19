---
title: SetPlayerWeather
description: Set a player's weather.
tags: ["player"]
---

## คำอธิบาย

Set a player's weather.

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | The ID of the player whose weather to set. |
| weather  | The weather to set.                        |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/storm", true))
    {
        SetPlayerWeather(playerid, 8);
        return 1;
    }
    return 0;
}
```

## บันทึก

:::tip

If TogglePlayerClock is enabled, weather will slowly change over time, instead of changing instantly. There are only valid 21 weather IDs in the game (0 - 20), however the game does not have any form of range check.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetWeather: Set the global weather.
- SetGravity: Set the global gravity.
