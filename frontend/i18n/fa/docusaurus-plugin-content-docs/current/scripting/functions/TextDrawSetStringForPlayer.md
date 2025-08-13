---
title: TextDrawSetStringForPlayer
sidebar_label: TextDrawSetStringForPlayer
description: متن یک textdraw رو برای یک بازیکن خاص تغییر می‌ده.
tags: ["textdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

متن یک textdraw رو برای یک بازیکن خاص تغییر می‌ده.

| نام              | توضیحات                               |
| ---------------- | ------------------------------------- |
| Text:textid      | ID TextDraw ای که باید تغییر کنه          |
| playerid         | ID بازیکن                      |
| const format[]   | string جدید برای TextDraw           |
| OPEN_MP_TAGS:... | تعداد نامحدود آرگومان از هر نوع tag |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(317.799987, 331.475006, "Hi, how are you?");
    TextDrawLetterSize(gMyTextdraw, 0.238997, 1.250000);
    TextDrawTextSize(gMyTextdraw, 505.000000, 202.000000);
    TextDrawAlignment(gMyTextdraw, TEXT_DRAW_ALIGN_CENTER);
    TextDrawColor(gMyTextdraw, 0xFFFFFFFF);
    TextDrawSetShadow(gMyTextdraw, 0);
    TextDrawSetOutline(gMyTextdraw, 1);
    TextDrawBackgroundColor(gMyTextdraw, 255);
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_1);
    TextDrawSetProportional(gMyTextdraw, true);
    return 1;
}

public OnPlayerConnect(playerid)
{
    new playerName[MAX_PLAYER_NAME];
    GetPlayerName(playerid, playerName, sizeof playerName);

    TextDrawShowForPlayer(playerid, gMyTextdraw);

    TextDrawSetStringForPlayer(gMyTextdraw, playerid, "Welcome %s!", playerName);
    return 1;
}

public OnPlayerRequestClass(playerid, classid)
{
    TextDrawSetStringForPlayer(gMyTextdraw, playerid, "You chose class %d", classid);
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
- [TextDrawSetString](TextDrawSetString): متن یک textdraw رو تغییر می‌ده.
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
