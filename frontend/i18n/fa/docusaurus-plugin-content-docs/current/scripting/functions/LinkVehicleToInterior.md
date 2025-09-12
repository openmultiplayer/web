---
title: LinkVehicleToInterior
sidebar_label: LinkVehicleToInterior
description: وسیله نقلیه را به interior لینک کن.
tags: ["vehicle"]
---

## توضیحات

وسیله نقلیه را به interior لینک می‌کند. وسایل نقلیه فقط توسط بازیکنانی که در همان interior هستند قابل مشاهده است (SetPlayerInterior).

| نام        | توضیحات                                                        |
| ---------- | ------------------------------------------------------------- |
| vehicleid  | ID وسیله نقلیه‌ای که باید به interior لینک شود.                 |
| interiorid | [Interior ID](../resources/interiorids) که باید به آن لینک شود. |

## مقدار بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - اجرای تابع ناموفق بود. این به معنای آن است که وسیله نقلیه وجود ندارد.

## مثال‌ها

```c
public OnGameModeInit()
{
    new vehicleId = AddStaticVehicle(559, 2543.7505, -21.8345, 27.1899, 52.6054, -1, -1);
    LinkVehicleToInterior(vehicleId, 6);
}
```

## توابع مرتبط

- [GetVehicleInterior](GetVehicleInterior): interior id وسیله نقلیه را بگیر.
- [SetVehicleVirtualWorld](SetVehicleVirtualWorld): دنیای مجازی وسیله نقلیه را تنظیم کن.
- [SetPlayerInterior](SetPlayerInterior): interior بازیکن را تنظیم کن.

## منابع مرتبط

- [Interior IDs](../resources/interiorids)