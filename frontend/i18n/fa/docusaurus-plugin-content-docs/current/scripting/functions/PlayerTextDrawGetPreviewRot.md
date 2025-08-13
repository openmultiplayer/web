---
title: PlayerTextDrawGetPreviewRot
sidebar_label: PlayerTextDrawGetPreviewRot
description: چرخش و zoom یک 3D model preview player-textdraw رو برمی‌گردونه.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چرخش و zoom یک 3D model preview player-textdraw رو برمی‌گردونه.

| اسم               | توضیحات                                                                     |
| ----------------- | ------------------------------------------------------------------------------- |
| playerid          | شناسه بازیکن.                                                           |
| PlayerText:textid | شناسه player-textdraw که می‌خوای rotation و zoom رو ازش بگیری.                      |
| &Float:rotationX  | متغیر float برای ذخیره rotationX coordinate، که به صورت reference پاس داده میشه. |
| &Float:rotationY  | متغیر float برای ذخیره rotationY coordinate، که به صورت reference پاس داده میشه. |
| &Float:rotationZ  | متغیر float برای ذخیره rotationZ coordinate، که به صورت reference پاس داده میشه. |
| &Float:zoom       | متغیر float برای ذخیره zoom value، که به صورت reference پاس داده میشه.           |

## مثال‌ها

```c
new PlayerText:gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, gMyTextdraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, gMyTextdraw[playerid], 1);
    PlayerTextDrawBoxColor(playerid, gMyTextdraw[playerid], 0x000000FF);
    PlayerTextDrawTextSize(playerid, gMyTextdraw[playerid], 40.0, 40.0);
    PlayerTextDrawSetPreviewModel(playerid, gMyTextdraw[playerid], 411);
    PlayerTextDrawSetPreviewRot(playerid, gMyTextdraw[playerid], -10.0, 0.0, -20.0, 1.0);
    PlayerTextDrawShow(playerid, gMyTextdraw[playerid]);

    new Float:rotationX, Float:rotationY, Float:rotationZ, Float:zoom;
    PlayerTextDrawGetPreviewRot(playerid, gMyTextdraw[playerid], rotationX, rotationY, rotationZ, zoom);
    // rotationX = -10.0
    // rotationY = 0.0
    // rotationZ = -20.0
    // zoom = 1.0
    return 1;
}
```

## توابع مرتبط

- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): تنظیم چرخش یک 3D player textdraw preview.
- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): تنظیم مدل 3D preview یک player textdraw.
- [PlayerTextDrawSetPreviewVehCol](PlayerTextDrawSetPreviewVehCol): تنظیم رنگ‌های یک وسیله نقلیه در 3D player textdraw preview.

## Callback های مرتبط

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): وقتی بازیکن روی textdraw کلیک می‌کنه فراخوانی میشه.