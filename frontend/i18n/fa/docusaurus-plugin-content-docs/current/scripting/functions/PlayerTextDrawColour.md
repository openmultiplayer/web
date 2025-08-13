---
title: PlayerTextDrawColour
sidebar_label: PlayerTextDrawColour
description: رنگ متن یک textdraw بازیکن را تنظیم کنید.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

رنگ متن یک textdraw بازیکن را تنظیم کنید

| نام              | توضیحات                                              |
| ----------------- | -------------------------------------------------------- |
| playerid          | شناسه بازیکن که می‌خواهید رنگ textdraw او را تنظیم کنید |
| PlayerText:textid | TextDraw برای تغییر.                                  |
| textColour        | رنگ در فرمت هگزادسیمال.                        |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی بازنمی‌گرداند.

## مثال‌ها

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Example Text");
    PlayerTextDrawColour(playerid, pTextdraw[playerid], 0xFF0000FF); // متن قرمز

    PlayerTextDrawShow(playerid, pTextdraw[playerid]);
    return 1;
}
```

## نکته‌ها

:::tip

- همچنین می‌توانید از رنگ‌های Gametext در textdraw ها استفاده کنید. (مثل `~r~` `~g~` `~b~`)
- textdraw باید دوباره به بازیکن نشان داده شود تا رنگ به‌روزرسانی شود.

:::

## توابع مرتبط

- [CreatePlayerTextDraw](CreatePlayerTextDraw): ایجاد یک textdraw بازیکن.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): حذف یک textdraw بازیکن.
- [PlayerTextDrawBoxColour](PlayerTextDrawBoxColour): تنظیم رنگ جعبه یک textdraw بازیکن.
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