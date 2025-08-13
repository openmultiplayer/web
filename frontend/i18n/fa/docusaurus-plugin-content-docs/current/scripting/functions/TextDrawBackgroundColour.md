---
title: TextDrawBackgroundColour
sidebar_label: TextDrawBackgroundColour
description: رنگ پس‌زمینه textdraw رو تنظیم کن (outline/shadow - نه رنگ باکس.
tags: ["textdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

رنگ پس‌زمینه textdraw رو تنظیم می‌کنه (outline/shadow - نه رنگ باکس. برای رنگ باکس، [TextDrawBoxColour](TextDrawBoxColour) رو ببین).

| نام              | توضیحات                                            |
| ---------------- | ------------------------------------------------------ |
| Text:textid      | ID textdraw ای که می‌خوای رنگ پس‌زمینه‌ش رو تنظیم کنی |
| backgroundColour | رنگی که می‌خوای textdraw روش تنظیم بشه.         |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 425.0, "This is an example textdraw");
    TextDrawUseBox(gMyTextdraw, true);
    TextDrawBackgroundColour(gMyTextdraw, 0xFFFFFFFF); // Set the background colour of gMyTextdraw to white
    // rang-e pas-zamine-ye gMyTextdraw ro be sefid tanzim kon
    return 1;
}
```

## نکات

:::tip

اگه از [TextDrawSetOutline](TextDrawSetOutline) با اندازه > 0 استفاده کنی، رنگ outline با رنگی که توی TextDrawBackgroundColour استفاده کردی یکی میشه. تغییر مقدار colour به نظر میرسه رنگی که توی TextDrawColour استفاده میشه رو تغییر میده.

:::

:::tip

اگه می‌خوای رنگ پس‌زمینه textdraw ای که قبلاً نشون داده شده رو تغییر بدی، نیازی نیست دوباره بسازیش. فقط بعد از تغییر textdraw از [TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll) استفاده کن و تغییر قابل مشاهده میشه.

:::

## توابع مرتبط

- [TextDrawCreate](TextDrawCreate): یک textdraw بساز.
- [TextDrawDestroy](TextDrawDestroy): یک textdraw رو نابود کن.
- [TextDrawColour](TextDrawColour): رنگ متن توی textdraw رو تنظیم کن.
- [TextDrawBoxColour](TextDrawBoxColour): رنگ باکس توی textdraw رو تنظیم کن.
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
