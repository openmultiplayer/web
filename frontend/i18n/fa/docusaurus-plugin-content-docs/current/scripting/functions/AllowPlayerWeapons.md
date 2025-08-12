---
title: AllowPlayerWeapons
sidebar_label: AllowPlayerWeapons
description: فعال/غیرفعال کردن اسلحه برای بازیکن.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

فعال/غیرفعال کردن اسلحه برای بازیکن.

| نام        | توضیحات                                       |
| ---------- | --------------------------------------------- |
| playerid   | شناسه بازیکن برای اجازه دادن به اسلحه         |
| bool:allow | true برای اجازه دادن و false برای منع کردن. |

## مقدار بازگشتی

این تابع همیشه true برمی‌گرداند.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    AllowPlayerWeapons(playerid, true);
    return 1;
}
```

## توابع مرتبط

- [ArePlayerWeaponsAllowed](ArePlayerWeaponsAllowed): آیا بازیکن می‌تواند از اسلحه استفاده کند؟