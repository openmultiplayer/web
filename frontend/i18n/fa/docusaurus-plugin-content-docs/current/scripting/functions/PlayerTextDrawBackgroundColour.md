---
title: PlayerTextDrawBackgroundColour
sidebar_label: PlayerTextDrawBackgroundColour
description: رنگ پس‌زمینه یک textdraw بازیکن را تنظیم کنید.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

رنگ پس‌زمینه یک textdraw بازیکن را تنظیم کنید.

| نام              | توضیحات                                                                 |
| ----------------- | -------------------------------------------------------------------------- |
| playerid          | شناسه بازیکن که می‌خواهید رنگ پس‌زمینه textdraw او را تنظیم کنید |
| PlayerText:textid | شناسه textdraw بازیکن که می‌خواهید رنگ پس‌زمینه آن را تنظیم کنید              |
| backgroundColour  | رنگی که textdraw باید به آن تنظیم شود.                             |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی بازنمی‌گرداند.

## مثال‌ها

```c
new PlayerText:gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");
    PlayerTextDrawUseBox(playerid, gMyTextdraw[playerid], true);
    PlayerTextDrawBackgroundColour(playerid, gMyTextdraw[playerid], 0xFFFFFFFF); // رنگ پس‌زمینه gMyTextdraw را به سفید تنظیم کنید
    return 1;
}
```

## نکته‌ها

:::tip

- اگر [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline) با اندازه > 0 استفاده شود، رنگ حاشیه با رنگ استفاده شده در PlayerTextDrawBackgroundColour مطابقت خواهد داشت.
- تغییر مقدار رنگ به نظر می‌رسد که رنگ استفاده شده در PlayerTextDrawColour را تغییر می‌دهد.

:::

## توابع مرتبط

- [CreatePlayerTextDraw](CreatePlayerTextDraw): ایجاد یک textdraw بازیکن.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): حذف یک textdraw بازیکن.
- [PlayerTextDrawColour](PlayerTextDrawColour): تنظیم رنگ متن در یک textdraw بازیکن.
- [PlayerTextDrawBoxColour](PlayerTextDrawBoxColour): تنظیم رنگ جعبه یک textdraw بازیکن.
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