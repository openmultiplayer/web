---
title: SetPlayerGravity
sidebar_label: SetPlayerGravity
description: گرانش پلیر رو تنظیم می‌کنه.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

گرانش پلیر رو تنظیم می‌کنه.

| نام           | توضیحات                                           |
| ------------- | ------------------------------------------------- |
| playerid      | آیدی پلیری که قراره گرانشش تنظیم بشه              |
| Float:gravity | مقداری که گرانش قراره بهش تنظیم بشه (بین -50 تا 50) |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع نتونست اجرا بشه. پلیر مشخص شده وجود نداره.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    // gravitye mesle mahe taghir bede
    SetPlayerGravity(playerid, 0.001);

    return 1;
}
```

## نکات

:::warning

گرانش پیش‌فرض 0.008 هست.

:::

## توابع مرتبط

- [GetPlayerGravity](GetPlayerGravity): گرانش پلیر رو دریافت می‌کنه.
- [SetGravity](SetGravity): گرانش رو برای همه پلیر ها تنظیم می‌کنه.
- [GetGravity](GetGravity): گرانش کلی فعلی رو دریافت می‌کنه.