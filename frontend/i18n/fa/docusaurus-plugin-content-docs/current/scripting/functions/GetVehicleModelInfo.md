---
title: GetVehicleModelInfo
sidebar_label: GetVehicleModelInfo
description: اطلاعات مربوط به یه مدل وسیله نقلیه خاص مثل سایز یا موقعیت صندلی‌ها رو دریافت می‌کنه.
tags: ["vehicle"]
---

## توضیحات

اطلاعات مربوط به یه مدل وسیله نقلیه خاص مثل سایز یا موقعیت صندلی‌ها رو دریافت می‌کنه

| نام                        | توضیحات                                                                  |
| --------------------------- | ---------------------------------------------------------------------------- |
| vehiclemodel                | مدل وسیله نقلیه‌ای که می‌خوای اطلاعات‌ش رو بگیری.                                            |
| VEHICLE_MODEL_INFO:infotype | [نوع اطلاعاتی](../resources/vehicleinformationtypes) که می‌خوای دریافت کنی. |
| &Float:x                    | یه float برای ذخیره مقدار X.                                                |
| &Float:y                    | یه float برای ذخیره مقدار Y.                                                |
| &Float:z                    | یه float برای ذخیره مقدار Z.                                                |

## مقادیر برگشتی

اطلاعات وسیله نقلیه در متغیرهای مشخص شده ذخیره می‌شه.

## مثال‌ها

```c
new
	Float: x, Float: y, Float: z;
//Get the size of vehicle model 411 (Infernus)
GetVehicleModelInfo(411, VEHICLE_MODEL_INFO_SIZE, x, y, z);
//Prints "The infernus is 2.3m wide, 5.7m long and 1.3m high" into the console
printf("The infernus is %.1fm wide, %.1fm long and %.1fm high", X, Y, Z);
```

## توابع مرتبط

- [GetVehicleModel](GetVehicleModel): دریافت ID مدل یه وسیله نقلیه.

## منابع مرتبط

- [Vehicle Information Types](../resources/vehicleinformationtypes)