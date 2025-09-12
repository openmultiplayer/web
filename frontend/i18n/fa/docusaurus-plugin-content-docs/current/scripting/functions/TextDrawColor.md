---
title: TextDrawColor
sidebar_label: TextDrawColor
description: تنظیم رنگ متن یک textdraw.
tags: ["textdraw"]
---

## توضیحات

تنظیم رنگ متن یک textdraw

| نام         | توضیحات                                     |
| ----------- | ------------------------------------------- |
| Text:textid | شناسه textdraw برای تغییر رنگ آن.           |
| textColour  | رنگی که textdraw به آن تنظیم می‌شود.        |

## مقدار بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گرداند.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(123.0, 123.0, "Example");
    TextDrawColor(gMyTextdraw, 0x000000FF);
    return 1;
}
```

## نکات

:::tip

اگر TextDraw قبلاً نمایش داده شده است، باید دوباره نمایش داده شود ([TextDrawShowForAll](TextDrawShowForAll)/[TextDrawShowForPlayer](TextDrawShowForPlayer)) تا تغییرات این تابع اعمال شوند.

:::

## توابع مرتبط

- [TextDrawCreate](TextDrawCreate): ایجاد یک textdraw.
- [TextDrawDestroy](TextDrawDestroy): نابود کردن یک textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): تنظیم رنگ جعبه در یک textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): تنظیم رنگ پس‌زمینه یک textdraw.
- [TextDrawAlignment](TextDrawAlignment): تنظیم تراز یک textdraw.
- [TextDrawFont](TextDrawFont): تنظیم فونت یک textdraw.
- [TextDrawLetterSize](TextDrawLetterSize): تنظیم اندازه حرف متن در یک textdraw.
- [TextDrawTextSize](TextDrawTextSize): تنظیم اندازه جعبه textdraw.
- [TextDrawSetOutline](TextDrawSetOutline): انتخاب اینکه آیا متن دارای خط کناری باشد.
- [TextDrawSetShadow](TextDrawSetShadow): تغییر وضعیت سایه روی textdraw.
- [TextDrawSetProportional](TextDrawSetProportional): مقیاس‌بندی فاصله متن در textdraw به نسبت متناسب.
- [TextDrawUseBox](TextDrawUseBox): تغییر وضعیت اینکه آیا textdraw جعبه دارد یا نه.
- [TextDrawSetString](TextDrawSetString): تنظیم متن در textdraw موجود.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): نمایش textdraw برای بازیکن خاص.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): پنهان کردن textdraw برای بازیکن خاص.
- [TextDrawShowForAll](TextDrawShowForAll): نمایش textdraw برای همه بازیکنان.
- [TextDrawHideForAll](TextDrawHideForAll): پنهان کردن textdraw برای همه بازیکنان.