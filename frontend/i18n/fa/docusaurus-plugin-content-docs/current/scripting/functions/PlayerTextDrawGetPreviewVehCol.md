---
title: PlayerTextDrawGetPreviewVehCol
sidebar_label: PlayerTextDrawGetPreviewVehCol
description: رنگ‌های preview vehicle یک 3D preview player-textdraw رو برمی‌گردونه.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

رنگ‌های preview vehicle یک 3D preview player-textdraw رو برمی‌گردونه.

| اسم               | توضیحات                                                      |
| ----------------- | ---------------------------------------------------------------- |
| playerid          | شناسه بازیکن.                                            |
| PlayerText:textid | شناسه player-textdraw که می‌خوای vehicle colors رو ازش بگیری.      |
| &colour1          | متغیری برای ذخیره colour1، که به صورت reference پاس داده میشه. |
| &colour2          | متغیری برای ذخیره colour2، که به صورت reference پاس داده میشه. |

## مثال‌ها

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playeird, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, pTextdraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, pTextdraw[playerid], true);
    PlayerTextDrawBoxColor(playerid, pTextdraw[playerid], 0x000000FF);
    PlayerTextDrawTextSize(playerid, pTextdraw[playerid], 40.0, 40.0);
    PlayerTextDrawSetPreviewModel(playerid, pTextdraw[playerid], 411);
    PlayerTextDrawSetPreviewVehCol(playerid, pTextdraw[playerid], 6, 8);

    new colour1, colour2;
    PlayerTextDrawGetPreviewVehCol(playerid, pTextdraw[playerid], colour1, colour2);
    // colour1 = 6
    // colour2 = 8
    return 1;
}
```

## توابع مرتبط

- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): تنظیم مدل ID یک 3D player textdraw preview.
- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): تنظیم چرخش یک 3D player textdraw preview.
- [PlayerTextDrawFont](PlayerTextDrawFont): تنظیم فونت یک player-textdraw.

## Callback های مرتبط

- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): وقتی بازیکن روی player-textdraw کلیک می‌کنه فراخوانی میشه.