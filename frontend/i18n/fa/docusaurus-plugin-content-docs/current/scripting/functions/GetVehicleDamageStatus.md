---
title: GetVehicleDamageStatus
sidebar_label: GetVehicleDamageStatus
description: وضعیت آسیب‌های یه وسیله نقلیه رو دریافت می‌کنه.
tags: ["vehicle"]
---

:::tip

برای بعضی توابع مفید برای کار با مقادیر آسیب وسیله نقلیه، [اینجا](../resources/damagestatus) رو ببین.

:::

## توضیحات

وضعیت آسیب‌های یه وسیله نقلیه رو دریافت می‌کنه.

| نام                        | توضیحات                                                        |
| --------------------------- | ------------------------------------------------------------------ |
| vehicleid                   | ID وسیله نقلیه‌ای که می‌خوای وضعیت آسیب‌هاش رو دریافت کنی.               |
| VEHICLE_PANEL_STATUS:panels | متغیری برای ذخیره داده‌های آسیب panel که به صورت reference پاس داده می‌شه. |
| VEHICLE_DOOR_STATUS:doors   | متغیری برای ذخیره داده‌های آسیب door که به صورت reference پاس داده می‌شه.  |
| VEHICLE_LIGHT_STATUS:lights | متغیری برای ذخیره داده‌های آسیب light که به صورت reference پاس داده می‌شه. |
| VEHICLE_TYRE_STATUS:tyres   | متغیری برای ذخیره داده‌های آسیب tire که به صورت reference پاس داده می‌شه.  |

## مقادیر برگشتی

**1** - تابع با موفقیت اجرا شد.

**0** - تابع موفق به اجرا نشد. یعنی وسیله نقلیه مشخص شده وجود نداره.

## مثال‌ها

```c
new 
	VEHICLE_PANEL_STATUS:panels,
	VEHICLE_DOOR_STATUS:doors,
	VEHICLE_LIGHT_STATUS:lights,
	VEHICLE_TYRE_STATUS:tyres;

GetVehicleDamageStatus(vehicleid, panels, doors, lights, tyres);
printf("Vehicle Status: [Panels]: %d - [Doors]: %d - [Lights]: %d - [Tyres]: %d", panels, doors, lights, tyres);
```

## توابع مرتبط

- [UpdateVehicleDamageStatus](UpdateVehicleDamageStatus): آپدیت آسیب وسیله نقلیه.
- [SetVehicleHealth](SetVehicleHealth): تنظیم سلامت یه وسیله نقلیه.
- [GetVehicleHealth](GetVehicleHealth): بررسی سلامت یه وسیله نقلیه.
- [RepairVehicle](RepairVehicle): تعمیر کامل یه وسیله نقلیه.

## Callback های مرتبط

- [OnVehicleDamageStatusUpdate](../callbacks/OnVehicleDamageStatusUpdate): وقتی وضعیت آسیب یه وسیله نقلیه تغییر می‌کنه فراخوانی می‌شه.

## منابع مرتبط

- [Damage Status](../resources/damagestatus)
- [Vehicle Panel Status](../resources/vehicle-panel-status)
- [Vehicle Door Status](../resources/vehicle-door-status)
- [Vehicle Light Status](../resources/vehicle-light-status)
- [Vehicle Tire Status](../resources/vehicle-tire-status)