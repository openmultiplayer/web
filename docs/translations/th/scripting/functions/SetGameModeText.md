---
title: SetGameModeText
description: Set the name of the game mode, which appears in the server browser.
tags: []
---

## คำอธิบาย

Set the name of the game mode, which appears in the server browser.

| Name     | Description                   |
| -------- | ----------------------------- |
| string[] | The gamemode name to display. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnGameModeInit()
{
    SetGameModeText("Team Deathmatch");
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน
