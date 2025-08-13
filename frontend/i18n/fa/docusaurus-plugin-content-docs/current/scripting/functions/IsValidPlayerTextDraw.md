---
title: IsValidPlayerTextDraw
sidebar_label: IsValidPlayerTextDraw
description: چک می‌کنه که آیا یه player-textdraw معتبره یا نه.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا یه player-textdraw معتبره یا نه.

## پارامترها

| نام               | توضیحات                                    |
| ----------------- | ------------------------------------------ |
| playerid          | ID بازیکن.                                 |
| PlayerText:textid | ID player-textdraw که باید چک بشه.        |

## مقادیر برگشتی

**true** برمی‌گردونه اگه player-textdraw معتبر باشه، وگرنه **false**.

## نحوه استفاده

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");

    if (IsValidPlayerTextDraw(playerid, welcomeText[playerid]))
    {
        // Player-Textdraw is valid
    }
    else
    {
        // Player-Textdraw is not valid
    }
}
```

## توابع مرتبط

- [TextDrawCreate](TextDrawCreate): ساخت یه textdraw.
- [TextDrawDestroy](TextDrawDestroy): نابود کردن یه textdraw.
- [TextDrawColor](TextDrawColor): تنظیم رنگ متن در یه textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): تنظیم رنگ جعبه در یه textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): تنظیم رنگ پس‌زمینه یه textdraw.
- [TextDrawAlignment](TextDrawAlignment): تنظیم تراز یه textdraw.
- [TextDrawFont](TextDrawFont): تنظیم فونت یه textdraw.
- [TextDrawLetterSize](TextDrawLetterSize): تنظیم اندازه حروف متن در یه textdraw.
- [TextDrawTextSize](TextDrawTextSize): تنظیم اندازه جعبه textdraw.
- [TextDrawSetOutline](TextDrawSetOutline): انتخاب اینکه آیا متن outline داره یا نه.
- [TextDrawSetShadow](TextDrawSetShadow): تغییر وضعیت سایه روی textdraw.
- [TextDrawSetProportional](TextDrawSetProportional): تنظیم فاصله متن در textdraw به نسبت متناسب.
- [TextDrawUseBox](TextDrawUseBox): تغییر وضعیت اینکه textdraw جعبه داره یا نه.
- [TextDrawSetString](TextDrawSetString): تنظیم متن در یه textdraw موجود.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): نمایش یه textdraw برای یه بازیکن خاص.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): مخفی کردن یه textdraw برای یه بازیکن خاص.
- [TextDrawShowForAll](TextDrawShowForAll): نمایش یه textdraw برای همه بازیکنا.
- [TextDrawHideForAll](TextDrawHideForAll): مخفی کردن یه textdraw برای همه بازیکنا.