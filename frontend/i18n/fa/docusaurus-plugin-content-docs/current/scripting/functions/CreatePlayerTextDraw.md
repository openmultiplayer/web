---
title: CreatePlayerTextDraw
sidebar_label: CreatePlayerTextDraw
description: برای یک بازیکن textdraw ایجاد می‌کند.
tags: ["player", "textdraw", "playertextdraw"]
---

## توضیحات

برای یک بازیکن textdraw ایجاد می‌کند. این می‌تواند به عنوان راهی برای دور زدن محدودیت text-draw عمومی استفاده شود.

| نام              | توضیحات                              |
| ---------------- | ------------------------------------ |
| playerid         | ID بازیکنی که برایش textdraw ایجاد شود |
| Float:x          | مختصات X                             |
| Float:y          | مختصات Y                             |
| const format[]   | متن textdraw.                        |
| OPEN_MP_TAGS:... | تعداد نامحدود آرگومان از هر نوع.      |

## مقادیر بازگشتی

ID textdraw ایجاد شده

## مثال‌ها

```c
// این متغیر برای ذخیره id textdraw استفاده می‌شود
// تا بتوانیم در سراسر اسکریپت از آن استفاده کنیم
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // اول، textdraw را ایجاد کنید
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");

    // حالا آن را نمایش دهید
    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```

## نکات

:::tip

Player-textdraw ها هنگام قطع اتصال بازیکن خودکار حذف می‌شوند.

:::

:::warning

کدهای نگاشت کلیدهای صفحه کلید (مثل ~k~~VEHICLE_ENTER_EXIT~) بعد از کاراکتر 255 کار نمی‌کنند.

:::

## توابع مرتبط

- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): حذف player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): تنظیم رنگ متن در player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): تنظیم رنگ جعبه player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): تنظیم رنگ پس‌زمینه player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): تنظیم تراز player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): تنظیم فونت player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): تنظیم اندازه حروف متن در player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): تنظیم اندازه جعبه player-textdraw (یا منطقه قابل کلیک برای PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): تغییر وضعیت outline در player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): تنظیم سایه player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): مقیاس کردن فاصله متن در player-textdraw به نسبت متناسب.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): تغییر وضعیت جعبه در player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): تنظیم متن player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): نمایش player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): مخفی کردن player-textdraw.
- [IsPlayerTextDrawVisible](IsPlayerTextDrawVisible): بررسی اینکه آیا player-textdraw برای بازیکن نمایش داده می‌شود.
- [IsValidPlayerTextDraw](IsValidPlayerTextDraw): بررسی معتبر بودن player-textdraw.
- [PlayerTextDrawBackgroundColour](PlayerTextDrawBackgroundColour): تنظیم رنگ پس‌زمینه player-textdraw.
- [PlayerTextDrawBoxColour](PlayerTextDrawBoxColour): تنظیم رنگ جعبه textdraw (PlayerTextDrawUseBox).
- [PlayerTextDrawColour](PlayerTextDrawColour): تنظیم رنگ متن player-textdraw.
- [PlayerTextDrawGetAlignment](PlayerTextDrawGetAlignment): دریافت تراز متن player-textdraw.
- [PlayerTextDrawGetBackgroundColour](PlayerTextDrawGetBackgroundColour): دریافت رنگ پس‌زمینه player-textdraw.
- [PlayerTextDrawGetBoxColour](PlayerTextDrawGetBoxColour): دریافت رنگ جعبه player-textdraw.
- [PlayerTextDrawGetColour](PlayerTextDrawGetColour): دریافت رنگ متن player-textdraw.
- [PlayerTextDrawGetFont](PlayerTextDrawGetFont): دریافت فونت متن player-textdraw.
- [PlayerTextDrawGetLetterSize](PlayerTextDrawGetLetterSize): دریافت عرض و ارتفاع حروف.
- [PlayerTextDrawGetOutline](PlayerTextDrawGetOutline): دریافت اندازه outline player-textdraw.
- [PlayerTextDrawGetPos](PlayerTextDrawGetPos): دریافت موقعیت player-textdraw.
- [PlayerTextDrawGetPreviewModel](PlayerTextDrawGetPreviewModel): دریافت مدل پیش‌نمایش player-textdraw سه‌بعدی.
- [PlayerTextDrawGetPreviewRot](PlayerTextDrawGetPreviewRot): دریافت چرخش و زوم مدل پیش‌نمایش سه‌بعدی player-textdraw.
- [PlayerTextDrawGetPreviewVehicleColours](PlayerTextDrawGetPreviewVehicleColours): دریافت رنگ‌های پیش‌نمایش وسیله نقلیه player-textdraw سه‌بعدی.
- [PlayerTextDrawGetShadow](PlayerTextDrawGetShadow): دریافت اندازه سایه player-textdraw.
- [PlayerTextDrawGetString](PlayerTextDrawGetString): دریافت متن player-textdraw.
- [PlayerTextDrawGetTextSize](PlayerTextDrawGetTextSize): دریافت محور X و محور Y اندازه متن player-textdraw.
- [PlayerTextDrawIsBox](PlayerTextDrawIsBox): بررسی اینکه آیا player-textdraw جعبه است.
- [PlayerTextDrawIsProportional](PlayerTextDrawIsProportional): بررسی اینکه آیا player-textdraw متناسب است.
- [PlayerTextDrawIsSelectable](PlayerTextDrawIsSelectable): بررسی اینکه آیا player-textdraw قابل انتخاب است.
- [PlayerTextDrawSetPos](PlayerTextDrawSetPos): تنظیم موقعیت player-textdraw.
- [PlayerTextDrawSetPreviewVehicleColours](PlayerTextDrawSetPreviewVehicleColours): تنظیم رنگ وسیله نقلیه در پیش‌نمایش مدل player-textdraw (اگر وسیله نقلیه نمایش داده شود).

## منابع مرتبط

- [TextDraw Sprites](../resources/textdrawsprites)