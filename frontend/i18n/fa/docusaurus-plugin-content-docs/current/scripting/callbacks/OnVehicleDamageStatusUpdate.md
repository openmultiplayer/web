---
title: OnVehicleDamageStatusUpdate
sidebar_label: OnVehicleDamageStatusUpdate
description: این کالبک زمانی فراخوانده می‌شود که عنصر وسیله نقلیه مثل درها، لاستیک‌ها، پانل‌ها، یا چراغ‌ها وضعیت آسیب خود را تغییر دهند.
tags: ["vehicle"]
---

:::tip

برای توابع مفیدی که با مقادیر آسیب وسیله نقلیه کار می‌کنند، [اینجا](../resources/damagestatus) را ببینید.

:::

## توضیحات

این کالبک زمانی فراخوانده می‌شود که عنصر وسیله نقلیه مثل درها، لاستیک‌ها، پانل‌ها، یا چراغ‌ها وضعیت آسیب خود را تغییر دهند.

| نام       | توضیحات                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------ |
| vehicleid | شناسه وسیله نقلیه‌ای که وضعیت آسیب آن تغییر کرده است.                                               |
| playerid  | شناسه بازیکنی که تغییر در وضعیت آسیب را همگام‌سازی کرده است (کسی که خودرو آسیب دیده یا تعمیر شده). |

## مقادیر برگشتی

**1** - از دریافت این کالبک توسط سایر filterscript ها جلوگیری می‌کند.

**0** - نشان می‌دهد که این کالبک به filterscript بعدی منتقل خواهد شد.

همیشه اول در filterscript ها فراخوانده می‌شود.

## مثال‌ها

```c
public OnVehicleDamageStatusUpdate(vehicleid, playerid)
{
    // Get the damage status of all the components
    new
        VEHICLE_PANEL_STATUS:panels,
        VEHICLE_DOOR_STATUS:doors,
        VEHICLE_LIGHT_STATUS:lights,
        VEHICLE_TYRE_STATUS:tyres;

    GetVehicleDamageStatus(vehicleid, panels, doors, lights, tyres);

    // Set the tyres to 0, which means none are popped
    tyres = VEHICLE_TYRE_STATUS_NONE;

    // Update the vehicle's damage status with unpopped tyres
    UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tyres);
    return 1;
}
```

## نکته‌ها

:::tip

این شامل تغییرات سلامتی وسیله نقلیه نمی‌شود.

:::

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus): دریافت وضعیت آسیب وسیله نقلیه برای هر قسمت به طور جداگانه.
- [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus): به‌روزرسانی آسیب وسیله نقلیه.