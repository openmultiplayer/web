---
title: SetPlayerInterior
sidebar_label: SetPlayerInterior
description: تنظیم داخلی بازیکن.
tags: ["player"]
---

## توضیحات

تنظیم داخلی بازیکن. فهرست داخلی‌های شناخته شده فعلی و موقعیت‌های آنها در اینجا قابل یافتن است.

| نام        | توضیحات                                                                  |
| ---------- | ------------------------------------------------------------------------ |
| playerid   | شناسه بازیکنی که قرار است داخلی آن تنظیم شود.                             |
| interiorid | [شناسه داخلی](../resources/interiorids) برای قرار دادن بازیکن در آن. |

## مقدار بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا شکست خورد. این به معنای آن است که بازیکن متصل نیست.

## مثال‌ها

```c
// تنظیم بازیکن به داخلی پیش‌فرض (بیرون)
SetPlayerInterior(playerid, 0);
```

## توابع مرتبط

- [GetPlayerInterior](GetPlayerInterior): گرفتن داخلی فعلی یک بازیکن.
- [LinkVehicleToInterior](LinkVehicleToInterior): تغییر داخلی که یک وسیله نقلیه در آن دیده می‌شود.
- [OnPlayerInteriorChange](../callbacks/OnPlayerInteriorChange): هنگام تغییر داخلی بازیکن فراخوانی می‌شود.

## منابع مرتبط

- [شناسه‌های داخلی](../resources/interiorids)