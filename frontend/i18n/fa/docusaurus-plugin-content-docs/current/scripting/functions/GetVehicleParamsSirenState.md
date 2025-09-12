---
title: GetVehicleParamsSirenState
sidebar_label: GetVehicleParamsSirenState
description: وضعیت آژیر یه وسیله نقلیه رو برمی‌گردونه (روشن/خاموش).
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

وضعیت آژیر یه وسیله نقلیه رو برمی‌گردونه (روشن/خاموش).

| نام      | توضیحات                                      |
| --------- | ------------------------------------------------ |
| vehicleid | ID وسیله نقلیه‌ای که می‌خوای وضعیت آژیرش رو بگیری. |

## مقادیر برگشتی

**-1:** آژیر وسیله نقلیه هنوز تنظیم نشده (خاموش)

**0:** آژیر وسیله نقلیه خاموشه

**1:** آژیر وسیله نقلیه روشنه

## مثال‌ها

```c
new
    siren = GetVehicleParamsSirenState(vehicleid);

if (siren == 1)
{
    // Siren is on, do something
}
else if (siren == 0)
{
    // Siren is off, do something
}
else
{
    // Vehicle does not have a siren
}
```

## نکات

:::warning

چون وضعیت آژیر -1 یا 0 یعنی 'خاموش'، نمی‌تونی از یه شرط boolean برای بررسی روشن بودن آژیر استفاده کنی. اگه 'if (sirenstate)' کنی، برای هر چیزی غیر از 0 (یعنی -1 یا 1) true خواهد بود. باید صراحتاً چک کنی که وضعیت آژیر برابر با 1 هست.

:::

## توابع مرتبط

- [SetVehicleParamsSirenState](SetVehicleParamsSirenState): روشن یا خاموش کردن آژیر یه وسیله نقلیه.