---
title: PlayerTextDrawGetBoxColor
sidebar_label: PlayerTextDrawGetBoxColor
description: رنگ جعبه یک textdraw بازیکن را دریافت کنید.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

رنگ جعبه یک textdraw بازیکن را دریافت کنید.

| نام              | توضیحات                                |
| ----------------- | ------------------------------------------ |
| playerid          | شناسه بازیکن.                      |
| PlayerText:textid | شناسه textdraw برای دریافت رنگ جعبه آن. |

## مقادیر بازگشتی

رنگ جعبه textdraw بازیکن را برمی‌گرداند.

## مثال‌ها

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");
    PlayerTextDrawUseBox(playerid, welcomeText[playerid], true);
    PlayerTextDrawBoxColor(playerid, welcomeText[playerid], 0xFF0000AA);
    PlayerTextDrawShow(playerid, welcomeText[playerid]);

    new boxColor = PlayerTextDrawGetBoxColor(playerid, welcomeText[playerid]);
    printf("Box Color: 0x%08X", boxColor); // Box Color: 0xFF0000AA
    return 1;
}
```

## توابع مرتبط

- [PlayerTextDrawCreate](PlayerTextDrawCreate): ایجاد یک textdraw بازیکن.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): حذف یک textdraw بازیکن.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): تنظیم رنگ جعبه یک textdraw بازیکن.
- [PlayerTextDrawColor](PlayerTextDrawColor): تنظیم رنگ متن در یک textdraw بازیکن.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): تنظیم رنگ پس‌زمینه یک textdraw بازیکن.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): تنظیم چینش یک textdraw بازیکن.
- [PlayerTextDrawFont](PlayerTextDrawFont): تنظیم فونت یک textdraw بازیکن.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): تنظیم اندازه حروف متن در یک textdraw بازیکن.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): تنظیم اندازه جعبه textdraw بازیکن.
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): تغییر وضعیت حاشیه روی یک textdraw بازیکن.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): تنظیم سایه روی یک textdraw بازیکن.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): تنظیم فاصله متن در یک textdraw بازیکن به نسبت متناسب.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): تغییر وضعیت جعبه روی یک textdraw بازیکن.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): تنظیم متن یک textdraw بازیکن.
- [PlayerTextDrawShow](PlayerTextDrawShow): نمایش یک textdraw بازیکن.
- [PlayerTextDrawHide](PlayerTextDrawHide): مخفی کردن یک textdraw بازیکن.