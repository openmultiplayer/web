---
title: TextDrawSetString
sidebar_label: TextDrawSetString
description: متن یک textdraw رو تغییر می‌ده.
tags: ["textdraw"]
---

## توضیحات

متن یک textdraw رو تغییر می‌ده.

| نام              | توضیحات                                |
| ---------------- | -------------------------------------- |
| Text:textid      | TextDraw ای که باید تغییر کنه                     |
| const format[]   | string جدید برای TextDraw            |
| OPEN_MP_TAGS:... | تعداد نامحدود آرگومان از هر نوع tag. |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(1.0, 5.6, "Hi, how are you?");
    return 1;
}

public OnPlayerConnect(playerid)
{
    new
        string[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, sizeof playerName);

    format(string, sizeof(string), "Welcome %s!", playerName);
    TextDrawSetString(gMyTextdraw, string);

    // PRO TIP: You don't need `format` in open.mp
    TextDrawSetString(gMyTextdraw, "Welcome %s!", playerName);

    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}
```

## نکات

:::warning

برای طول string های textdraw محدودیت وجود داره - برای اطلاعات بیشتر [اینجا](../resources/limits) رو ببین.

:::

## توابع مرتبط

- [TextDrawCreate](TextDrawCreate): یک textdraw بساز.
- [TextDrawDestroy](TextDrawDestroy): یک textdraw رو نابود کن.
- [TextDrawSetStringForPlayer](TextDrawSetStringForPlayer): متن یک textdraw رو برای یک بازیکن خاص تغییر می‌ده.
- [TextDrawColor](TextDrawColor): رنگ متن یک textdraw رو تنظیم کن.
- [TextDrawBoxColor](TextDrawBoxColor): رنگ جعبه یک textdraw رو تنظیم کن.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): رنگ پس‌زمینه یک textdraw رو تنظیم کن.
- [TextDrawAlignment](TextDrawAlignment): تراز یک textdraw رو تنظیم کن.
- [TextDrawFont](TextDrawFont): فونت یک textdraw رو تنظیم کن.
- [TextDrawLetterSize](TextDrawLetterSize): اندازه حروف متن یک textdraw رو تنظیم کن.
- [TextDrawTextSize](TextDrawTextSize): اندازه جعبه یک textdraw رو تنظیم کن.
- [TextDrawSetOutline](TextDrawSetOutline): اینکه متن outline داشته باشه یا نه رو انتخاب کن.
- [TextDrawSetShadow](TextDrawSetShadow): سایه روی یک textdraw رو فعال/غیرفعال کن.
- [TextDrawSetProportional](TextDrawSetProportional): فاصله متن یک textdraw رو به نسبت متناسب تنظیم کن.
- [TextDrawUseBox](TextDrawUseBox): اینکه textdraw جعبه داشته باشه یا نه رو تنظیم کن.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): یک textdraw رو برای یک بازیکن خاص نشون بده.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): یک textdraw رو برای یک بازیکن خاص مخفی کن.
- [TextDrawShowForAll](TextDrawShowForAll): یک textdraw رو برای همه بازیکنا نشون بده.
- [TextDrawHideForAll](TextDrawHideForAll): یک textdraw رو برای همه بازیکنا مخفی کن.
- [TextDrawGetString](TextDrawGetString): متن یک textdraw رو برمی‌گردونه.
