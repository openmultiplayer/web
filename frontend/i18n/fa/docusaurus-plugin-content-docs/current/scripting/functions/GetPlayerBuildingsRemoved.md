---
title: GetPlayerBuildingsRemoved
sidebar_label: GetPlayerBuildingsRemoved
description: تعداد ساختمان‌های حذف شده برای یک بازیکن را دریافت می‌کند.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

تعداد ساختمان‌های حذف شده برای یک بازیکن را دریافت می‌کند.

| نام      | توضیحات           |
|----------|-------------------|
| playerid | شناسه بازیکن. |

## مقدار بازگشتی

تعداد ساختمان‌های حذف شده را برمی‌گرداند.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    RemoveBuildingForPlayer(playerid, 700, 1192.1016, -1738.0000, 13.0391, 0.25);
    RemoveBuildingForPlayer(playerid, 700, 1204.4844, -1724.8516, 13.0391, 0.25);
    RemoveBuildingForPlayer(playerid, 673, 1192.5625, -1723.8828, 12.5234, 0.25);

    printf("Removed buildings: %d", GetPlayerBuildingsRemoved(playerid)); // Removed buildings: 3
    return 1;
}
```

## تابع‌های مرتبط

- [RemoveBuildingForPlayer](RemoveBuildingForPlayer): یک مدل استاندارد San Andreas را برای یک بازیکن در محدوده مشخص حذف می‌کند.