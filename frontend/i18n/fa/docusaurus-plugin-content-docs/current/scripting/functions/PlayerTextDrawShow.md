---
title: PlayerTextDrawShow
sidebar_label: PlayerTextDrawShow
description: نمایش یک player-textdraw به بازیکنی که براش ساخته شده
tags: ["player", "textdraw", "playertextdraw"]
---

## توضیحات

یک player-textdraw رو به بازیکنی که براش ساخته شده نمایش می‌ده.

| نام               | توضیحات                                                  |
| ----------------- | -------------------------------------------------------- |
| playerid          | آی‌دی بازیکنی که می‌خوای textdraw براش نمایش بدی         |
| PlayerText:textid | آی‌دی textdraw که باید نمایش داده بشه                     |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");

    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```

## نکات

:::tip

player-textdraw فقط برای بازیکنی که براش ساخته شده معتبر هست. یعنی نمی‌تونی یک player-textdraw که برای یک بازیکن خاص ساخته شده رو به بازیکن دیگه ای نمایش بدی.

:::

## توابع مرتبط

- [PlayerTextDrawHide](PlayerTextDrawHide): مخفی کردن یک player-textdraw.
- [CreatePlayerTextDraw](CreatePlayerTextDraw): ایجاد یک player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): حذف یک player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): تنظیم رنگ متن در یک player-textdraw.
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