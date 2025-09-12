---
title: PlayerTextDrawColor
sidebar_label: PlayerTextDrawColor
description: تنظیم رنگ متن یک player-textdraw
tags: ["player", "textdraw", "playertextdraw"]
---

## توضیحات

رنگ متن یک player-textdraw رو تنظیم می‌کنه.

| نام               | توضیحات                                             |
| ----------------- | --------------------------------------------------- |
| playerid          | آی‌دی بازیکنی که textdraw متعلق بهش هست            |
| PlayerText:textid | TextDraw که باید تغییر کنه.                         |
| textColour        | رنگ در فرمت هگزادسیمال.                            |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Example Text");
    PlayerTextDrawColor(playerid, pTextdraw[playerid], 0xFF0000FF); // Matn qermez

    PlayerTextDrawShow(playerid, pTextdraw[playerid]);
    return 1;
}
```

## نکات

:::tip

- می‌تونی از رنگ‌های Gametext هم در textdraw ها استفاده کنی. (مثل `~r~` `~g~` `~b~`)
- textdraw باید دوباره برای بازیکن نمایش داده بشه تا رنگ بروزرسانی بشه.

:::

## توابع مرتبط

- [CreatePlayerTextDraw](CreatePlayerTextDraw): ایجاد یک player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): حذف یک player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): تنظیم رنگ جعبه یک player-textdraw.
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