---
title: RemoveBuildingForPlayer
sidebar_label: RemoveBuildingForPlayer
description: حذف یک مدل استاندارد San Andreas برای یک بازیکن در یک محدوده مشخص
tags: ["player"]
---

## توضیحات

یک مدل استاندارد San Andreas رو برای یک بازیکن در یک محدوده مشخص حذف می‌کنه.

| نام           | توضیحات                                                                    |
| ------------- | -------------------------------------------------------------------------- |
| playerid      | آی‌دی بازیکنی که آبجکت‌ها براش حذف می‌شن.                                    |
| modelid       | مدلی که باید حذف بشه.                                                       |
| Float:centerX | مختصات X نقطه ای که آبجکت‌ها اطرافش حذف می‌شن.                              |
| Float:centerY | مختصات Y نقطه ای که آبجکت‌ها اطرافش حذف می‌شن.                              |
| Float:centerZ | مختصات Z نقطه ای که آبجکت‌ها اطرافش حذف می‌شن.                              |
| Float:radius  | شعاع اطراف نقطه مشخص شده برای حذف آبجکت‌ها با مدل مشخص شده.                  |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    // Vaghti ke player vasel mishe, objecthayi ba model 615 dar
    // range 200.0 az noghte 0.0, 0.0, 0.0 hazf mishan, ke markaze San Andreas hast.
    RemoveBuildingForPlayer(playerid, 615, 0.0, 0.0, 0.0, 200.0);
    return 1;
}

public OnPlayerConnect(playerid)
{
    // Vaghti ke player vasel mishe, tamame objecthaye map hazf mishan.
    RemoveBuildingForPlayer(playerid, -1, 0.0, 0.0, 0.0, 6000.0);
    return 1;
}
```

## نکات

:::tip

می‌تونی از **-1** برای modelid استفاده کنی تا تمام آبجکت‌ها در شعاع مشخص شده حذف بشن.

:::

:::warning

- به نظر می‌رسه حدود 1000 خط/آبجکت محدودیت وجود داره. هیچ راه حلی نیست.
- وقتی همون آبجکت رو برای یک بازیکن حذف می‌کنی، اون کرش می‌کنه. معمولاً، بازیکنا وقتی دوباره به سرور وصل می‌شن کرش می‌کنن چون سرور ساختمان‌ها رو در OnPlayerConnect حذف می‌کنه.

:::

## توابع مرتبط

- [GetPlayerBuildingsRemoved](GetPlayerBuildingsRemoved): دریافت تعداد ساختمان‌های حذف شده برای یک بازیکن.
- [DestroyObject](DestroyObject): حذف یک آبجکت.
- [DestroyPlayerObject](DestroyPlayerObject): حذف یک player object.