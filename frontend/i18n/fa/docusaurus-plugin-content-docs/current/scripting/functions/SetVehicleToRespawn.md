---
title: SetVehicleToRespawn
sidebar_label: SetVehicleToRespawn
description: یه ماشین رو به موقعیتی که ساخته شده برمی‌گردونه.
tags: ["vehicle"]
---

## توضیحات

یه ماشین رو به موقعیتی که ساخته شده برمی‌گردونه.

| نام       | توضیحات                      |
| --------- | -------------------------------- |
| vehicleid | ID ماشینی که می‌خوای respawn کنی |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود. ماشین وجود نداره.

## مثال‌ها

```c
// hame vehicleha ro respawn mikone
for (new i = 1; i < MAX_VEHICLES; i++)
{
    SetVehicleToRespawn(i);
}
```

## توابع مرتبط

- [CreateVehicle](CreateVehicle): یه ماشین می‌سازه.
- [DestroyVehicle](DestroyVehicle): یه ماشین رو نابود می‌کنه.