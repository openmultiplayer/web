---
title: GetVehiclePoolSize
description: Gets the highest vehicleid currently in use on the server.
tags: ["vehicle"]
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Gets the highest vehicleid currently in use on the server.

| Name | Description |
| ---- | ----------- |


## ตัวอย่าง

```c
RepairAllVehicles()
{
    for(new i = 1, j = GetVehiclePoolSize(); i <= j; i++) // vehicleids start at 1
    {
        RepairVehicle(i);
    }
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetPlayerPoolSize: Gets the highest playerid connected to the server.
