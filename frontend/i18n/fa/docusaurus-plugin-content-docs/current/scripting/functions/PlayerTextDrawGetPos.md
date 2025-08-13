---
title: PlayerTextDrawGetPos
sidebar_label: PlayerTextDrawGetPos
description: موقعیت یک player-textdraw رو برمی‌گردونه.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

موقعیت (مختصات x و y روی صفحه) یک player-textdraw رو برمی‌گردونه.

| اسم               | توضیحات                                                             |
| ----------------- | ----------------------------------------------------------------------- |
| playerid          | شناسه بازیکن.                                                   |
| Playertext:textid | شناسه player-textdraw که می‌خوای position رو ازش بگیری.                   |
| &Float:x          | متغیر float برای ذخیره X coordinate، که به صورت reference پاس داده میشه. |
| &Float:y          | متغیر float برای ذخیره Y coordinate، که به صورت reference پاس داده میشه. |

## مثال‌ها

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");
    PlayerTextDrawShow(playerid, welcomeText[playerid]);

    new Float:x, Float:y;
    PlayerTextDrawGetPos(playerid, welcomeText[playerid], x, y);
    // x = 320.0
    // y = 240.0
}
```

## توابع مرتبط

- [PlayerTextDrawSetPos](PlayerTextDrawSetPos): تنظیم موقعیت یک player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): پاک کردن یک player-textdraw.
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