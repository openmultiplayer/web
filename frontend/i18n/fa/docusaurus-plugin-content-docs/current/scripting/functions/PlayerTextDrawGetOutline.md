---
title: PlayerTextDrawGetOutline
sidebar_label: PlayerTextDrawGetOutline
description: اندازه outline در player-textdraw رو برمی‌گردونه.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

اندازه outline در player-textdraw رو برمی‌گردونه.

| اسم               | توضیحات                                               |
| ----------------- | --------------------------------------------------------- |
| playerid          | شناسه بازیکن.                                     |
| PlayerText:textid | شناسه player-textdraw که می‌خوای outline size رو ازش بگیری. |

## مقدار برگشتی

اندازه outline player-textdraw رو برمی‌گردونه.

## مثال‌ها

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");
    PlayerTextDrawSetOutline(playerid, welcomeText[playerid], 1);
    PlayerTextDrawShow(playerid, welcomeText[playerid]);

    new outline = PlayerTextDrawGetOutline(playerid, welcomeText[playerid]);
    // outline = 1
    return 1;
}
```

## توابع مرتبط

- [PlayerTextDrawCreate](PlayerTextDrawCreate): ساخت یک player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): پاک کردن یک player-textdraw.
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): روشن/خاموش کردن outline در player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): تنظیم رنگ متن در player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): تنظیم رنگ جعبه player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): تنظیم رنگ background یک player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): تنظیم alignment یک player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): تنظیم فونت یک player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): تنظیم اندازه حروف متن در player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): تنظیم اندازه جعبه player-textdraw (یا ناحیه قابل کلیک برای PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): تنظیم فاصله متن در player-textdraw با نسبت متناسب.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): روشن/خاموش کردن جعبه در player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): تنظیم متن یک player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): نمایش یک player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): مخفی کردن یک player-textdraw.
- [IsPlayerTextDrawVisible](IsPlayerTextDrawVisible): چک می‌کنه که آیا player-textdraw برای بازیکن نمایش داده میشه یا نه.
- [IsValidPlayerTextDraw](IsValidPlayerTextDraw): چک می‌کنه که آیا player-textdraw معتبره یا نه.