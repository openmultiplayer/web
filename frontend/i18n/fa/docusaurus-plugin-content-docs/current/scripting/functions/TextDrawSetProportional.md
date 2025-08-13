---
title: TextDrawSetProportional
sidebar_label: TextDrawSetProportional
description: فاصله متن رو به نسبت متناسب تنظیم می‌کنه.
tags: ["textdraw"]
---

## توضیحات

فاصله متن رو به نسبت متناسب تنظیم می‌کنه. وقتی از TextDrawLetterSize استفاده می‌کنی مفیده تا مطمئن بشی متن فاصله یکسان بین کاراکترها داره.

| نام               | توضیحات                                           |
| ----------------- | ------------------------------------------------- |
| Text:textid       | ID textdraw ای که می‌خوای تناسب اش رو تنظیم کنی  |
| bool:proportional | 'true' برای فعال کردن تناسب، 'false' برای غیرفعال کردن. |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");
    TextDrawSetProportional(gMyTextdraw, true);
    return 1;
}
```

## نکات

:::tip

- تناسب به صورت پیش‌فرض روی **true** تنظیم شده، اگر نمی‌خوای غیرفعالش کنی می‌تونی این تابع رو رد کنی.
- اگر می‌خوای تناسب یک textdraw که قبلاً نشون داده شده رو تغییر بدی، نیازی نیست دوباره بسازیش. بعد از تغییر textdraw، فقط از [TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll) استفاده کن و تغییر قابل مشاهده خواهد بود.

:::

## توابع مرتبط

- [TextDrawCreate](TextDrawCreate): یک textdraw بساز.
- [TextDrawDestroy](TextDrawDestroy): یک textdraw رو نابود کن.
- [TextDrawIsProportional](TextDrawIsProportional): چک می‌کنه که آیا یک textdraw متناسب هست یا نه.
- [TextDrawColor](TextDrawColor): رنگ متن یک textdraw رو تنظیم کن.
- [TextDrawBoxColor](TextDrawBoxColor): رنگ جعبه یک textdraw رو تنظیم کن.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): رنگ پس‌زمینه یک textdraw رو تنظیم کن.
- [TextDrawAlignment](TextDrawAlignment): تراز یک textdraw رو تنظیم کن.
- [TextDrawFont](TextDrawFont): فونت یک textdraw رو تنظیم کن.
- [TextDrawLetterSize](TextDrawLetterSize): اندازه حروف متن یک textdraw رو تنظیم کن.
- [TextDrawTextSize](TextDrawTextSize): اندازه جعبه یک textdraw رو تنظیم کن.
- [TextDrawSetOutline](TextDrawSetOutline): اینکه متن outline داشته باشه یا نه رو انتخاب کن.
- [TextDrawSetShadow](TextDrawSetShadow): سایه روی یک textdraw رو فعال/غیرفعال کن.
- [TextDrawUseBox](TextDrawUseBox): اینکه textdraw جعبه داشته باشه یا نه رو تنظیم کن.
- [TextDrawSetString](TextDrawSetString): متن یک textdraw موجود رو تنظیم کن.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): یک textdraw رو برای یک بازیکن خاص نشون بده.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): یک textdraw رو برای یک بازیکن خاص مخفی کن.
- [TextDrawShowForAll](TextDrawShowForAll): یک textdraw رو برای همه بازیکنا نشون بده.
- [TextDrawHideForAll](TextDrawHideForAll): یک textdraw رو برای همه بازیکنا مخفی کن.
