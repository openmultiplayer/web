---
title: PlayerTextDrawSetPreviewModel
sidebar_label: PlayerTextDrawSetPreviewModel
description: sprite مدل 3D preview یک player textdraw رو از شناسه مدل مشخصی تنظیم می‌کنه.
tags: ["player", "textdraw", "playertextdraw"]
---

## توضیحات

sprite مدل 3D preview یک player textdraw رو از شناسه مدل مشخصی تنظیم می‌کنه.

| اسم              | توضیحات                                       |
| ----------------- | ------------------------------------------------- |
| playerid          | شناسه بازیکن PlayerTextDraw.                     |
| PlayerText:textid | شناسه textdraw که 3D preview رو نمایش می‌ده. |
| model             | شناسه مدل GTA SA یا SA:MP برای نمایش.          |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد. اگه مدل نامعتبری پاس بدی، 'موفقیت' گزارش میشه ولی مدل به صورت علامت سوال زرد/سیاه نمایش داده میشه.

**false** - اجرای تابع ناموفق بود. بازیکن و/یا textdraw وجود نداره.

## مثال‌ها

```c
new PlayerText:gTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gTextDraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, gTextDraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, gTextDraw[playerid], true);
    PlayerTextDrawBoxColor(playerid, gTextDraw[playerid], 0x000000FF);
    PlayerTextDrawTextSize(playerid, gTextDraw[playerid], 40.0, 40.0);
    
    PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 411); // Show an Infernus (model 411)
    //PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 0); // Display model 0 (CJ Skin)
    //PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 18646); // Display model 18646 (police light object)

    PlayerTextDrawShow(playerid, gTextDraw[playerid]);
    return 1;
}
```

## نکات

:::warning

textdraw حتماً باید از نوع فونت `TEXT_DRAW_FONT_MODEL_PREVIEW` استفاده کنه تا این تابع تأثیر داشته باشه.

:::

## توابع مرتبط

- [PlayerTextDrawGetPreviewModel](PlayerTextDrawGetPreviewModel): دریافت مدل preview یک 3D preview player-textdraw.
- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): تنظیم چرخش یک 3D player textdraw preview.
- [PlayerTextDrawSetPreviewVehCol](PlayerTextDrawSetPreviewVehCol): تنظیم رنگ‌های یک وسیله نقلیه در 3D player textdraw preview.
- [PlayerTextDrawFont](PlayerTextDrawFont): تنظیم فونت یک player-textdraw.

## Callback های مرتبط

- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): وقتی بازیکن روی player-textdraw کلیک می‌کنه فراخوانی میشه.