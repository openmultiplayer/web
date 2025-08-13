---
title: SetVehicleZAngle
sidebar_label: SetVehicleZAngle
description: چرخش Z (yaw) یه ماشین رو تنظیم می‌کنه.
tags: ["vehicle"]
---

## توضیحات

چرخش Z (yaw) یه ماشین رو تنظیم می‌کنه.

| نام         | توضیحات                                   |
| ----------- | --------------------------------------------- |
| vehicleid   | ID ماشینی که می‌خوای چرخشش رو تنظیم کنی. |
| Float:angle | زاویه Z که باید تنظیم بشه.                           |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود. ماشین مشخص شده وجود نداره.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/flip", true) == 0)
    {
        new
            vehicleid,
            Float:angle;
        
        vehicleid = GetPlayerVehicleID(playerid);
        GetVehicleZAngle(vehicleid, angle);
        SetVehicleZAngle(vehicleid, angle);
        
        SendClientMessage(playerid, 0xFFFFFFFF, "Your vehicle has been flipped.");
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

- چرخش X و Y (pitch و roll) ماشین وقتی این تابع استفاده می‌شه reset می‌شن.
- چرخش X و Y قابل تنظیم نیستن.
- این تابع روی ماشین‌های خالی کار نمی‌کنه (اعتقاد بر این هست که محدودیت GTA هست).

:::

## توابع مرتبط

- [GetVehicleZAngle](GetVehicleZAngle): زاویه فعلی یه ماشین رو بررسی می‌کنه.
- [SetVehiclePos](SetVehiclePos): موقعیت یه ماشین رو تنظیم می‌کنه.