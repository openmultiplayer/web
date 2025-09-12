---
title: IsValidTextDraw
sidebar_label: IsValidTextDraw
description: چک می‌کنه که آیا یه textdraw معتبره یا نه.
tags: ["textdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا یه textdraw معتبره یا نه.

## پارامترها

| نام         | توضیحات                          |
| ----------- | -------------------------------- |
| Text:textid | ID textdraw که باید چک بشه.     |

## مقادیر برگشتی

**true** برمی‌گردونه اگه textdraw معتبر باشه، وگرنه **false**.

## نحوه استفاده

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");
    
    if (IsValidTextDraw(gMyTextdraw))
    {
        // Textdraw is valid
    }
    else
    {
        // Textdraw is not valid
    }
    return 1;
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