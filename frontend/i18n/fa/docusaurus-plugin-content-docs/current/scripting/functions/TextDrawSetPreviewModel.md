---
title: TextDrawSetPreviewModel
sidebar_label: TextDrawSetPreviewModel
description: مدل یک textdraw model preview رو تنظیم کن.
tags: ["textdraw"]
---

## توضیحات

مدل یک textdraw model preview رو تنظیم کن.

| نام         | توضیحات                                       |
| ----------- | --------------------------------------------- |
| Text:textid | ID textdraw ای که preview سه‌بعدی رو نمایش می‌ده. |
| model       | ID مدل GTA SA یا SA:MP که باید نمایش داده بشه.          |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);
    TextDrawUseBox(gMyTextdraw, true);
    TextDrawBoxColor(gMyTextdraw, 0x000000FF);
    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);

    TextDrawSetPreviewModel(gMyTextdraw, 411); // Display model 411 (Infernus)
    // TextDrawSetPreviewModel(gMyTextdraw, 1); // Display model 1 (CJ Skin)
    // TextDrawSetPreviewModel(gMyTextdraw, 18646); // Display model 18646 (Police light object)

    // You still have to use TextDrawShowForAll/TextDrawShowForPlayer to make the textdraw visible.
    return 1;
}
```

## نکات

:::tip

از [TextDrawBackgroundColor](TextDrawBackgroundColor) برای تنظیم رنگ پس‌زمینه پشت مدل استفاده کن.

:::

:::warning

textdraw حتماً باید از نوع فونت `TEXT_DRAW_FONT_MODEL_PREVIEW` استفاده کنه تا این تابع تأثیر داشته باشه.

:::

## توابع مرتبط

- [TextDrawGetPreviewModel](TextDrawGetPreviewModel): مدل preview یک textdraw سه‌بعدی رو برمی‌گردونه.
- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): چرخش یک textdraw preview سه‌بعدی رو تنظیم کن.
- [TextDrawSetPreviewVehCol](TextDrawSetPreviewVehCol): رنگ‌های یک ماشین در preview سه‌بعدی textdraw رو تنظیم کن.
- [TextDrawFont](TextDrawFont): فونت یک textdraw رو تنظیم کن.
- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): ID مدل یک player textdraw preview سه‌بعدی رو تنظیم کن.

## Callback های مرتبط

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): وقتی بازیکن روی یک textdraw کلیک می‌کنه صدا زده می‌شه.
