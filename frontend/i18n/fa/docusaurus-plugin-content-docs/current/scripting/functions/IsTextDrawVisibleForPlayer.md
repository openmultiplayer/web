---
title: IsTextDrawVisibleForPlayer
sidebar_label: IsTextDrawVisibleForPlayer
description: چک می‌کنه که آیا یه textdraw برای بازیکن نمایش داده می‌شه یا نه.
tags: ["textdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا یه textdraw برای بازیکن نمایش داده می‌شه یا نه.

| نام         | توضیحات                          |
| ----------- | -------------------------------- |
| playerid    | ID بازیکنی که باید چک بشه.      |
| Text:textid | ID textdraw.                     |

## مقادیر برگشتی

**true** - Textdraw برای بازیکن نمایش داده می‌شه.

**false** - Textdraw برای بازیکن نمایش داده نمی‌شه.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(240.0, 580.0, "Example Text");
    return 1;
}

public OnPlayerConnect(playerid)
{
    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (IsTextDrawVisibleForPlayer(playerid, gMyTextdraw))
    {
        // gMyTextdraw is shown for the player
    }
    return 1;
}
```

## توابع مرتبط

- [TextDrawCreate](TextDrawCreate): ساخت یه textdraw.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): نمایش یه textdraw برای یه بازیکن خاص.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): مخفی کردن یه textdraw برای یه بازیکن خاص.