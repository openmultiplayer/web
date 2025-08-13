---
title: PlayerTextDrawBoxColour
sidebar_label: PlayerTextDrawBoxColour
description: رنگ جعبه textdraw بازیکن را تنظیم کنید (PlayerTextDrawUseBox).
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

رنگ جعبه textdraw بازیکن را تنظیم کنید (PlayerTextDrawUseBox).

| نام              | توضیحات                                                   |
| ----------------- | ------------------------------------------------------------- |
| playerid          | شناسه بازیکن که می‌خواهید رنگ جعبه textdraw او را تنظیم کنید. |
| PlayerText:textid | شناسه textdraw بازیکن که می‌خواهید رنگ جعبه آن را تنظیم کنید.       |
| boxColour         | رنگی که باید تنظیم شود. آلفا (شفافیت) پشتیبانی می‌شود.         |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی بازنمی‌گرداند.

## مثال‌ها

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Example Text");
    PlayerTextDrawUseBox(playerid, pTextdraw[playerid], true);
    PlayerTextDrawBoxColour(playerid, pTextdraw[playerid], 0xFF0000FF); // جعبه قرمز بدون شفافیت
    return 1;
}
```

## توابع مرتبط

- [CreatePlayerTextDraw](CreatePlayerTextDraw): ایجاد یک textdraw بازیکن.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): حذف یک textdraw بازیکن.
- [PlayerTextDrawColour](PlayerTextDrawColour): تنظیم رنگ متن در یک textdraw بازیکن.
- [PlayerTextDrawBackgroundColour](PlayerTextDrawBackgroundColour): تنظیم رنگ پس‌زمینه یک textdraw بازیکن.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): تنظیم چینش یک textdraw بازیکن.
- [PlayerTextDrawFont](PlayerTextDrawFont): تنظیم فونت یک textdraw بازیکن.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): تنظیم اندازه حروف متن در یک textdraw بازیکن.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): تنظیم اندازه جعبه textdraw بازیکن (یا ناحیه قابل کلیک برای PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): تغییر وضعیت حاشیه روی یک textdraw بازیکن.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): تنظیم سایه روی یک textdraw بازیکن.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): تنظیم فاصله متن در یک textdraw بازیکن به نسبت متناسب.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): تغییر وضعیت جعبه روی یک textdraw بازیکن.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): تنظیم متن یک textdraw بازیکن.
- [PlayerTextDrawShow](PlayerTextDrawShow): نمایش یک textdraw بازیکن.
- [PlayerTextDrawHide](PlayerTextDrawHide): مخفی کردن یک textdraw بازیکن.