---
title: EnableTirePopping
description: With this function you can enable or disable tire popping.
tags: []
---

## คำอธิบาย

With this function you can enable or disable tire popping.

| Name | Description                             |
| ---- | --------------------------------------- |
| show | 1 to enable, 0 to disable tire popping. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnGameModeInit()
{
    // This will disable tire popping on your gamemode.
    EnableTirePopping(0);
    return 1;
}
```

## บันทึก

:::warning

This function was removed in SA-MP 0.3. Tire popping is enabled by default. If you want to disable tire popping, you'll have to manually script it using OnVehicleDamageStatusUpdate.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน
