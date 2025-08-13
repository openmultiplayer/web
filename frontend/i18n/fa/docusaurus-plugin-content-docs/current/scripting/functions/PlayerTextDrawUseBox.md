---
title: PlayerTextDrawUseBox
sidebar_label: PlayerTextDrawUseBox
description: جعبه روی یک player textdraw رو فعال/غیرفعال می‌کنه.
tags: ["player", "textdraw", "playertextdraw"]
---

## توضیحات

جعبه روی یک player textdraw رو فعال/غیرفعال می‌کنه.

| نام               | توضیحات                                            |
| ----------------- | -------------------------------------------------- |
| playerid          | ID بازیکنی که جعبه textdraw اون باید فعال/غیرفعال بشه |
| PlayerText:textid | ID player textdraw که جعبه‌اش باید فعال/غیرفعال بشه |
| bool:boxEnabled   | **true** برای استفاده از جعبه یا **false** برای عدم استفاده از جعبه |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new PlayerText:gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 40.0, 140.0, "_~N~Example text!~N~_");
    PlayerTextDrawUseBox(playerid, gMyTextdraw[playerid], true);
    PlayerTextDrawBoxColor(playerid, gMyTextdraw[playerid], 0x00000066); // Set the box color to a semi-transparent black
    return 1;
}
```

## توابع مرتبط

- [CreatePlayerTextDraw](CreatePlayerTextDraw): ساخت یک player textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): از بین بردن یک player textdraw.
- [PlayerTextDrawIsBox](PlayerTextDrawIsBox): بررسی اینکه آیا یک player textdraw جعبه هست یا نه.
- [PlayerTextDrawColor](PlayerTextDrawColor): تنظیم رنگ متن در یک player textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): تنظیم رنگ جعبه یک player textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): تنظیم رنگ پس‌زمینه یک player textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): تنظیم تراز یک player textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): تنظیم فونت یک player textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): تنظیم اندازه حروف متن در یک player textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): تنظیم اندازه جعبه player textdraw (یا منطقه قابل کلیک برای PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): فعال/غیرفعال کردن outline روی یک player textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): تنظیم سایه روی یک player textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): مقیاس کردن فاصله متن در یک player textdraw به نسبت متناسب.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): تنظیم متن یک player textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): نمایش یک player textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): مخفی کردن یک player textdraw.