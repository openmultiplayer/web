---
title: RemoveVehicleComponent
sidebar_label: RemoveVehicleComponent
description: یه قطعه رو از وسیله نقلیه حذف می‌کنه.
tags: ["vehicle"]
---

## توضیحات

یه قطعه رو از وسیله نقلیه حذف می‌کنه.

| نام                                       | توضیحات                    |
|--------------------------------------------|--------------------------------|
| vehicleid                                  | ID وسیله نقلیه.             |
| [component](../resources/carcomponentid)   | ID قطعه برای حذف. |

## مقدار برگشتی

**true** - قطعه با موفقیت از وسیله نقلیه حذف شد.

**false** - قطعه حذف نشد چون وسیله نقلیه وجود نداره.

## مثال‌ها

```c
// Remove Nitro from player vehicle
new vehicleid = GetPlayerVehicleID(playerid);
RemoveVehicleComponent(vehicleid, 1010);
```

## توابع مرتبط

- [AddVehicleComponent](AddVehicleComponent): اضافه کردن قطعه به وسیله نقلیه.
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot): بررسی اینکه وسیله نقلیه چه قطعه‌هایی داره.
- [GetVehicleComponentType](GetVehicleComponentType): بررسی نوع قطعه از طریق ID.
- [VehicleCanHaveComponent](VehicleCanHaveComponent): آیا قطعه روی وسیله نقلیه مجاز هست؟

## کالبک‌های مرتبط

- [OnVehicleMod](../callbacks/OnVehicleMod): وقتی وسیله نقلیه تیون می‌شه صدا زده می‌شه.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): وقتی وسیله نقلیه وارد یا خارج تیون شاپ می‌شه صدا زده می‌شه.

## منابع مرتبط

- [Car Component IDs](../resources/carcomponentid)