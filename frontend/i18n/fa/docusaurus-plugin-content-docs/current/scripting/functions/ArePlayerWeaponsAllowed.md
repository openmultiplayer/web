---
title: ArePlayerWeaponsAllowed
sidebar_label: ArePlayerWeaponsAllowed
description: آیا بازیکن می‌تواند از اسلحه استفاده کند؟
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

آیا بازیکن می‌تواند از اسلحه استفاده کند؟

| نام      | توضیحات                       |
| -------- | ----------------------------- |
| playerid | شناسه بازیکن برای بررسی.      |

## مقدار بازگشتی

**true** - بازیکن مجاز است.

**false** - بازیکن مجاز نیست.

## مثال‌ها

```c
public OnPlayerSpawn(playerid)
{
    if (ArePlayerWeaponsAllowed(playerid))
    {
        // کاری انجام دهید
    }

    return 1;
}
```

## توابع مرتبط

- [AllowPlayerWeapons](AllowPlayerWeapons): فعال/غیرفعال کردن اسلحه برای بازیکن.