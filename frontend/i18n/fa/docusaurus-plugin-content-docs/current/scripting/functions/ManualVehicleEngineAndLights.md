---
title: ManualVehicleEngineAndLights
sidebar_label: ManualVehicleEngineAndLights
description: از این تابع قبل از اتصال هر بازیکنی (OnGameModeInit) استفاده کن تا به همه کلاینت‌ها بگویی که اسکریپت موتور و چراغ‌های وسایل نقلیه را کنترل می‌کند.
tags: ["vehicle"]
---

## توضیحات

از این تابع قبل از اتصال هر بازیکنی (OnGameModeInit) استفاده کن تا به همه کلاینت‌ها بگویی که اسکریپت موتور و چراغ‌های وسایل نقلیه را کنترل می‌کند. این امر از روشن/خاموش شدن خودکار موتور هنگام ورود/خروج بازیکنان از وسایل نقلیه و روشن شدن خودکار چراغ‌های جلو در تاریکی جلوگیری می‌کند.

## مثال‌ها

```c
public OnGameModeInit()
{
    ManualVehicleEngineAndLights();
    return 1;
}
```

## نکات

:::warning

امکان برگرداندن این تابع پس از استفاده از آن وجود ندارد. باید یا از آن استفاده کنی یا نکنی.

:::

:::tip

همچنین می‌توانی این تابع را از طریق [config.json](../../server/config.json) فعال یا غیرفعال کنی

```json
"use_manual_engine_and_lights": true,
```

:::

## توابع مرتبط

- [SetVehicleParamsEx](SetVehicleParamsEx): پارامترهای وسیله نقلیه را برای همه بازیکنان تنظیم کن.
- [GetVehicleParamsEx](GetVehicleParamsEx): پارامترهای وسیله نقلیه را بگیر.
- [SetVehicleParamsForPlayer](SetVehicleParamsForPlayer): پارامترهای وسیله نقلیه را برای یک بازیکن تنظیم کن.