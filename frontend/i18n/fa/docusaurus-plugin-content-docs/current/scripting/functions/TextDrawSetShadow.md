---
title: TextDrawSetShadow
sidebar_label: TextDrawSetShadow
description: اندازه سایه متن یک textdraw رو تنظیم می‌کنه.
tags: ["textdraw"]
---

## توضیحات

اندازه سایه متن یک textdraw رو تنظیم می‌کنه.

| نام         | توضیحات                                                                                             |
| ----------- | --------------------------------------------------------------------------------------------------- |
| Text:textid | ID textdraw ای که می‌خوای اندازه سایه‌اش رو تنظیم کنی.                                                       |
| shadowSize  | اندازه سایه. معمولاً از 1 برای اندازه سایه معمولی استفاده می‌شه. 0 سایه رو کاملاً غیرفعال می‌کنه. |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. textdraw وجود نداره.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");
    TextDrawSetShadow(gMyTextdraw, 1);
    return 1;
}
```

## نکات

:::tip

اگر اندازه سایه خیلی بزرگ تنظیم بشه، ممکنه توسط ناحیه جعبه بریده بشه.

:::

:::tip

اگر می‌خوای سایه یک textdraw که قبلاً نشون داده شده رو تغییر بدی، نیازی نیست دوباره بسازیش. بعد از تغییر textdraw، فقط از [TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll) استفاده کن و تغییر قابل مشاهده خواهد بود.

:::

## توابع مرتبط

- [TextDrawCreate](TextDrawCreate): یک textdraw بساز.
- [TextDrawDestroy](TextDrawDestroy): یک textdraw رو نابود کن.
- [TextDrawGetShadow](TextDrawGetShadow): اندازه سایه متن یک textdraw رو برمی‌گردونه.
- [TextDrawColor](TextDrawColor): رنگ متن یک textdraw رو تنظیم کن.
- [TextDrawBoxColor](TextDrawBoxColor): رنگ جعبه یک textdraw رو تنظیم کن.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): رنگ پس‌زمینه یک textdraw رو تنظیم کن.
- [TextDrawAlignment](TextDrawAlignment): تراز یک textdraw رو تنظیم کن.
- [TextDrawFont](TextDrawFont): فونت یک textdraw رو تنظیم کن.
- [TextDrawLetterSize](TextDrawLetterSize): اندازه حروف متن یک textdraw رو تنظیم کن.
- [TextDrawTextSize](TextDrawTextSize): اندازه جعبه یک textdraw رو تنظیم کن.
- [TextDrawSetOutline](TextDrawSetOutline): اینکه متن outline داشته باشه یا نه رو انتخاب کن.
- [TextDrawSetProportional](TextDrawSetProportional): فاصله متن یک textdraw رو به نسبت متناسب تنظیم کن.
- [TextDrawUseBox](TextDrawUseBox): اینکه textdraw جعبه داشته باشه یا نه رو تنظیم کن.
- [TextDrawSetString](TextDrawSetString): متن یک textdraw موجود رو تنظیم کن.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): یک textdraw رو برای یک بازیکن خاص نشون بده.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): یک textdraw رو برای یک بازیکن خاص مخفی کن.
- [TextDrawShowForAll](TextDrawShowForAll): یک textdraw رو برای همه بازیکنا نشون بده.
- [TextDrawHideForAll](TextDrawHideForAll): یک textdraw رو برای همه بازیکنا مخفی کن.
