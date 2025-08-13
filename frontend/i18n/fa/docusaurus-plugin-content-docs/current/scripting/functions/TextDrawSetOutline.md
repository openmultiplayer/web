---
title: TextDrawSetOutline
sidebar_label: TextDrawSetOutline
description: ضخامت outline متن یک textdraw رو تنظیم می‌کنه.
tags: ["textdraw"]
---

## توضیحات

ضخامت outline متن یک textdraw رو تنظیم می‌کنه. می‌تونی از TextDrawBackgroundColor برای تغییر رنگ استفاده کنی.

| نام         | توضیحات                                                    |
| ----------- | ---------------------------------------------------------- |
| Text:textid | ID text draw ای که می‌خوای ضخامت outline اش رو تنظیم کنی.       |
| outlineSize | ضخامت outline، به صورت عدد صحیح. 0 برای بدون outline. |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");
    TextDrawSetOutline(gMyTextdraw, 1);
    return 1;
}
```

## نکات

:::tip

اگر می‌خوای outline یک textdraw که قبلاً نشون داده شده رو تغییر بدی، نیازی نیست دوباره بسازیش. بعد از تغییر textdraw، فقط از [TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll) استفاده کن و تغییر قابل مشاهده خواهد بود.

:::

## توابع مرتبط

- [TextDrawCreate](TextDrawCreate): یک textdraw بساز.
- [TextDrawDestroy](TextDrawDestroy): یک textdraw رو نابود کن.
- [TextDrawGetOutline](TextDrawGetOutline): ضخامت outline متن یک textdraw رو برمی‌گردونه.
- [TextDrawColor](TextDrawColor): رنگ متن یک textdraw رو تنظیم کن.
- [TextDrawBoxColor](TextDrawBoxColor): رنگ جعبه یک textdraw رو تنظیم کن.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): رنگ پس‌زمینه یک textdraw رو تنظیم کن.
- [TextDrawAlignment](TextDrawAlignment): تراز یک textdraw رو تنظیم کن.
- [TextDrawFont](TextDrawFont): فونت یک textdraw رو تنظیم کن.
- [TextDrawLetterSize](TextDrawLetterSize): اندازه حروف متن یک textdraw رو تنظیم کن.
- [TextDrawTextSize](TextDrawTextSize): اندازه جعبه یک textdraw رو تنظیم کن.
- [TextDrawSetShadow](TextDrawSetShadow): سایه روی یک textdraw رو فعال/غیرفعال کن.
- [TextDrawSetProportional](TextDrawSetProportional): فاصله متن یک textdraw رو به نسبت متناسب تنظیم کن.
- [TextDrawUseBox](TextDrawUseBox): اینکه textdraw جعبه داشته باشه یا نه رو تنظیم کن.
- [TextDrawSetString](TextDrawSetString): متن یک textdraw موجود رو تنظیم کن.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): یک textdraw رو برای یک بازیکن خاص نشون بده.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): یک textdraw رو برای یک بازیکن خاص مخفی کن.
- [TextDrawShowForAll](TextDrawShowForAll): یک textdraw رو برای همه بازیکنا نشون بده.
- [TextDrawHideForAll](TextDrawHideForAll): یک textdraw رو برای همه بازیکنا مخفی کن.
