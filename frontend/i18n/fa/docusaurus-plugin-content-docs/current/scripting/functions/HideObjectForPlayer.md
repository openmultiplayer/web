---
title: HideObjectForPlayer
sidebar_label: HideObjectForPlayer
description: یه آبجکت رو برای بازیکن مخفی می‌کنه.
tags: ["player", "object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

یه آبجکت رو برای بازیکن مخفی می‌کنه.

## پارامترها

| نام      | توضیحات                                  |
|----------|------------------------------------------|
| playerid | ID بازیکن.                                |
| objectid | ID آبجکتی که باید برای بازیکن مخفی بشه.   |

## مقادیر برگشتی

`true` - تابع با موفقیت اجرا شد.

`false` - تابع اجرا نشد. playerid یا objectid مشخص شده وجود نداره.

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
```

## توابع مرتبط

- [ShowObjectForPlayer](ShowObjectForPlayer): نمایش یه آبجکت برای بازیکن.
- [IsObjectHiddenForPlayer](IsObjectHiddenForPlayer): چک می‌کنه که آیا یه آبجکت برای بازیکن مخفی هست یا نه.
- [CreateObject](CreateObject): ساخت یه آبجکت.