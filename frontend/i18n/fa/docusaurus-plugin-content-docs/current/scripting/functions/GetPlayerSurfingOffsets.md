---
title: GetPlayerSurfingOffsets
sidebar_label: GetPlayerSurfingOffsets
description: دریافت offsetهای surfing بازیکن.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت offsetهای surfing بازیکن.

| نام           | توضیحات                                                                      |
|----------------|----------------------------------------------------------------------------------|
| playerid       | ID بازیکن.                                                            |
| &Float:offsetX | متغیر float برای ذخیره مختصات offset X، به صورت reference پاس داده می‌شود. |
| &Float:offsetY | متغیر float برای ذخیره مختصات offset Y، به صورت reference پاس داده می‌شود. |
| &Float:offsetZ | متغیر float برای ذخیره مختصات offset Z، به صورت reference پاس داده می‌شود. |

## مقادیر برگشتی

این تابع هیچ مقدار خاصی برنمی‌گرداند.

## مثال‌ها

```c
new surfingVehicleId = GetPlayerSurfingVehicleID(playerid);
if (surfingVehicleId != INVALID_VEHICLE_ID)
{
    new 
        Float:offsetX,
        Float:offsetY,
        Float:offsetZ;

    GetPlayerSurfingOffsets(playerid, offsetX, offsetY, offsetZ);
    
    SendClientMessage(playerid, -1, "offsetX = %.2f offsetY = %.2f offsetZ = %.2f", offsetX, offsetY, offsetZ);
}
```

## توابع مرتبط

- [GetPlayerSurfingObjectID](GetPlayerSurfingObjectID): دریافت ID objectی که بازیکن روی آن surfing می‌کند.
- [GetPlayerSurfingVehicleID](GetPlayerSurfingVehicleID): دریافت ID وسیله نقلیه‌ای که بازیکن روی آن surfing می‌کند (چسبیده به سقف).