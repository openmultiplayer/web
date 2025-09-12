---
title: IsObjectHiddenForPlayer
sidebar_label: IsObjectHiddenForPlayer
description: چک می‌کنه که آیا یه آبجکت برای بازیکن مخفی هست یا نه.
tags: ["player", "object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا یه آبجکت برای بازیکن مخفی هست یا نه.

## پارامترها

| نام      | توضیحات                         |
|----------|--------------------------------|
| playerid | ID بازیکن.                       |
| objectid | ID آبجکتی که باید چک بشه.       |

## مقادیر برگشتی

`true` - آبجکت برای بازیکن مخفی هست.

`false` - آبجکت برای بازیکن مخفی نیست.

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
    if (IsObjectHiddenForPlayer(playerid, gObject))
    {
        printf("Object %d is hidden for player %d", gObject, playerid);
    }
    return 1;
}
```

## نکات

:::tip

می‌تونی آبجکت‌ها رو برای یه بازیکن خاص با تابع [HideObjectForPlayer](HideObjectForPlayer) مخفی کنی.

:::

## توابع مرتبط

- [HideObjectForPlayer](HideObjectForPlayer): مخفی کردن یه آبجکت برای بازیکن.
- [ShowObjectForPlayer](ShowObjectForPlayer): نمایش یه آبجکت برای بازیکن.
- [CreateObject](CreateObject): ساخت یه آبجکت.