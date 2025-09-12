---
title: TextDrawSetSelectable
sidebar_label: TextDrawSetSelectable
description: تنظیم می‌کنه که آیا یک textdraw قابل انتخاب (کلیک) باشه یا نه.
tags: ["textdraw"]
---

## توضیحات

تنظیم می‌کنه که آیا یک textdraw قابل انتخاب (کلیک) باشه یا نه

| نام             | توضیحات                                                         |
| --------------- | --------------------------------------------------------------- |
| Text:textid     | ID textdraw ای که می‌خوای قابل انتخاب کنی.                          |
| bool:selectable | 'true' برای قابل انتخاب کردن، یا 'false' برای غیرقابل انتخاب کردن. |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");
    TextDrawTextSize(gMyTextdraw, 30.0, 10.0);
    TextDrawSetSelectable(gMyTextdraw, true);
    return 1;
}
```

## نکات

:::tip

از [TextDrawTextSize](TextDrawTextSize) برای تعریف ناحیه قابل کلیک استفاده کن.

:::

:::warning

TextDrawSetSelectable باید قبل از نشون دادن textdraw به بازیکنا استفاده بشه تا قابل انتخاب باشه.

:::

## توابع مرتبط

- [TextDrawIsSelectable](TextDrawIsSelectable): چک می‌کنه که آیا یک textdraw قابل انتخاب هست یا نه.
- [SelectTextDraw](SelectTextDraw): ماوس رو فعال می‌کنه تا بازیکن بتونه یک textdraw انتخاب کنه
- [CancelSelectTextDraw](CancelSelectTextDraw): انتخاب textdraw با ماوس رو لغو کن

## Callback های مرتبط

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): وقتی بازیکن روی یک textdraw کلیک می‌کنه صدا زده می‌شه.
