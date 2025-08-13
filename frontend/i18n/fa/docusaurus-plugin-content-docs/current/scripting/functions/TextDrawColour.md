---
title: TextDrawColour
sidebar_label: TextDrawColour
description: رنگ متن یک textdraw رو تنظیم کن.
tags: ["textdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

رنگ متن یک textdraw رو تنظیم می‌کنه

| نام         | توضیحات                                     |
| ----------- | ----------------------------------------------- |
| Text:textid | ID textdraw ای که می‌خوای رنگش رو تغییر بدی. |
| textColour  | رنگی که می‌خوای textdraw روش تنظیم بشه.              |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(123.0, 123.0, "Example");
    TextDrawColour(gMyTextdraw, 0x000000FF);
    return 1;
}
```

## نکات

:::tip

اگه TextDraw قبلاً نشون داده شده، باید دوباره نشون داده بشه ([TextDrawShowForAll](TextDrawShowForAll)/[TextDrawShowForPlayer](TextDrawShowForPlayer)) تا تغییرات این تابع اعمال بشن.

:::

## توابع مرتبط

- [TextDrawCreate](TextDrawCreate): یک textdraw بساز.
- [TextDrawDestroy](TextDrawDestroy): یک textdraw رو نابود کن.
- [TextDrawBoxColour](TextDrawBoxColour): رنگ باکس توی textdraw رو تنظیم کن.
- [TextDrawBackgroundColour](TextDrawBackgroundColour): رنگ پس‌زمینه textdraw رو تنظیم کن.
- [TextDrawAlignment](TextDrawAlignment): تراز textdraw رو تنظیم کن.
- [TextDrawFont](TextDrawFont): فونت textdraw رو تنظیم کن.
- [TextDrawLetterSize](TextDrawLetterSize): اندازه حروف متن توی textdraw رو تنظیم کن.
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
