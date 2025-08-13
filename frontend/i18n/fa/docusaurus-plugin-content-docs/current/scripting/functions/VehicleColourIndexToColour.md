---
title: VehicleColourIndexToColour
sidebar_label: VehicleColourIndexToColour
description: ایندکس رنگ ماشین رو به رنگ HEX (RGBA) تبدیل کن.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

ایندکس رنگ ماشین رو به رنگ HEX (RGBA) تبدیل می‌کنه.

## پارامترها

| نام          | توضیحات                                    |
|--------------|------------------------------------------------|
| index        | [رنگ وسیله نقلیه](../resources/vehiclecolorid). |
| alpha = 0xFF | کانال آلفا.                                 |

## مثال‌ها

```c
new colour = VehicleColourIndexToColour(3, 0xFF);
```

## توابع مرتبط

- [GetRandomVehicleColourPair](GetRandomVehicleColourPair): ایندکس‌های رنگ تصادفی که برای مدل وسیله نقلیه داده شده معتبر هستن رو بدست بیار.
- [GetVehicleColours](GetVehicleColours): رنگ‌های وسیله نقلیه رو بدست میاره.
