---
title: PlayerTextDrawSetShadow
sidebar_label: PlayerTextDrawSetShadow
description: یک سایه به سمت پایین-راست متن در یک player textdraw اضافه می‌کنه.
tags: ["player", "textdraw", "playertextdraw"]
---

## توضیحات

یک سایه به سمت پایین-راست متن در یک player textdraw اضافه می‌کنه. فونت سایه با فونت متن یکسان هست.

| نام               | توضیحات                                                   |
| ----------------- | --------------------------------------------------------- |
| playerid          | ID بازیکنی که اندازه سایه player textdraw اون باید تنظیم بشه. |
| PlayerText:textid | ID player textdraw که سایه‌اش باید تغییر کنه               |
| shadowSize        | اندازه سایه. 0 سایه رو مخفی می‌کنه.                        |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناموفق بود. یعنی player textdraw وجود نداره.

## مثال‌ها

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server!");
    PlayerTextDrawSetShadow(playerid, welcomeText[playerid], 1);

    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```

## نکات

:::tip

اگر اندازه برای منطقه خیلی بزرگ تنظیم بشه، سایه ممکنه توسط منطقه جعبه بریده بشه.

:::

## توابع مرتبط

- [CreatePlayerTextDraw](CreatePlayerTextDraw): ساخت یک player textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): از بین بردن یک player textdraw.
- [PlayerTextDrawGetShadow](PlayerTextDrawGetShadow): گرفتن اندازه سایه روی یک player textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): تنظیم رنگ متن در یک player textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): تنظیم رنگ جعبه یک player textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): تنظیم رنگ پس‌زمینه یک player textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): تنظیم تراز یک player textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): تنظیم فونت یک player textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): تنظیم اندازه حروف متن در یک player textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): تنظیم اندازه جعبه player textdraw (یا منطقه قابل کلیک برای PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): فعال/غیرفعال کردن outline روی یک player textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): مقیاس کردن فاصله متن در یک player textdraw به نسبت متناسب.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): فعال/غیرفعال کردن جعبه روی یک player textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): تنظیم متن یک player textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): نمایش یک player textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): مخفی کردن یک player textdraw.