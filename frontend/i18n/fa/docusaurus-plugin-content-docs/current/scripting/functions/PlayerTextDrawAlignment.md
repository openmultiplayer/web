---
title: PlayerTextDrawAlignment
sidebar_label: PlayerTextDrawAlignment
description: تنظیم تراز متن یک player-textdraw
tags: ["player", "textdraw", "playertextdraw"]
---

## توضیحات

تراز متن یک player-textdraw رو تنظیم می‌کنه.

| نام                       | توضیحات                                                                     |
| ------------------------- | --------------------------------------------------------------------------- |
| playerid                  | آی‌دی بازیکنی که player-textdraw متعلق بهش هست.                             |
| PlayerText:textid         | آی‌دی player-textdraw که می‌خوای ترازش رو تنظیم کنی.                         |
| TEXT_DRAW_ALIGN:alignment | `TEXT_DRAW_ALIGN_LEFT` / `TEXT_DRAW_ALIGN_CENTER` / `TEXT_DRAW_ALIGN_RIGHT` |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
/*
    TEXT_DRAW_ALIGN_LEFT
    TEXT_DRAW_ALIGN_CENTER
    TEXT_DRAW_ALIGN_RIGHT
*/

new PlayerText:gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 425.0, "This is an example textdraw");
    PlayerTextDrawAlignment(playerid, gMyTextdraw[playerid], TEXT_DRAW_ALIGN_CENTER); // Textdraw ro dar vasat taraz mikonim
    return 1;
}
```

## نکات

:::warning

برای تراز 2 (TEXT_DRAW_ALIGN_CENTER) مقادیر x و y در TextSize باید جابجا بشن، نکات [PlayerTextDrawTextSize](PlayerTextDrawTextSize) رو ببین.

:::

:::tip

اگه textdraw از قبل برای بازیکن نمایش داده می‌شه، باید دوباره نمایش داده بشه ([PlayerTextDrawShow](PlayerTextDrawShow)) تا تغییرات این تابع اعمال بشن.

:::

## توابع مرتبط

- [CreatePlayerTextDraw](CreatePlayerTextDraw): ایجاد یک player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): حذف یک player-textdraw.
- [PlayerTextDrawGetAlignment](PlayerTextDrawGetAlignment): دریافت تراز متن یک player-textdraw.
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