---
title: PlayerTextDrawSetSelectable
sidebar_label: PlayerTextDrawSetSelectable
description: فعال/غیرفعال می‌کنه که آیا یک player textdraw قابل انتخاب باشه یا نه.
tags: ["player", "textdraw", "playertextdraw"]
---

## توضیحات

فعال/غیرفعال می‌کنه که آیا یک player textdraw قابل انتخاب باشه یا نه.

| نام               | توضیحات                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------- |
| playerid          | ID بازیکنی که قابل انتخاب بودن player textdraw اون باید تنظیم بشه.                          |
| PlayerText:textid | ID player textdraw که قابل انتخاب بودنش باید تنظیم بشه.                                    |
| bool:selectable   | player textdraw رو قابل انتخاب 'true' یا غیرقابل انتخاب 'false' تنظیم کن. به طور پیش‌فرض 'false' هست. |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server");
    PlayerTextDrawTextSize(playerid, welcomeText[playerid], 30.0, 10.0);
    
    // Set 'welcomeText[playerid]' selectable
    PlayerTextDrawSetSelectable(playerid, welcomeText[playerid], true);

    // Enable select textdraw for player
    SelectTextDraw(playerid, 0xFF0000FF);

    // Show 'welcomeText[playerid]' to the player
    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```

## نکات

:::tip

از [PlayerTextDrawTextSize](PlayerTextDrawTextSize) استفاده کن تا منطقه قابل کلیک رو تعریف کنی.

:::

:::warning

[PlayerTextDrawSetSelectable](PlayerTextDrawSetSelectable) و [SelectTextDraw](SelectTextDraw) حتماً باید قبل از اینکه textdraw به بازیکن نمایش داده بشه استفاده بشن.

:::

## توابع مرتبط

- [PlayerTextDrawIsSelectable](PlayerTextDrawIsSelectable): بررسی اینکه آیا یک player textdraw قابل انتخاب هست یا نه.
- [SelectTextDraw](SelectTextDraw): فعال کردن ماوس تا بازیکن بتونه یک textdraw انتخاب کنه
- [CancelSelectTextDraw](CancelSelectTextDraw): لغو انتخاب textdraw با ماوس

## کال‌بک‌های مرتبط

- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): زمانی فراخوانی می‌شه که بازیکن روی یک player textdraw کلیک کنه.