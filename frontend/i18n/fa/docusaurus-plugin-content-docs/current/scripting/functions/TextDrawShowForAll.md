---
title: TextDrawShowForAll
sidebar_label: TextDrawShowForAll
description: یک textdraw رو برای همه بازیکنا نشون بده.
tags: ["textdraw"]
---

## توضیحات

یک textdraw رو برای همه بازیکنا نشون می‌ده.

| نام         | توضیحات                                                                        |
| ----------- | ---------------------------------------------------------------------------------- |
| Text:textid | ID textdraw ای که می‌خوای نشون بدی.<br />توسط [TextDrawCreate](TextDrawCreate) برگردونده میشه. |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. یعنی textdraw مشخص شده وجود نداره.

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
    return 0;
}
```

## توابع مرتبط

- [TextDrawShowForPlayer](TextDrawShowForPlayer): textdraw رو برای یک بازیکن خاص نشون بده.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): textdraw رو برای یک بازیکن خاص مخفی کن.
- [TextDrawHideForAll](TextDrawHideForAll): textdraw رو برای همه بازیکنا مخفی کن.
