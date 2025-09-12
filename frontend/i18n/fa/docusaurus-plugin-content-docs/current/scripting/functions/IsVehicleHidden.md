---
title: IsVehicleHidden
sidebar_label: IsVehicleHidden
description: چک می‌کنه که آیا ماشین مخفی هست یا نه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

:::warning

این تابع هنوز پیاده‌سازی نشده.

:::

## توضیحات

چک می‌کنه که آیا ماشین مخفی هست یا نه.

## پارامترها

| نام       | توضیحات                        |
|-----------|---------------------------------|
| vehicleid | ID ماشینی که باید چک بشه.       |

## مقادیر برگشتی

**true** - ماشین مخفی هست.

**false** - ماشین مخفی نیست.

## مثال‌ها

```c
if (IsVehicleHidden(vehicleid))
{
    // Vehicle is hidden
}
else
{
    // Vehicle is not hidden
}
```

## توابع مرتبط

- [HideVehicle](HideVehicle): مخفی کردن ماشین از بازی.
- [ShowVehicle](ShowVehicle): نمایش ماشین مخفی شده.