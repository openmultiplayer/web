---
title: EnableZoneNames
sidebar_label: EnableZoneNames
description: This function allows to turn on zone / area names such as the "Vinewood" or "Doherty" text at the bottom-right of the screen as they enter the area.
tags: []
---

## คำอธิบาย

This function allows to turn on zone / area names such as the "Vinewood" or "Doherty" text at the bottom-right of the screen as they enter the area. This is a gamemode option and should be set in the callback OnGameModeInit.

| Name   | Description                                                                               |
| ------ | ----------------------------------------------------------------------------------------- |
| enable | A toggle option for whether or not you'd like zone names on or off. 0 is off and 1 is on. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnGameModeInit()
{
    EnableZoneNames(1);
    return 1;
}
```

## บันทึก

:::warning

This function was removed in SA-MP 0.3. This was due to crashes it caused.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน
