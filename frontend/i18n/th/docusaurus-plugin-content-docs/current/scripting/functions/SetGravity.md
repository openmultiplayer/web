---
title: SetGravity
sidebar_label: SetGravity
description: Set the gravity for all players.
tags: []
---

## คำอธิบาย

Set the gravity for all players.

| Name          | Description                                                       |
| ------------- | ----------------------------------------------------------------- |
| Float:gravity | The value that the gravity should be set to (between -50 and 50). |

## ส่งคืน

This function always returns 1, even when it fails to execute if the gravity is out of the limits (lower than -50 or high than +50).

## ตัวอย่าง

```c
public OnGameModeInit()
{
    // Set moon-like gravity
    SetGravity(0.001);

    return 1;
}
```

## บันทึก

:::warning

Default gravity is 0.008.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetGravity: Get the currently set gravity.
- SetWeather: Set the global weather.
- SetWorldTime: Set the global server time.
