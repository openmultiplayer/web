---
title: PlayerTextDrawLetterSize
sidebar_label: PlayerTextDrawLetterSize
description: تنظیم عرض و ارتفاع حروف در یک player-textdraw
tags: ["player", "textdraw", "playertextdraw"]
---

## توضیحات

عرض و ارتفاع حروف در یک player-textdraw رو تنظیم می‌کنه.

| نام               | توضیحات                                                            |
| ----------------- | ------------------------------------------------------------------ |
| playerid          | آی‌دی بازیکنی که player-textdraw متعلق بهش هست                      |
| PlayerText:textid | آی‌دی player-textdraw که می‌خوای اندازه حروفش رو تغییر بدی           |
| Float:width       | عرض یک کاراکتر.                                                    |
| Float:height      | ارتفاع یک کاراکتر.                                                  |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");
    PlayerTextDrawLetterSize(playerid, welcomeText[playerid], 3.2, 5.1);
    
    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```

## نکات

:::tip

وقتی از این تابع صرفاً برای تأثیر روی جعبه textdraw استفاده می‌کنی، 'Y' رو در 0.135 ضرب کن تا به اندازه‌گیری مشابه TextDrawTextSize تبدیل بشه.

:::

:::tip

فونت‌ها با نسبت X به Y برابر 1 به 4 بهترین ظاهر رو دارن (مثلاً اگه x برابر 0.5 باشه، y باید 2 باشه).

:::

## توابع مرتبط

- [CreatePlayerTextDraw](CreatePlayerTextDraw): ایجاد یک player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): حذف یک player-textdraw.
- [PlayerTextDrawGetLetterSize](PlayerTextDrawGetLetterSize): دریافت عرض و ارتفاع حروف.
- [PlayerTextDrawColor](PlayerTextDrawColor): تنظیم رنگ متن در یک player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): تنظیم رنگ جعبه یک player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): تنظیم رنگ پس زمینه یک player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): تنظیم تراز یک player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): تنظیم فونت یک player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): تنظیم اندازه جعبه player-textdraw (یا منطقه قابل کلیک برای PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): فعال/غیرفعال کردن outline روی یک player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): تنظیم سایه روی یک player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): تنظیم فاصله متن در یک player-textdraw به نسبت متناسب.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): فعال/غیرفعال کردن جعبه روی یک player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): تنظیم متن یک player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): نمایش یک player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): مخفی کردن یک player-textdraw.