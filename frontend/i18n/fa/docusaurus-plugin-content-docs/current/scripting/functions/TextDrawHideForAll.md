---
title: TextDrawHideForAll
sidebar_label: TextDrawHideForAll
description: یک textdraw رو برای همه بازیکنا مخفی کن.
tags: ["textdraw"]
---

## توضیحات

یک textdraw رو برای همه بازیکنا مخفی می‌کنه.

| نام         | توضیحات                                                                        |
| ----------- | ---------------------------------------------------------------------------------- |
| Text:textid | ID textdraw ای که می‌خوای مخفی کنی.<br />توسط [TextDrawCreate](TextDrawCreate) برگردونده میشه. |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(240.0, 580.0, "Example Text");
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/showtd", true))
    {
        TextDrawShowForAll(gMyTextdraw);
        return 1;
    }
    if (!strcmp(cmdtext, "/hidetd", true))
    {
        TextDrawHideForAll(gMyTextdraw);
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [TextDrawShowForPlayer](TextDrawShowForPlayer): textdraw رو برای یک بازیکن خاص نشون بده.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): textdraw رو برای یک بازیکن خاص مخفی کن.
- [TextDrawShowForAll](TextDrawShowForAll): textdraw رو برای همه بازیکنا نشون بده.
