---
title: TextDrawHideForPlayer
sidebar_label: TextDrawHideForPlayer
description: یک textdraw رو برای یک بازیکن خاص مخفی می‌کنه.
tags: ["player", "textdraw"]
---

## توضیحات

یک textdraw رو برای یک بازیکن خاص مخفی می‌کنه.

| نام         | توضیحات                                                 |
| ----------- | ------------------------------------------------------- |
| playerid    | ID بازیکنی که textdraw باید براش مخفی بشه |
| Text:textid | ID textdraw ای که باید مخفی بشه                              |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(123.0, 123.0, "Example");
    return 1;
}

public OnGameModeExit()
{
    TextDrawDestroy(gMyTextdraw);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}

public OnPlayerDeath(playerid, reason)
{
    TextDrawHideForPlayer(playerid, gMyTextdraw);
    return 1;
}
```

## توابع مرتبط

- [TextDrawHideForAll](TextDrawHideForAll): یک textdraw رو برای همه بازیکنا مخفی کن.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): یک textdraw رو برای یک بازیکن خاص نشون بده.
- [TextDrawShowForAll](TextDrawShowForAll): یک textdraw رو برای همه بازیکنا نشون بده.
- [IsTextDrawVisibleForPlayer](IsTextDrawVisibleForPlayer): چک می‌کنه که آیا یک textdraw برای بازیکن نشون داده شده یا نه.
