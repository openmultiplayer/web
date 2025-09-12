---
title: PlayerTextDrawSetPreviewVehicleColours
sidebar_label: PlayerTextDrawSetPreviewVehicleColours
description: رنگ یک ماشین رو در preview model یک player textdraw تنظیم می‌کنه (اگر ماشینی نمایش داده شده باشه).
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

رنگ یک ماشین رو در preview model یک player textdraw تنظیم می‌کنه (اگر ماشینی نمایش داده شده باشه).

| نام               | توضیحات                                           |
| ----------------- | ------------------------------------------------- |
| playerid          | ID بازیکنی که player textdraw اون باید تغییر کنه. |
| PlayerText:textid | ID player textdraw که باید تغییر کنه.            |
| colour1           | رنگی که باید به عنوان رنگ اصلی ماشین تنظیم بشه.   |
| colour2           | رنگی که باید به عنوان رنگ فرعی ماشین تنظیم بشه.  |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new PlayerText:gTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gTextDraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, gTextDraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, gTextDraw[playerid], true);
    PlayerTextDrawBoxColour(playerid, gTextDraw[playerid], 0x000000FF);
    PlayerTextDrawTextSize(playerid, gTextDraw[playerid], 40.0, 40.0);
    
    PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 411);
    PlayerTextDrawSetPreviewVehicleColours(playerid, gTextDraw[playerid], 3, 6);

    PlayerTextDrawShow(playerid, gTextDraw[playerid]);
    return 1;
}
```

## نکات

:::warning

textdraw حتماً باید از فونت `TEXT_DRAW_FONT_MODEL_PREVIEW` استفاده کنه و در حال نمایش یک ماشین باشه تا این تابع تأثیر داشته باشه.

:::

## توابع مرتبط

- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): تنظیم model ID یک 3D player textdraw preview.
- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): تنظیم چرخش یک 3D player textdraw preview.
- [PlayerTextDrawFont](PlayerTextDrawFont): تنظیم فونت یک player textdraw.

## کال‌بک‌های مرتبط

- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): زمانی فراخوانی می‌شه که بازیکن روی یک player textdraw کلیک کنه.