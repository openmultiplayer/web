---
title: TextDrawSetPreviewRot
sidebar_label: TextDrawSetPreviewRot
description: چرخش و zoom یک textdraw preview سه‌بعدی رو تنظیم می‌کنه.
tags: ["textdraw"]
---

## توضیحات

چرخش و zoom یک textdraw preview سه‌بعدی رو تنظیم می‌کنه.

| نام             | توضیحات                                                                                                              |
| --------------- | -------------------------------------------------------------------------------------------------------------------- |
| Text:textid     | ID textdraw ای که باید تغییر کنه.                                                                                        |
| Float:rotationX | مقدار چرخش X.                                                                                                    |
| Float:rotationY | مقدار چرخش Y.                                                                                                    |
| Float:rotationZ | مقدار چرخش Z.                                                                                                    |
| Float:zoom      | مقدار zoom، مقدار پیش‌فرض 1.0، مقادیر کوچک‌تر دوربین رو نزدیک‌تر می‌کنن و مقادیر بزرگ‌تر دوربین رو دورتر می‌کنن. |

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
    TextDrawSetPreviewModel(gMyTextdraw, 411);
    TextDrawSetPreviewRot(gMyTextdraw, -10.0, 0.0, -20.0, 1.0);
    
    // You still have to use TextDrawShowForAll/TextDrawShowForPlayer to make the textdraw visible.
    return 1;
}
```

## نکات

:::warning

textdraw حتماً باید از نوع فونت `TEXT_DRAW_FONT_MODEL_PREVIEW` استفاده کنه و قبلاً یک مدل تنظیم شده باشه تا این تابع تأثیر داشته باشه.

:::

## توابع مرتبط

- [TextDrawGetPreviewRot](TextDrawGetPreviewRot): چرخش و zoom یک textdraw preview سه‌بعدی رو برمی‌گردونه.
- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): چرخش یک player textdraw preview سه‌بعدی رو تنظیم کن.
- [TextDrawSetPreviewModel](TextDrawSetPreviewModel): مدل preview سه‌بعدی یک textdraw رو تنظیم کن.
- [TextDrawSetPreviewVehCol](TextDrawSetPreviewVehCol): رنگ‌های یک ماشین در preview سه‌بعدی textdraw رو تنظیم کن.
- [TextDrawFont](TextDrawFont): فونت یک textdraw رو تنظیم کن.

## Callback های مرتبط

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): وقتی بازیکن روی یک textdraw کلیک می‌کنه صدا زده می‌شه.
