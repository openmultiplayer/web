---
title: TextDrawBackgroundColor
sidebar_label: TextDrawBackgroundColor
description: رنگ پس‌زمینه textdraw رو تنظیم کن (outline/shadow - نه رنگ باکس.
tags: ["textdraw"]
---

## توضیحات

رنگ پس‌زمینه textdraw رو تنظیم می‌کنه (outline/shadow - نه رنگ باکس. برای رنگ باکس، [TextDrawBoxColor](TextDrawBoxColor) رو ببین).

| نام              | توضیحات                                           |
| ---------------- | ----------------------------------------------------- |
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
    TextDrawBackgroundColor(gMyTextdraw, 0xFFFFFFFF); // Set the background color of MyTextdraw to white
    // rang-e pas-zamine-ye MyTextdraw ro be sefid tanzim kon
    return 1;
}
```

## نکات

:::tip

- اگه از [TextDrawSetOutline](TextDrawSetOutline) با اندازه > 0 استفاده کنی، رنگ outline با رنگی که توی TextDrawBackgroundColor استفاده کردی یکی میشه.
- تغییر مقدار color به نظر میرسه رنگی که توی [TextDrawColor](TextDrawColor) استفاده میشه رو تغییر میده.

:::

:::tip

اگه می‌خوای رنگ پس‌زمینه textdraw ای که قبلاً نشون داده شده رو تغییر بدی، نیازی نیست دوباره بسازیش. فقط بعد از تغییر textdraw از [TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll) استفاده کن و تغییر قابل مشاهده میشه.

:::

## توابع مرتبط

- [TextDrawCreate](TextDrawCreate): یک textdraw بساز.
- [TextDrawDestroy](TextDrawDestroy): یک textdraw رو نابود کن.
- [TextDrawColor](TextDrawColor): رنگ متن توی textdraw رو تنظیم کن.
- [TextDrawBoxColor](TextDrawBoxColor): رنگ باکس توی textdraw رو تنظیم کن.
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
