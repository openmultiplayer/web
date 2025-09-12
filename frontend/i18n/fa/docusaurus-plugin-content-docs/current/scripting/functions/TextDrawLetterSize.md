---
title: TextDrawLetterSize
sidebar_label: TextDrawLetterSize
description: عرض و ارتفاع حروف رو تنظیم می‌کنه.
tags: ["textdraw"]
---

## توضیحات

عرض و ارتفاع حروف رو تنظیم می‌کنه.

| نام          | توضیحات            |
| ------------ | ------------------ |
| Text:textid  | TextDraw ای که باید تغییر کنه |
| Float:width  | عرض یک کاراکتر.       |
| Float:height | ارتفاع یک کاراکتر.      |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0,"Example TextDraw");
    TextDrawLetterSize(gMyTextdraw, 3.2, 5.1);
    return 1;
}
```

## نکات

:::tip

وقتی از این تابع فقط برای تأثیر روی جعبه TextDraw استفاده می‌کنی، 'Y' رو در 0.135 ضرب کن تا به اندازه‌گیری‌های مشابه TextDrawTextSize تبدیل بشه.

نکته: استفاده از sprite **LD_SPAC:white** برای textdraw های فقط جعبه آسون‌تر و دقیق‌تره، TextDrawTextSize offset های معمولی خواهد داشت.

:::

:::tip

- اگر می‌خوای اندازه حروف یک textdraw که قبلاً نشون داده شده رو تغییر بدی، نیازی نیست دوباره بسازیش. بعد از تغییر textdraw، فقط از [TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll) استفاده کن و تغییر قابل مشاهده خواهد بود.
- فونت‌ها با نسبت X به Y برابر 1 به 4 بهترین ظاهر رو دارن (مثلاً اگر x برابر 0.5 باشه، y باید 2 باشه).

:::

## توابع مرتبط

- [TextDrawCreate](TextDrawCreate): یک textdraw بساز.
- [TextDrawDestroy](TextDrawDestroy): یک textdraw رو نابود کن.
- [TextDrawGetLetterSize](TextDrawGetLetterSize): عرض و ارتفاع حروف رو برمی‌گردونه.
- [TextDrawColor](TextDrawColor): رنگ متن یک textdraw رو تنظیم کن.
- [TextDrawBoxColor](TextDrawBoxColor): رنگ جعبه یک textdraw رو تنظیم کن.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): رنگ پس‌زمینه یک textdraw رو تنظیم کن.
- [TextDrawAlignment](TextDrawAlignment): تراز یک textdraw رو تنظیم کن.
- [TextDrawFont](TextDrawFont): فونت یک textdraw رو تنظیم کن.
- [TextDrawTextSize](TextDrawTextSize): اندازه جعبه یک textdraw رو تنظیم کن.
- [TextDrawSetOutline](TextDrawSetOutline): اینکه متن outline داشته باشه یا نه رو انتخاب کن.
- [TextDrawSetShadow](TextDrawSetShadow): سایه روی یک textdraw رو فعال/غیرفعال کن.
- [TextDrawSetProportional](TextDrawSetProportional): فاصله متن یک textdraw رو به نسبت متناسب تنظیم کن.
- [TextDrawUseBox](TextDrawUseBox): اینکه textdraw جعبه داشته باشه یا نه رو تنظیم کن.
- [TextDrawSetString](TextDrawSetString): متن یک textdraw موجود رو تنظیم کن.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): یک textdraw رو برای یک بازیکن خاص نشون بده.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): یک textdraw رو برای یک بازیکن خاص مخفی کن.
- [TextDrawShowForAll](TextDrawShowForAll): یک textdraw رو برای همه بازیکنا نشون بده.
- [TextDrawHideForAll](TextDrawHideForAll): یک textdraw رو برای همه بازیکنا مخفی کن.
