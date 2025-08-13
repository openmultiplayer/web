---
title: TextDrawDestroy
sidebar_label: TextDrawDestroy
description: نابودی یک textdraw که قبلاً ایجاد شده است.
tags: ["textdraw"]
---

## توضیحات

نابودی یک textdraw که قبلاً ایجاد شده است.

| نام         | توضیحات                                                       |
| ----------- | ------------------------------------------------------------- |
| Text:textid | شناسه textdraw برای نابود کردن. توسط TextDrawCreate برگردانده شده. |

## مقدار بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گرداند.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(240.0, 580.0, "Welcome to my OPEN.MP server");
    return 1;
}

public OnGameModeExit()
{
    TextDrawDestroy(gMyTextdraw);
    return 1;
}
```

## توابع مرتبط

- [TextDrawCreate](TextDrawCreate): ایجاد یک textdraw.
- [TextDrawColor](TextDrawColor): تنظیم رنگ متن در یک textdraw.
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