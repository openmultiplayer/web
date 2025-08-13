---
title: TextDrawGetShadow
sidebar_label: TextDrawGetShadow
description: اندازه سایه متن یک textdraw رو برمی‌گردونه.
tags: ["textdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

اندازه سایه متن یک textdraw رو برمی‌گردونه.

| نام         | توضیحات                                            |
| ----------- | ------------------------------------------------- |
| Text:textid | ID textdraw ای که می‌خوای اندازه سایه‌اش رو بگیری. |

## مقدار برگشتی

اندازه سایه textdraw رو برمی‌گردونه.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");
    TextDrawSetShadow(gMyTextdraw, 1);

    new shadow = TextDrawGetShadow(gMyTextdraw);
    // shadow = 1
    return 1;
}
```

## توابع مرتبط

- [TextDrawCreate](TextDrawCreate): یک textdraw بساز.
- [TextDrawDestroy](TextDrawDestroy): یک textdraw رو نابود کن.
- [TextDrawSetShadow](TextDrawSetShadow): اندازه سایه متن یک textdraw رو تنظیم می‌کنه.
- [TextDrawColor](TextDrawColor): رنگ متن یک textdraw رو تنظیم کن.
- [TextDrawBoxColor](TextDrawBoxColor): رنگ جعبه یک textdraw رو تنظیم کن.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): رنگ پس‌زمینه یک textdraw رو تنظیم کن.
- [TextDrawAlignment](TextDrawAlignment): تراز یک textdraw رو تنظیم کن.
- [TextDrawFont](TextDrawFont): فونت یک textdraw رو تنظیم کن.
- [TextDrawLetterSize](TextDrawLetterSize): اندازه حروف متن یک textdraw رو تنظیم کن.
- [TextDrawTextSize](TextDrawTextSize): اندازه جعبه یک textdraw رو تنظیم کن.
- [TextDrawSetOutline](TextDrawSetOutline): اینکه متن outline داشته باشه یا نه رو انتخاب کن.
- [TextDrawSetProportional](TextDrawSetProportional): فاصله متن یک textdraw رو به نسبت متناسب تنظیم کن.
- [TextDrawUseBox](TextDrawUseBox): اینکه textdraw جعبه داشته باشه یا نه رو تنظیم کن.
- [TextDrawSetString](TextDrawSetString): متن یک textdraw موجود رو تنظیم کن.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): یک textdraw رو برای یک بازیکن خاص نشون بده.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): یک textdraw رو برای یک بازیکن خاص مخفی کن.
- [TextDrawShowForAll](TextDrawShowForAll): یک textdraw رو برای همه بازیکنا نشون بده.
- [TextDrawHideForAll](TextDrawHideForAll): یک textdraw رو برای همه بازیکنا مخفی کن.
