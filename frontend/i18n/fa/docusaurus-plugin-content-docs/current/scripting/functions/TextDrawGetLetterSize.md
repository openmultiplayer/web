---
title: TextDrawGetLetterSize
sidebar_label: TextDrawGetLetterSize
description: عرض و ارتفاع حروف رو بدست میاره.
tags: ["textdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

عرض و ارتفاع حروف رو بدست می‌آره.

| نام           | توضیحات                                                       |
| ------------- | ----------------------------------------------------------------- |
| Text:textid   | ID textdraw ای که می‌خوای اندازه حروفش رو بدست بیاری.                     |
| &Float:width  | متغیر float ای که عرض توش ذخیره میشه، به صورت reference پاس داده میشه.  |
| &Float:height | متغیر float ای که ارتفاع توش ذخیره میشه، به صورت reference پاس داده میشه. |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0,"Example TextDraw");
    TextDrawLetterSize(gMyTextdraw, 3.2, 5.1);

    new Float:width, Float:height;
    TextDrawGetLetterSize(gMyTextdraw, width, height);
    // The `width` will be '3.2' and `height` will be '5.1'
    // `width` mishe '3.2' va `height` mishe '5.1'
    return 1;
}
```

## توابع مرتبط

- [TextDrawCreate](TextDrawCreate): یک textdraw بساز.
- [TextDrawDestroy](TextDrawDestroy): یک textdraw رو نابود کن.
- [TextDrawLetterSize](TextDrawLetterSize): عرض و ارتفاع حروف رو تنظیم کن.
- [TextDrawColor](TextDrawColor): رنگ متن توی textdraw رو تنظیم کن.
- [TextDrawBoxColor](TextDrawBoxColor): رنگ باکس توی textdraw رو تنظیم کن.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): رنگ پس‌زمینه textdraw رو تنظیم کن.
- [TextDrawAlignment](TextDrawAlignment): تراز textdraw رو تنظیم کن.
- [TextDrawFont](TextDrawFont): فونت textdraw رو تنظیم کن.
- [TextDrawTextSize](TextDrawTextSize): اندازه باکس textdraw رو تنظیم کن.
- [TextDrawSetOutline](TextDrawSetOutline): انتخاب کن که آیا متن outline داره یا نه.
- [TextDrawSetShadow](TextDrawSetShadow): سایه روی textdraw رو فعال/غیرفعال کن.
- [TextDrawSetProportional](TextDrawSetProportional): فاصله متن توی textdraw رو به نسبت متناسب تنظیم کن.
- [TextDrawUseBox](TextDrawUseBox): فعال/غیرفعال کن که آیا textdraw باکس داره یا نه.
- [TextDrawSetString](TextDrawSetString): متن توی textdraw موجود رو تنظیم کن.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): textdraw رو برای یک بازیکن خاص نشون بده.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): textdraw رو برای یک بازیکن خاص مخفی کن.
- [TextDrawShowForAll](TextDrawShowForAll): textdraw رو برای همه بازیکنا نشون بده.
- [TextDrawHideForAll](TextDrawHideForAll): textdraw رو برای همه بازیکنا مخفی کن.
