---
title: ShowObjectForPlayer
sidebar_label: ShowObjectForPlayer
description: یه object رو برای یه پلیر نشون می‌ده.
tags: ["player", "object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

یه object رو که با تابع [HideObjectForPlayer](HideObjectForPlayer) مخفی شده، برای یه پلیر نشون می‌ده.

## پارامترها

| نام      | توضیحات                              |
|----------|------------------------------------------|
| playerid | ID پلیر.                    |
| objectid | ID object ای که باید برای پلیر نشون داده بشه. |

## مقدار برگشتی

`true` - تابع با موفقیت اجرا شد.

`false` - تابع در اجرا ناکام بود. playerid یا objectid مشخص شده وجود نداره.

## مثال‌ها

```c
new gObject;

public OnGameModeInit()
{
    gObject = CreateObject(1431, 921.12201, -1206.78613, 16.52670,   0.00000, 0.00000, 90.00000);
    return 1;
}

public OnPlayerConnect(playerid)
{
    HideObjectForPlayer(playerid, gObject);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    ShowObjectForPlayer(playerid, gObject);
    return 1;
}
```

## توابع مرتبط

- [HideObjectForPlayer](HideObjectForPlayer): یه object رو برای یه پلیر مخفی می‌کنه.
- [IsObjectHiddenForPlayer](IsObjectHiddenForPlayer): بررسی می‌کنه که آیا object برای یه پلیر مخفی هست یا نه.
- [CreateObject](CreateObject): یه object می‌سازه.