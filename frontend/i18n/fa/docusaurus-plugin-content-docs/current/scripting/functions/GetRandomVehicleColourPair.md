---
title: GetRandomVehicleColourPair
sidebar_label: GetRandomVehicleColourPair
description: index های رنگ تصادفی که برای مدل وسیله نقلیه داده شده معتبرن رو دریافت می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

index های رنگ تصادفی که برای مدل وسیله نقلیه داده شده معتبرن رو دریافت می‌کنه.

## پارامترها

| نام         | توضیحات                                                          |
|--------------|----------------------------------------------------------------------|
| modelid      | ID [مدل وسیله نقلیه](../resources/vehicleid).               |
| &colour1     | متغیری برای ذخیره مقدار colour1 که به صورت reference پاس داده می‌شه. |
| &colour2     | متغیری برای ذخیره مقدار colour2 که به صورت reference پاس داده می‌شه. |
| &colour3 = 0 | متغیری برای ذخیره مقدار colour3 که به صورت reference پاس داده می‌شه. |
| &colour4 = 0 | متغیری برای ذخیره مقدار colour4 که به صورت reference پاس داده می‌شه. |

## مثال‌ها

```c
new
	colour1,
	colour2;

GetRandomVehicleColourPair(560, colour1, colour2);
```

## توابع مرتبط

- [VehicleColourIndexToColour](VehicleColourIndexToColour): تبدیل index رنگ ماشین به رنگ HEX (RGBA).
- [GetVehicleColours](GetVehicleColours): دریافت رنگ‌های وسیله نقلیه.