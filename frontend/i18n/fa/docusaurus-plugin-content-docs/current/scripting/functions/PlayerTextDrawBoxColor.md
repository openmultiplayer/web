---
title: PlayerTextDrawBoxColor
sidebar_label: PlayerTextDrawBoxColor
description: تنظیم رنگ جعبه یک textdraw (PlayerTextDrawUseBox)
tags: ["player", "textdraw", "playertextdraw"]
---

## توضیحات

رنگ جعبه یک textdraw (PlayerTextDrawUseBox) رو تنظیم می‌کنه.

| نام               | توضیحات                                                        |
| ----------------- | ------------------------------------------------------------ |
| playerid          | آی‌دی بازیکنی که می‌خوای رنگ جعبه textdraw رو تنظیم کنی.         |
| PlayerText:textid | آی‌دی player textdraw که می‌خوای رنگ جعبه‌ش رو تنظیم کنی.       |
| boxColour         | رنگی که تنظیم می‌شه. آلفا (شفافیت) هم پشتیبانی می‌شه.           |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Example Text");
    PlayerTextDrawUseBox(playerid, pTextdraw[playerid], true);
    PlayerTextDrawBoxColor(playerid, pTextdraw[playerid], 0xFF0000FF); // Jabe qermez bedune shafayit
    return 1;
}
```

## توابع مرتبط

- [CreatePlayerTextDraw](CreatePlayerTextDraw): ایجاد یک player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): حذف یک player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): تنظیم رنگ متن در یک player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): تنظیم رنگ پس زمینه یک player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): تنظیم تراز یک player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): تنظیم فونت یک player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): تنظیم اندازه حروف متن در یک player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): تنظیم اندازه جعبه player-textdraw (یا منطقه قابل کلیک برای PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): فعال/غیرفعال کردن outline روی یک player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): تنظیم سایه روی یک player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): تنظیم فاصله متن در یک player-textdraw به نسبت متناسب.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): فعال/غیرفعال کردن جعبه روی یک player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): تنظیم متن یک player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): نمایش یک player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): مخفی کردن یک player-textdraw.