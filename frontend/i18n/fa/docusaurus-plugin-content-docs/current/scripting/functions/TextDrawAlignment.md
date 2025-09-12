---
title: TextDrawAlignment
sidebar_label: TextDrawAlignment
description: تنظیم تراز متن در یک textdraw.
tags: ["textdraw"]
---

## توضیحات

تنظیم تراز متن در یک textdraw.

| پارامتر                   | توضیحات                                                                     |
| ------------------------- | --------------------------------------------------------------------------- |
| Text:textid               | شناسه textdraw برای تنظیم تراز آن.                                           |
| TEXT_DRAW_ALIGN:alignment | `TEXT_DRAW_ALIGN_LEFT` / `TEXT_DRAW_ALIGN_CENTER` / `TEXT_DRAW_ALIGN_RIGHT` |

## مقدار بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گرداند.

## مثال‌ها

```c
/*
    TEXT_DRAW_ALIGN_LEFT
    TEXT_DRAW_ALIGN_CENTER
    TEXT_DRAW_ALIGN_RIGHT
*/

new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 425.0, "This is an example textdraw");
    TextDrawAlignment(gMyTextdraw, TEXT_DRAW_ALIGN_CENTER); // تراز متن textdraw در وسط
    return 1;
}
```

## نکات

:::warning

برای تراز TEXT_DRAW_ALIGN_CENTER (وسط) مقادیر x و y از TextSize باید جابجا شوند، نکات در [TextDrawTextSize](TextDrawTextSize) را ببینید، همچنین مختصات موقعیت به موقعیت مرکز textdraw تبدیل می‌شود و نه لبه‌های چپ/بالا.

:::

:::tip

اگر textdraw قبلاً نمایش داده شده است، باید دوباره نمایش داده شود ([TextDrawShowForAll](TextDrawShowForAll)/[TextDrawShowForPlayer](TextDrawShowForPlayer)) تا تغییرات این تابع نمایش داده شوند.

:::

## توابع مرتبط

- [TextDrawCreate](TextDrawCreate): ایجاد یک textdraw.
- [TextDrawDestroy](TextDrawDestroy): نابود کردن یک textdraw.
- [TextDrawGetAlignment](TextDrawGetAlignment): گرفتن تراز متن یک textdraw.
- [TextDrawColor](TextDrawColor): تنظیم رنگ متن در یک textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): تنظیم رنگ جعبه در یک textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): تنظیم رنگ پس‌زمینه یک textdraw.
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