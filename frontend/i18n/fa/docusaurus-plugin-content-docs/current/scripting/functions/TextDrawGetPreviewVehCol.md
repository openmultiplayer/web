---
title: TextDrawGetPreviewVehCol
sidebar_label: TextDrawGetPreviewVehCol
description: رنگ‌های preview ماشین یک textdraw preview سه‌بعدی رو برمی‌گردونه.
tags: ["textdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

رنگ‌های preview ماشین یک textdraw preview سه‌بعدی رو برمی‌گردونه.

| نام         | توضیحات                                                           |
| ----------- | ---------------------------------------------------------------- |
| Text:textid | ID textdraw ای که می‌خوای رنگ‌های ماشینش رو بگیری.             |
| &colour1    | متغیری که colour1 توش ذخیره می‌شه، به صورت reference پاس داده می‌شه. |
| &colour2    | متغیری که colour2 توش ذخیره می‌شه، به صورت reference پاس داده می‌شه. |

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
    TextDrawSetPreviewVehCol(gMyTextdraw, 6, 8);

    new colour1, colour2;
    TextDrawGetPreviewVehCol(gMyTextdraw, colour1, colour2);
    // colour1 = 6
    // colour2 = 8
    return 1;
}
```

## توابع مرتبط

- [TextDrawSetPreviewModel](TextDrawSetPreviewModel): مدل preview سه‌بعدی یک textdraw رو تنظیم کن.
- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): چرخش یک textdraw preview سه‌بعدی رو تنظیم کن.
- [TextDrawFont](TextDrawFont): فونت یک textdraw رو تنظیم کن.

## Callback های مرتبط

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): وقتی بازیکن روی یک textdraw کلیک می‌کنه صدا زده می‌شه.
