---
title: TextDrawUseBox
sidebar_label: TextDrawUseBox
description: فعال/غیرفعال کن که آیا textdraw از باکس استفاده کنه یا نه.
tags: ["textdraw"]
---

## توضیحات

فعال/غیرفعال می‌کنه که آیا textdraw از باکس استفاده کنه یا نه.

| نام            | توضیحات                                        |
| -------------- | -------------------------------------------------- |
| Text:textid    | ID textdraw ای که می‌خوای باکسش رو فعال/غیرفعال کنی.  |
| bool:enableBox | 'true' برای نشون دادن باکس یا 'false' برای نشون ندادن باکس. |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. یعنی textdraw مشخص شده وجود نداره.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");
    TextDrawUseBox(gMyTextdraw, true); // Toggle box ON
    // boks ro faal kon
    return 1;
}
```

## نکات

:::tip

اگه textdraw قبلاً نشون داده شده، باید دوباره نشون داده بشه ([TextDrawShowForAll](TextDrawShowForAll)/[TextDrawShowForPlayer](TextDrawShowForPlayer)) تا تغییرات این تابع نشون داده بشن.

:::

## توابع مرتبط

- [TextDrawCreate](TextDrawCreate): یک textdraw بساز.
- [TextDrawDestroy](TextDrawDestroy): یک textdraw رو نابود کن.
- [TextDrawIsBox](TextDrawIsBox): چک می‌کنه که آیا textdraw باکس هست یا نه.
- [TextDrawColor](TextDrawColor): رنگ متن توی textdraw رو تنظیم کن.
- [TextDrawBoxColor](TextDrawBoxColor): رنگ باکس توی textdraw رو تنظیم کن.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): رنگ پس‌زمینه textdraw رو تنظیم کن.
- [TextDrawAlignment](TextDrawAlignment): تراز textdraw رو تنظیم کن.
- [TextDrawFont](TextDrawFont): فونت textdraw رو تنظیم کن.
- [TextDrawLetterSize](TextDrawLetterSize): اندازه حروف متن توی textdraw رو تنظیم کن.
- [TextDrawTextSize](TextDrawTextSize): اندازه باکس textdraw رو تنظیم کن.
- [TextDrawSetOutline](TextDrawSetOutline): انتخاب کن که آیا متن outline داره یا نه.
- [TextDrawSetShadow](TextDrawSetShadow): سایه روی textdraw رو فعال/غیرفعال کن.
- [TextDrawSetProportional](TextDrawSetProportional): فاصله متن توی textdraw رو به نسبت متناسب تنظیم کن.
- [TextDrawSetString](TextDrawSetString): متن توی textdraw موجود رو تنظیم کن.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): textdraw رو برای یک بازیکن خاص نشون بده.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): textdraw رو برای یک بازیکن خاص مخفی کن.
- [TextDrawShowForAll](TextDrawShowForAll): textdraw رو برای همه بازیکنا نشون بده.
- [TextDrawHideForAll](TextDrawHideForAll): textdraw رو برای همه بازیکنا مخفی کن.
