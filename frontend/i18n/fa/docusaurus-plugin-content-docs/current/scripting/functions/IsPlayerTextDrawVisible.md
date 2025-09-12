---
title: IsPlayerTextDrawVisible
sidebar_label: IsPlayerTextDrawVisible
description: چک می‌کنه که آیا یه player-textdraw برای بازیکن نمایش داده شده یا نه.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا یه player-textdraw برای بازیکن نمایش داده شده یا نه.

| نام               | توضیحات                         |
| ----------------- | ------------------------------- |
| playerid          | ID بازیکنی که باید چک بشه.      |
| PlayerText:textid | ID player-textdraw.             |

## مقادیر برگشتی

**true** - Player-Textdraw برای بازیکن نمایش داده شده.

**false** - Player-Textdraw برای بازیکن نمایش داده نشده.

## مثال‌ها

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");
    PlayerTextDrawShow(playerid, welcomeText[playerid]);

    if (IsPlayerTextDrawVisible(playerid, welcomeText[playerid]))
    {
        // Player-Textdraw is shown
    }
    else
    {
        // Player-Textdraw is not shown
    }
}
```

## توابع مرتبط

- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): نابود کردن یه player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): تنظیم رنگ متن در player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): تنظیم رنگ جعبه player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): تنظیم رنگ پس‌زمینه player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): تنظیم تراز player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): تنظیم فونت player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): تنظیم اندازه حروف متن در player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): تنظیم اندازه جعبه player-textdraw (یا ناحیه قابل کلیک برای PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): فعال/غیرفعال کردن outline روی player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): تنظیم سایه روی player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): تنظیم فاصله متن در player-textdraw به نسبت تناسبی.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): فعال/غیرفعال کردن جعبه روی player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): تنظیم متن player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): نمایش player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): مخفی کردن player-textdraw.
- [IsValidPlayerTextDraw](IsValidPlayerTextDraw): چک می‌کنه که آیا player-textdraw معتبره یا نه.