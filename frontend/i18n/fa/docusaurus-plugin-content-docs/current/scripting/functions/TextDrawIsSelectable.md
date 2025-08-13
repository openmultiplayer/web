---
title: TextDrawIsSelectable
sidebar_label: TextDrawIsSelectable
description: چک می‌کنه که آیا یک textdraw قابل انتخاب هست یا نه.
tags: ["textdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا یک textdraw قابل انتخاب هست یا نه.

## پارامترها

| نام         | توضیحات                      |
| ----------- | ---------------------------- |
| Text:textid | ID textdraw ای که باید چک بشه. |

## مقادیر برگشتی

اگر textdraw قابل انتخاب باشه **true** برمی‌گردونه، وگرنه **false**.

## نحوه استفاده

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");
    TextDrawTextSize(gMyTextdraw, 30.0, 10.0);
    TextDrawSetSelectable(gMyTextdraw, true);

    if (TextDrawIsSelectable(gMyTextdraw))
    {
        // Textdraw is selectable
    }
    else
    {
        // Textdraw is not selectable
    }
    return 1;
}
```

## توابع مرتبط

- [TextDrawCreate](TextDrawCreate): یک textdraw بساز.
- [TextDrawDestroy](TextDrawDestroy): یک textdraw رو نابود کن.
- [TextDrawSetSelectable](TextDrawSetSelectable): تنظیم می‌کنه که آیا یک textdraw قابل انتخاب (کلیک) باشه یا نه.
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
- [TextDrawSetString](TextDrawSetString): متن یک textdraw موجود رو تنظیم کن.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): یک textdraw رو برای یک بازیکن خاص نشون بده.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): یک textdraw رو برای یک بازیکن خاص مخفی کن.
- [TextDrawShowForAll](TextDrawShowForAll): یک textdraw رو برای همه بازیکنا نشون بده.
- [TextDrawHideForAll](TextDrawHideForAll): یک textdraw رو برای همه بازیکنا مخفی کن.
