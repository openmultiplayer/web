---
title: PlayerTextDrawSetOutline
sidebar_label: PlayerTextDrawSetOutline
description: outline یک player-textdraw رو تنظیم می‌کنه.
tags: ["player", "textdraw", "playertextdraw"]
---

## توضیحات

outline یک player-textdraw رو تنظیم می‌کنه. رنگ outline قابل تغییر نیست مگر اینکه از [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor) استفاده کنی.

| اسم              | توضیحات                                                      |
| ----------------- | ---------------------------------------------------------------- |
| playerid          | شناسه بازیکن که می‌خوای outline player-textdraw رو براش تنظیم کنی |
| PlayerText:textid | شناسه player-textdraw که می‌خوای outline رو براش تنظیم کنی              |
| outlineSize       | ضخامت outline.                                    |

## مقدار برگشتی

این تابع مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server!");
    PlayerTextDrawSetOutline(playerid, welcomeText[playerid], 1);

    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```

## توابع مرتبط

- [CreatePlayerTextDraw](CreatePlayerTextDraw): ساخت یک player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): پاک کردن یک player-textdraw.
- [PlayerTextDrawGetOutline](PlayerTextDrawGetOutline): دریافت اندازه outline در player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): تنظیم رنگ متن در player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): تنظیم رنگ جعبه player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): تنظیم رنگ background یک player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): تنظیم alignment یک player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): تنظیم فونت یک player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): تنظیم اندازه حروف متن در player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): تنظیم اندازه جعبه player-textdraw (یا ناحیه قابل کلیک برای PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): تنظیم سایه در player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): تنظیم فاصله متن در player-textdraw با نسبت متناسب.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): روشن/خاموش کردن جعبه در player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): تنظیم متن یک player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): نمایش یک player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): مخفی کردن یک player-textdraw.