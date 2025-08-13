---
title: TextDrawBoxColour
sidebar_label: TextDrawBoxColour
description: رنگ باکس متن رو تنظیم کن (فقط وقتی استفاده میشه که پارامتر 'enableBox' توی TextDrawUseBox برابر 'true' باشه).
tags: ["textdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

رنگ باکس متن رو تنظیم می‌کنه (فقط وقتی استفاده میشه که پارامتر 'enableBox' توی TextDrawUseBox برابر 'true' باشه).

| نام         | توضیحات                                                                                                                                                                     |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Text:textid | TextDraw ای که می‌خوای تغییر بدی                                                                                                                                                          |
| boxColour   | رنگ. شفافیت با شدت آلفای رنگ تنظیم میشه (مثلاً رنگ 0x000000FF یک باکس مشکی کاملاً مات داره، در حالی که 0x000000AA یک باکس مشکی نیمه شفاف داره). |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(123.0, 123.0, "Example");
    TextDrawUseBox(gMyTextdraw, true);
    TextDrawBoxColour(gMyTextdraw, 0xFFFFFFFF);
    return 1;
}
```

## نکات

:::tip

اگه می‌خوای رنگ باکس textdraw ای که قبلاً نشون داده شده رو تغییر بدی، نیازی نیست دوباره بسازیش. فقط بعد از تغییر textdraw از [TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll) استفاده کن و تغییر قابل مشاهده میشه.

:::

## توابع مرتبط

- [TextDrawCreate](TextDrawCreate): یک textdraw بساز.
- [TextDrawDestroy](TextDrawDestroy): یک textdraw رو نابود کن.
- [TextDrawColour](TextDrawColour): رنگ متن توی textdraw رو تنظیم کن.
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
