---
title: TextDrawSetPreviewVehicleColours
sidebar_label: TextDrawSetPreviewVehicleColours
description: اگر از مدل ماشین در یک textdraw preview سه‌بعدی استفاده شده باشه، این تابع دو مقدار رنگ اون ماشین رو تنظیم می‌کنه.
tags: ["textdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

اگر از مدل ماشین در یک textdraw preview سه‌بعدی استفاده شده باشه، این تابع دو مقدار رنگ اون ماشین رو تنظیم می‌کنه.

| نام         | توضیحات                                                        |
| ----------- | -------------------------------------------------------------- |
| Text:textid | ID textdraw ای که برای نمایش preview مدل ماشین سه‌بعدی تنظیم شده. |
| colour1     | ID رنگ اصلی که ماشین باید تنظیم بشه.                        |
| colour2     | ID رنگ فرعی که ماشین باید تنظیم بشه.                      |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);
    TextDrawUseBox(gMyTextdraw, 1);
    TextDrawBoxColor(gMyTextdraw, 0x000000FF);
    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);
    TextDrawSetPreviewModel(gMyTextdraw, 411); // Display model 411 (Infernus)
    TextDrawSetPreviewVehicleColours(gMyTextdraw, 6, 6); // Set the Infernus to have colour 6 (Yellow)

    // You still have to use TextDrawShowForAll/TextDrawShowForPlayer to make the textdraw visible.
    return 1;
}
```

## نکات

:::warning

textdraw حتماً باید از نوع فونت `TEXT_DRAW_FONT_MODEL_PREVIEW` استفاده کنه تا این تابع تأثیر داشته باشه.

:::

## توابع مرتبط

- [TextDrawSetPreviewModel](TextDrawSetPreviewModel): مدل preview سه‌بعدی یک textdraw رو تنظیم کن.
- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): چرخش یک textdraw preview سه‌بعدی رو تنظیم کن.
- [TextDrawFont](TextDrawFont): فونت یک textdraw رو تنظیم کن.

## Callback های مرتبط

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): وقتی بازیکن روی یک textdraw کلیک می‌کنه صدا زده می‌شه.
