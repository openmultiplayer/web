---
title: GetPlayerPoolSize
description: Gets the highest playerid currently in use on the server.
tags: ["player"]
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Gets the highest playerid currently in use on the server.

| Name | Description |
| ---- | ----------- |


## ตัวอย่าง

```c
FreezeAll()
{
    // note that we assign the return value to a new variable (j) to avoid calling the function with each iteration
    for(new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
    {
        TogglePlayerControllable(i, 0);
    }
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetVehiclePoolSize: Gets the highest vehicleid currently in use on the server.
- GetMaxPlayers: Gets the maximum number of players that can join the server.
