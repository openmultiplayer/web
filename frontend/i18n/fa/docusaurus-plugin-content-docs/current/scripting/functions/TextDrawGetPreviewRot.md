---
title: TextDrawGetPreviewRot
sidebar_label: TextDrawGetPreviewRot
description: چرخش و zoom یک textdraw preview سه‌بعدی رو برمی‌گردونه.
tags: ["textdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چرخش و zoom یک textdraw preview سه‌بعدی رو برمی‌گردونه.

| نام              | توضیحات                                                                         |
| ---------------- | ------------------------------------------------------------------------------- |
| Text:textid      | ID textdraw ای که می‌خوای چرخش و zoom اش رو بگیری.                             |
| &Float:rotationX | متغیر float که مختصات rotationX توش ذخیره می‌شه، به صورت reference پاس داده می‌شه. |
| &Float:rotationY | متغیر float که مختصات rotationY توش ذخیره می‌شه، به صورت reference پاس داده می‌شه. |
| &Float:rotationZ | متغیر float که مختصات rotationZ توش ذخیره می‌شه، به صورت reference پاس داده می‌شه. |
| &Float:zoom      | متغیر float که مقدار zoom توش ذخیره می‌شه، به صورت reference پاس داده می‌شه.           |

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
    
    new Float:rotationX, Float:rotationY, Float:rotationZ, Float:zoom;
    TextDrawGetPreviewRot(gMyTextdraw, rotationX, rotationY, rotationZ, zoom);
    // rotationX = -10.0
    // rotationY = 0.0
    // rotationZ = -20.0
    // zoom = 1.0
    return 1;
}
```

## توابع مرتبط

- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): چرخش و zoom یک textdraw preview سه‌بعدی رو تنظیم می‌کنه.
- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): چرخش یک player textdraw preview سه‌بعدی رو تنظیم کن.
- [TextDrawSetPreviewModel](TextDrawSetPreviewModel): مدل preview سه‌بعدی یک textdraw رو تنظیم کن.
- [TextDrawSetPreviewVehCol](TextDrawSetPreviewVehCol): رنگ‌های یک ماشین در preview سه‌بعدی textdraw رو تنظیم کن.
- [TextDrawFont](TextDrawFont): فونت یک textdraw رو تنظیم کن.

## Callback های مرتبط

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): وقتی بازیکن روی یک textdraw کلیک می‌کنه صدا زده می‌شه.
