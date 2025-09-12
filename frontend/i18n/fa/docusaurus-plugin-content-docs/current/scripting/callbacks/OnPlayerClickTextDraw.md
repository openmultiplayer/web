---
title: OnPlayerClickTextDraw
sidebar_label: OnPlayerClickTextDraw
description: این کالبک زمانی فراخوانده می‌شود که بازیکن روی یک textdraw کلیک کند یا حالت انتخاب را با کلید Escape لغو کند.
tags: ["player", "textdraw"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که بازیکن روی یک textdraw کلیک کند یا حالت انتخاب را با کلید Escape لغو کند.

| نام           | توضیحات                                                                   |
| -------------- | ----------------------------------------------------------------------------- |
| playerid       | شناسه بازیکنی که روی textdraw کلیک کرده.                            |
| Text:clickedid | شناسه textdraw کلیک شده. INVALID_TEXT_DRAW اگر انتخاب لغو شده باشد. |

## مقادیر برگشتی

همیشه ابتدا در فیلتراسکریپت‌ها فراخوانده می‌شود، بنابراین برگرداندن 1 در آنجا باعث مسدود شدن پردازش آن توسط اسکریپت‌های دیگر می‌شود.

## مثال‌ها

```c
new Text:gTextDraw;

public OnGameModeInit()
{
    gTextDraw = TextDrawCreate(10.000000, 141.000000, "MyTextDraw");
    TextDrawTextSize(gTextDraw, 60.000000, 20.000000);
    TextDrawAlignment(gTextDraw, TEXT_DRAW_ALIGN_LEFT);
    TextDrawBackgroundColor(gTextDraw, 0x000000FF);
    TextDrawFont(gTextDraw, TEXT_DRAW_FONT_1);
    TextDrawLetterSize(gTextDraw, 0.250000, 1.000000);
    TextDrawColor(gTextDraw, -1);
    TextDrawSetProportional(gTextDraw, true);
    TextDrawSetShadow(gTextDraw, 1);
    TextDrawSetSelectable(gTextDraw, true);
    return 1;
}

public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
    if (newkeys == KEY_SUBMISSION)
    {
        TextDrawShowForPlayer(playerid, gTextDraw);
        SelectTextDraw(playerid, 0xFF4040AA);
    }
    return 1;
}

public OnPlayerClickTextDraw(playerid, Text:clickedid)
{
    if (clickedid == gTextDraw)
    {
        SendClientMessage(playerid, 0xFFFFFFAA, "You clicked on a textdraw.");
        CancelSelectTextDraw(playerid);
        return 1;
    }
    return 0;
}
```

## نکته‌ها

:::warning

- ناحیه قابل کلیک توسط [TextDrawTextSize](../functions/TextDrawTextSize) تعریف می‌شود.
- پارامترهای `x` و `y` ارسال شده به آن تابع نباید صفر یا منفی باشند.
- از [CancelSelectTextDraw](../functions/CancelSelectTextDraw) بدون شرط در داخل این کالبک استفاده نکنید. این منجر به **حلقه بی‌نهایت** می‌شود.

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک در ارتباط هستند.

- [OnPlayerClickPlayerTextDraw](OnPlayerClickPlayerTextDraw): این کالبک زمانی فراخوانده می‌شود که بازیکن روی player-textdraw کلیک کند.
- [OnPlayerClickPlayer](OnPlayerClickPlayer): این کالبک زمانی فراخوانده می‌شود که بازیکن روی بازیکن دیگری کلیک کند.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک در ارتباط هستند.

- [SelectTextDraw](../functions/SelectTextDraw): فعال کردن ماوس تا بازیکن بتواند textdraw انتخاب کند.
- [CancelSelectTextDraw](../functions/CancelSelectTextDraw): لغو انتخاب textdraw با ماوس.