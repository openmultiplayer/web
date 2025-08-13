---
title: PlayerTextDrawSetProportional
sidebar_label: PlayerTextDrawSetProportional
description: ظاهراً فاصله متن رو به نسبت متناسب مقیاس می‌کنه.
tags: ["player", "textdraw", "playertextdraw"]
---

## توضیحات

ظاهراً فاصله متن رو به نسبت متناسب مقیاس می‌کنه. وقتی از [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize) استفاده می‌کنی مفیده تا مطمئن بشی متن فاصله کاراکترهای یکسانی داره.

| نام               | توضیحات                                                      |
| ----------------- | ------------------------------------------------------------ |
| playerid          | ID بازیکنی که متناسب بودن player textdraw اون باید تنظیم بشه |
| PlayerText:textid | ID player textdraw که متناسب بودنش باید تنظیم بشه           |
| bool:proportional | 'true' برای فعال کردن متناسب بودن، 'false' برای غیرفعال کردن. |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server!");
    PlayerTextDrawSetProportional(playerid, welcomeText[playerid], true);

    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```

## توابع مرتبط

- [CreatePlayerTextDraw](CreatePlayerTextDraw): ساخت یک player textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): از بین بردن یک player textdraw.
- [PlayerTextDrawIsProportional](PlayerTextDrawIsProportional): بررسی اینکه آیا یک player textdraw متناسب هست یا نه.
- [PlayerTextDrawColor](PlayerTextDrawColor): تنظیم رنگ متن در یک player textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): تنظیم رنگ جعبه یک player textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): تنظیم رنگ پس‌زمینه یک player textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): تنظیم تراز یک player textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): تنظیم فونت یک player textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): تنظیم اندازه حروف متن در یک player textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): تنظیم اندازه جعبه player textdraw (یا منطقه قابل کلیک برای PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): فعال/غیرفعال کردن outline روی یک player textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): تنظیم سایه روی یک player textdraw.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): فعال/غیرفعال کردن جعبه روی یک player textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): تنظیم متن یک player textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): نمایش یک player textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): مخفی کردن یک player textdraw.