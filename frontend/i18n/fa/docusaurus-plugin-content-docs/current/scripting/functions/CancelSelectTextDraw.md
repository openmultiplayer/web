---
title: CancelSelectTextDraw
sidebar_label: CancelSelectTextDraw
description: انتخاب textdraw با ماوس را لغو می‌کند.
tags: ["textdraw"]
---

## توضیحات

انتخاب textdraw با ماوس را لغو می‌کند

| نام      | توضیحات                                                            |
| -------- | ------------------------------------------------------------------- |
| playerid | شناسه بازیکنی که انتخاب textdraw برای او غیرفعال می‌شود            |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گرداند.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/cancelselect", true))
    {
        CancelSelectTextDraw(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: TextDraw selection disabled!");
        return 1;
    }
    return 0;
}
```

## نکات

:::warning

این تابع [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw) را با INVALID_TEXT_DRAW (65535) فراخوانی می‌کند.

استفاده از این تابع درون OnPlayerClickTextDraw بدون گرفتن این حالت باعث می‌شود که کلاینت‌ها وارد حلقه بی‌نهایت شوند.

:::

## توابع مرتبط

- [SelectTextDraw](SelectTextDraw): ماوس را فعال می‌کند تا بازیکن بتواند یک textdraw انتخاب کند
- [TextDrawSetSelectable](TextDrawSetSelectable): تعیین می‌کند که آیا textdraw از طریق SelectTextDraw قابل انتخاب است یا نه

## کالبک‌های مرتبط

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): زمانی که بازیکن روی یک textdraw کلیک کند فراخوانی می‌شود.
