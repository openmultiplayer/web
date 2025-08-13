---
title: TextDrawTextSize
sidebar_label: TextDrawTextSize
description: اندازه یک textdraw رو تغییر می‌ده (جعبه اگر TextDrawUseBox فعال باشه و/یا ناحیه قابل کلیک برای استفاده با TextDrawSetSelectable).
tags: ["textdraw"]
---

## توضیحات

اندازه یک textdraw رو تغییر می‌ده (جعبه اگر [TextDrawUseBox](TextDrawUseBox) فعال باشه و/یا ناحیه قابل کلیک برای استفاده با [TextDrawSetSelectable](TextDrawSetSelectable)).

| نام          | توضیحات                                                                            |
| ------------ | ---------------------------------------------------------------------------------- |
| Text:textid  | TextDraw ای که می‌خوای اندازه‌اش رو تنظیم کنی.                                                       |
| Float:width  | اندازه روی محور X (چپ/راست) که از همون grid 640x480 مثل TextDrawCreate پیروی می‌کنه. |
| Float:height | اندازه روی محور Y (بالا/پایین) که از همون grid 640x480 مثل TextDrawCreate پیروی می‌کنه.    |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");
    TextDrawTextSize(gMyTextdraw, 2.0, 3.6);
    return 1;
}
```

## نکات

:::tip

- x و y با مقادیر مختلف TextDrawAlignment معنی متفاوتی دارن: 1 (چپ): اونا گوشه سمت راست جعبه هستن، مختصات مطلق. 2 (وسط): باید معکوس بشن (دو تاشون رو عوض کن) و مقدار x عرض کلی جعبه هست. 3 (راست): x و y مختصات گوشه سمت چپ جعبه هستن
- استفاده از نوع فونت 4 (sprite) و 5 (model preview) X و Y این تابع رو از مختصات گوشه به WIDTH و HEIGHT (offset ها) تبدیل می‌کنه.
- جعبه TextDraw از 10.0 واحد بالا و 5.0 واحد سمت چپ به عنوان مبدأ (مختصات TextDrawCreate) شروع می‌شه.
- این تابع ناحیه قابل کلیک رو برای استفاده با TextDrawSetSelectable تعریف می‌کنه، چه جعبه نشون داده بشه چه نشه.

:::

:::tip

- اگر می‌خوای text size یک textdraw که قبلاً نشون داده شده رو تغییر بدی، نیازی نیست دوباره بسازیش. بعد از تغییر textdraw، فقط از [TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll) استفاده کن و تغییر قابل مشاهده خواهد بود.

:::

## توابع مرتبط

- [TextDrawCreate](TextDrawCreate): یک textdraw بساز.
- [TextDrawDestroy](TextDrawDestroy): یک textdraw رو نابود کن.
- [TextDrawGetTextSize](TextDrawGetTextSize): محور X و Y یک textdraw رو برمی‌گردونه.
- [TextDrawColor](TextDrawColor): رنگ متن یک textdraw رو تنظیم کن.
- [TextDrawBoxColor](TextDrawBoxColor): رنگ جعبه یک textdraw رو تنظیم کن.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): رنگ پس‌زمینه یک textdraw رو تنظیم کن.
- [TextDrawAlignment](TextDrawAlignment): تراز یک textdraw رو تنظیم کن.
- [TextDrawFont](TextDrawFont): فونت یک textdraw رو تنظیم کن.
- [TextDrawLetterSize](TextDrawLetterSize): اندازه حروف متن یک textdraw رو تنظیم کن.
- [TextDrawSetOutline](TextDrawSetOutline): اینکه متن outline داشته باشه یا نه رو انتخاب کن.
- [TextDrawSetShadow](TextDrawSetShadow): سایه روی یک textdraw رو فعال/غیرفعال کن.
- [TextDrawSetProportional](TextDrawSetProportional): فاصله متن یک textdraw رو به نسبت متناسب تنظیم کن.
- [TextDrawUseBox](TextDrawUseBox): اینکه textdraw جعبه داشته باشه یا نه رو تنظیم کن.
- [TextDrawSetString](TextDrawSetString): متن یک textdraw موجود رو تنظیم کن.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): یک textdraw رو برای یک بازیکن خاص نشون بده.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): یک textdraw رو برای یک بازیکن خاص مخفی کن.
- [TextDrawShowForAll](TextDrawShowForAll): یک textdraw رو برای همه بازیکنا نشون بده.
- [TextDrawHideForAll](TextDrawHideForAll): یک textdraw رو برای همه بازیکنا مخفی کن.
