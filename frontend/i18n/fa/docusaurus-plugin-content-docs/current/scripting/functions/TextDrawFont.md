---
title: TextDrawFont
sidebar_label: TextDrawFont
description: فونت متن رو تغییر میده.
tags: ["textdraw"]
---

## توضیحات

فونت متن رو تغییر می‌ده.

| نام                 | توضیحات                                                                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Text:textid         | TextDraw ای که می‌خوای تغییر بدی                                                                                                                                                                                                                                 |
| TEXT_DRAW_FONT:font | چهار استایل فونت وجود داره که در زیر نشون داده شده. مقدار فونت 4 مشخص می‌کنه که این یک txd sprite هست؛ 5 مشخص می‌کنه که این textdraw می‌تونه preview model ها رو نمایش بده. مقدار فونت بیشتر از 5 نمایش داده نمیشه، و هر چیزی بیشتر از 16 کلاینت رو crash می‌کنه. |

استایل‌های موجود:
![Available Styles](https://assets.open.mp/assets/images/textdraws/Textdraw_font_styles.png)

فونت‌های موجود:
![Available Fonts](https://assets.open.mp/assets/images/textdraws/Textdraw_Fonts.png)

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
/*
    TEXT_DRAW_FONT_0
    TEXT_DRAW_FONT_1
    TEXT_DRAW_FONT_2
    TEXT_DRAW_FONT_3
    TEXT_DRAW_FONT_SPRITE_DRAW
    TEXT_DRAW_FONT_MODEL_PREVIEW
*/

new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 425.0, "This is an example textdraw");
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_2);
    return 1;
}
```

## نکات

:::tip

اگه می‌خوای فونت textdraw ای که قبلاً نشون داده شده رو تغییر بدی، نیازی نیست دوباره بسازیش. فقط بعد از تغییر textdraw از [TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll) استفاده کن و تغییر قابل مشاهده میشه.

:::

## توابع مرتبط

- [TextDrawCreate](TextDrawCreate): یک textdraw بساز.
- [TextDrawDestroy](TextDrawDestroy): یک textdraw رو نابود کن.
- [TextDrawGetFont](TextDrawGetFont): فونت متن یک textdraw رو بدست بیار.
- [TextDrawColor](TextDrawColor): رنگ متن توی textdraw رو تنظیم کن.
- [TextDrawBoxColor](TextDrawBoxColor): رنگ باکس توی textdraw رو تنظیم کن.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): رنگ پس‌زمینه textdraw رو تنظیم کن.
- [TextDrawAlignment](TextDrawAlignment): تراز textdraw رو تنظیم کن.
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
