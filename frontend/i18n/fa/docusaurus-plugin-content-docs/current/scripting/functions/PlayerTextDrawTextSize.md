---
title: PlayerTextDrawTextSize
sidebar_label: PlayerTextDrawTextSize
description: اندازه یک player textdraw رو تغییر می‌ده (جعبه اگر PlayerTextDrawUseBox فعال باشه و/یا منطقه قابل کلیک برای استفاده با PlayerTextDrawSetSelectable).
tags: ["player", "textdraw", "playertextdraw"]
---

## توضیحات

اندازه یک player textdraw رو تغییر می‌ده (جعبه اگر [PlayerTextDrawUseBox](PlayerTextDrawUseBox) فعال باشه و/یا منطقه قابل کلیک برای استفاده با [PlayerTextDrawSetSelectable](PlayerTextDrawSetSelectable)).

| نام               | توضیحات                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------- |
| playerid          | ID بازیکنی که اندازه player textdraw اون باید تنظیم بشه                                    |
| PlayerText:textid | ID player textdraw که اندازه‌اش باید تنظیم بشه.                                           |
| Float:width       | اندازه روی محور X (چپ/راست) طبق همون grid 640x480 که در TextDrawCreate استفاده می‌شه. |
| Float:height      | اندازه روی محور Y (بالا/پایین) طبق همون grid 640x480 که در TextDrawCreate استفاده می‌شه. |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server!");
    PlayerTextDrawTextSize(playerid, welcomeText[playerid], 2.0, 3.6);

    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```

## نکات

:::tip

- x و y با مقادیر مختلف [PlayerTextDrawAlignment](PlayerTextDrawAlignment) معنی‌های متفاوتی دارن:
    - 1 (چپ): اونها گوشه سمت راست جعبه هستن، مختصات مطلق.
    - 2 (وسط): باید معکوس بشن (دوتا رو جابجا کن) و مقدار x عرض کلی جعبه هست.
    - 3 (راست): x و y مختصات گوشه سمت چپ جعبه هستن
- استفاده از نوع فونت 4 (sprite) و 5 (model preview) X و Y این تابع رو از مختصات گوشه به WIDTH و HEIGHT (افست‌ها) تبدیل می‌کنه.
- جعبه TextDraw 10.0 واحد بالا و 5.0 واحد سمت چپ به عنوان مبدأ (مختصات TextDrawCreate) شروع می‌شه.
- این تابع منطقه قابل کلیک رو برای استفاده با [PlayerTextDrawSetSelectable](PlayerTextDrawSetSelectable) تعریف می‌کنه، چه جعبه‌ای نمایش داده بشه یا نشه.

:::

## توابع مرتبط

- [CreatePlayerTextDraw](CreatePlayerTextDraw): ساخت یک player textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): از بین بردن یک player textdraw.
- [PlayerTextDrawGetTextSize](PlayerTextDrawGetTextSize): گرفتن محور X و محور Y اندازه متن player textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): تنظیم رنگ متن در یک player textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): تنظیم رنگ جعبه یک player textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): تنظیم رنگ پس‌زمینه یک player textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): تنظیم تراز یک player textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): تنظیم فونت یک player textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): تنظیم اندازه حروف متن در یک player textdraw.
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): فعال/غیرفعال کردن outline روی یک player textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): تنظیم سایه روی یک player textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): مقیاس کردن فاصله متن در یک player textdraw به نسبت متناسب.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): فعال/غیرفعال کردن جعبه روی یک player textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): تنظیم متن یک player textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): نمایش یک player textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): مخفی کردن یک player textdraw.