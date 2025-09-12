---
title: SetVehiclePos
sidebar_label: SetVehiclePos
description: موقعیت یه ماشین رو تنظیم می‌کنه.
tags: ["vehicle"]
---

## توضیحات

موقعیت یه ماشین رو تنظیم می‌کنه

| نام       | توضیحات                                  |
| --------- | -------------------------------------------- |
| vehicleid | ID ماشینی که می‌خوای موقعیت جدیدش رو تنظیم کنی.   |
| Float:x   | مختصات X برای قرار دادن ماشین. |
| Float:y   | مختصات Y برای قرار دادن ماشین. |
| Float:z   | مختصات Z برای قرار دادن ماشین. |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود. ماشین مشخص شده وجود نداره.

## مثال‌ها

```c
// mashin player ro dar mokhtasat 0.0, 0.0, 3.0 ghrar bede (markaz SA)
new vehicleid = GetPlayerVehicleID(playerid);
SetVehiclePos(vehicleid, 0.0, 0.0, 3.0);
```

## نکات

:::warning

باگ شناخته شده:

- یه ماشین خالی بعد از teleport شدن به هوا سقوط نمی‌کنه!

:::

## توابع مرتبط

- [SetPlayerPos](SetPlayerPos): موقعیت یه پلیر رو تنظیم می‌کنه.
- [GetVehiclePos](GetVehiclePos): موقعیت یه ماشین رو دریافت می‌کنه.
- [SetVehicleZAngle](SetVehicleZAngle): جهت یه ماشین رو تنظیم می‌کنه.