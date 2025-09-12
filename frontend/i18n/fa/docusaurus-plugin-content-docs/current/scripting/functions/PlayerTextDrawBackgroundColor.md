---
title: PlayerTextDrawBackgroundColor
sidebar_label: PlayerTextDrawBackgroundColor
description: تنظیم رنگ پس زمینه یک player-textdraw
tags: ["player", "textdraw", "playertextdraw"]
---

## توضیحات

رنگ پس زمینه یک player-textdraw رو تنظیم می‌کنه.

| نام               | توضیحات                                                            |
| ----------------- | ------------------------------------------------------------------ |
| playerid          | آی‌دی بازیکنی که player-textdraw متعلق بهش هست                     |
| PlayerText:textid | آی‌دی player-textdraw که می‌خوای رنگ پس زمینه‌ش رو تنظیم کنی      |
| backgroundColour  | رنگی که textdraw باهاش تنظیم می‌شه.                               |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new PlayerText:gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");
    PlayerTextDrawUseBox(playerid, gMyTextdraw[playerid], true);
    PlayerTextDrawBackgroundColor(playerid, gMyTextdraw[playerid], 0xFFFFFFFF); // Range pas zamine gMyTextdraw ro sefid mikonim
    return 1;
}
```

## نکات

:::tip

- اگه از [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline) با اندازه > 0 استفاده کنی، رنگ outline با رنگی که در PlayerTextDrawBackgroundColour استفاده شده مطابقت می‌کنه.
- تغییر مقدار رنگ به نظر می‌رسه که رنگ استفاده شده در PlayerTextDrawColour رو تغییر می‌ده.

:::

## توابع مرتبط

- [CreatePlayerTextDraw](CreatePlayerTextDraw): ایجاد یک player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): حذف یک player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): تنظیم رنگ متن در یک player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): تنظیم رنگ جعبه یک player-textdraw.
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