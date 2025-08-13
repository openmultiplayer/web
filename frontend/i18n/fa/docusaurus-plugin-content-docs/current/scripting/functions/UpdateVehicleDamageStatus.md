---
title: UpdateVehicleDamageStatus
sidebar_label: UpdateVehicleDamageStatus
description: وضعیت‌های مختلف آسیب بصری یک وسیله نقلیه رو تنظیم کن، مثل لاستیک‌های پنچر، چراغ‌های شکسته و پنل‌های آسیب دیده.
tags: ["vehicle"]
---

:::tip

برای توابع مفیدی که با مقادیر آسیب وسیله نقلیه کار می‌کنن، [اینجا](../resources/damagestatus) رو ببین.

:::

## توضیحات

وضعیت‌های مختلف آسیب بصری یک وسیله نقلیه رو تنظیم می‌کنه، مثل لاستیک‌های پنچر، چراغ‌های شکسته و پنل‌های آسیب دیده.

| نام                         | توضیحات                                       |
| --------------------------- | ------------------------------------------------- |
| vehicleid                   | ID وسیله نقلیه‌ای که می‌خوای آسیبش رو تنظیم کنی.       |
| VEHICLE_PANEL_STATUS:panels | مجموعه‌ای از bit ها که شامل وضعیت آسیب پنل هست. |
| VEHICLE_DOOR_STATUS:doors   | مجموعه‌ای از bit ها که شامل وضعیت آسیب درب هست.  |
| VEHICLE_LIGHT_STATUS:lights | مجموعه‌ای از bit ها که شامل وضعیت آسیب چراغ هست. |
| VEHICLE_TIRE_STATUS:tires   | مجموعه‌ای از bit ها که شامل وضعیت آسیب لاستیک هست.  |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new 
	VEHICLE_PANEL_STATUS:panels,
	VEHICLE_DOOR_STATUS:doors,
	VEHICLE_LIGHT_STATUS:lights,
	VEHICLE_TIRE_STATUS:tires;

GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);

tires = VEHICLE_TIRE_STATUS:15; // Setting tires to 15 will pop them all
// tanha tire ha ro 15 set kardan hame shuno panchar mikone

// Or do it like this:
// ya injoori:
tires = (VEHICLE_TIRE_STATUS_FRONT_LEFT_POPPED | VEHICLE_TIRE_STATUS_FRONT_RIGHT_POPPED | VEHICLE_TIRE_STATUS_REAR_LEFT_POPPED | VEHICLE_TIRE_STATUS_REAR_RIGHT_POPPED);

UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
```

## توابع مرتبط

- [SetVehicleHealth](SetVehicleHealth): سلامت یک وسیله نقلیه رو تنظیم کن.
- [GetVehicleHealth](GetVehicleHealth): سلامت یک وسیله نقلیه رو چک کن.
- [RepairVehicle](RepairVehicle): یک وسیله نقلیه رو کاملاً تعمیر کن.
- [GetVehicleDamageStatus](GetVehicleDamageStatus): وضعیت آسیب وسیله نقلیه رو برای هر قسمت به طور جداگانه بدست بیار.

## Callback های مرتبط

- [OnVehicleDamageStatusUpdate](../callbacks/OnVehicleDamageStatusUpdate): وقتی وضعیت آسیب وسیله نقلیه تغییر می‌کنه فراخوانی میشه.

## منابع مرتبط

- [Damage Status](../resources/damagestatus)
- [Vehicle Panel Status](../resources/vehicle-panel-status)
- [Vehicle Door Status](../resources/vehicle-door-status)
- [Vehicle Light Status](../resources/vehicle-light-status)
- [Vehicle Tire Status](../resources/vehicle-tire-status)
