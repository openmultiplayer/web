---
title: PlayerTextDrawSetPreviewRot
sidebar_label: PlayerTextDrawSetPreviewRot
description: چرخش و zoom یک 3D model preview player-textdraw رو تنظیم می‌کنه.
tags: ["player", "textdraw", "playertextdraw"]
---

## توضیحات

چرخش و zoom یک 3D model preview player-textdraw رو تنظیم می‌کنه.

| اسم               | توضیحات                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------ |
| playerid          | شناسه بازیکن که می‌خوای player-textdraw رو براش تغییر بدی.                                                                    |
| PlayerText:textid | شناسه player-textdraw که می‌خوای تغییرش بدی.                                                                                 |
| Float:rotX        | مقدار چرخش X.                                                                                                    |
| Float:rotY        | مقدار چرخش Y.                                                                                                    |
| Float:rotZ        | مقدار چرخش Z.                                                                                                    |
| Float:zoom        | مقدار zoom، مقدار پیش‌فرض 1.0، مقادیر کوچیک‌تر دوربین رو نزدیک‌تر می‌کنه و مقادیر بزرگ‌تر دورتر می‌کنه. |

## مقدار برگشتی

این تابع مقدار خاصی برنمی‌گردونه.

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
    return 1;
}
```

## نکات

:::warning

textdraw حتماً باید از نوع فونت `TEXT_DRAW_FONT_MODEL_PREVIEW` استفاده کنه و از قبل یک مدل تنظیم شده باشه تا این تابع تأثیر داشته باشه.

:::

## توابع مرتبط

- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): تنظیم چرخش یک 3D textdraw preview.
- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): تنظیم مدل ID یک 3D player textdraw preview.
- [PlayerTextDrawSetPreviewVehCol](PlayerTextDrawSetPreviewVehCol): تنظیم رنگ‌های یک وسیله نقلیه در 3D player textdraw preview.
- [PlayerTextDrawFont](PlayerTextDrawFont): تنظیم فونت یک player-textdraw.

## Callback های مرتبط

- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): وقتی بازیکن روی player-textdraw کلیک می‌کنه فراخوانی میشه.