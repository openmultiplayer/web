---
title: PlayerTextDrawGetAlignment
sidebar_label: PlayerTextDrawGetAlignment
description: دریافت تراز متن یک player-textdraw
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

تراز متن یک player-textdraw رو دریافت می‌کنه.

| نام               | توضیحات                                                      |
| ----------------- | ------------------------------------------------------------ |
| playerid          | آی‌دی بازیکن.                                                |
| PlayerText:textid | آی‌دی player-textdraw که می‌خوای تراز متنش رو دریافت کنی.     |

## مقادیر بازگشتی

تراز متن player-textdraw رو برمی‌گردونه.

## مثال‌ها

```c
new PlayerText:gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 425.0, "This is an example textdraw");
    PlayerTextDrawAlignment(playerid, gMyTextdraw[playerid], TEXT_DRAW_ALIGN_CENTER);
    
    new TEXT_DRAW_ALIGN:align = PlayerTextDrawGetAlignment(playerid, gMyTextdraw[playerid]);
    // align = TEXT_DRAW_ALIGN_CENTER
    return 1;
}
```

## توابع مرتبط

- [PlayerTextDrawCreate](PlayerTextDrawCreate): ایجاد یک player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): حذف یک player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): تنظیم تراز یک player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): تنظیم رنگ متن در یک player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): تنظیم رنگ جعبه یک player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): تنظیم رنگ پس زمینه یک player-textdraw.
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
- [IsPlayerTextDrawVisible](IsPlayerTextDrawVisible): بررسی اینکه آیا player-textdraw برای بازیکن نمایش داده می‌شه یا نه.
- [IsValidPlayerTextDraw](IsValidPlayerTextDraw): بررسی اینکه آیا player-textdraw معتبر هست یا نه.