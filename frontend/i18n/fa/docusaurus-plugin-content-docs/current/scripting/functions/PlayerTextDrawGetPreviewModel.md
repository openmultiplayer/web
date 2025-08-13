---
title: PlayerTextDrawGetPreviewModel
sidebar_label: PlayerTextDrawGetPreviewModel
description: مدل preview یک 3D preview player-textdraw رو برمی‌گردونه.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

مدل preview یک 3D preview player-textdraw رو برمی‌گردونه.

| اسم              | توضیحات                                                |
|-------------------|------------------------------------------------------------|
| playerid          | شناسه بازیکن.                                      |
| PlayerText:textid | شناسه player-textdraw که می‌خوای preview model رو ازش بگیری. |

## مقدار برگشتی

مدل preview 3D player-textdraw رو برمی‌گردونه.

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
    PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 411);
    PlayerTextDrawShow(playerid, gTextDraw[playerid]);

    new previewModel = PlayerTextDrawGetPreviewModel(playerid, gTextDraw[playerid]);
    // previewModel = 411
    return 1;
}
```

## توابع مرتبط

- [PlayerTextDrawCreate](PlayerTextDrawCreate): ساخت یک player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): پاک کردن یک player-textdraw.
- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): تنظیم مدل 3D preview یک player textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): تنظیم رنگ متن در player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): تنظیم رنگ جعبه player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): تنظیم رنگ background یک player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): تنظیم alignment یک player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): تنظیم فونت یک player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): تنظیم اندازه حروف متن در player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): تنظیم اندازه جعبه player-textdraw (یا ناحیه قابل کلیک برای PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): روشن/خاموش کردن outline در player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): تنظیم سایه در player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): تنظیم فاصله متن در player-textdraw با نسبت متناسب.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): روشن/خاموش کردن جعبه در player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): تنظیم متن یک player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): نمایش یک player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): مخفی کردن یک player-textdraw.
- [IsPlayerTextDrawVisible](IsPlayerTextDrawVisible): چک می‌کنه که آیا player-textdraw برای بازیکن نمایش داده میشه یا نه.
- [IsValidPlayerTextDraw](IsValidPlayerTextDraw): چک می‌کنه که آیا player-textdraw معتبره یا نه.