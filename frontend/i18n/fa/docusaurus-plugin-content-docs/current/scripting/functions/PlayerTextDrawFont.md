---
title: PlayerTextDrawFont
sidebar_label: PlayerTextDrawFont
description: تغییر فونت یک player-textdraw
tags: ["player", "textdraw", "playertextdraw"]
---

## توضیحات

فونت یک player-textdraw رو تغییر می‌دهد.

| نام                 | توضیحات                                                                                                                                  |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| playerid            | آی‌دی بازیکنی که player-textdraw متعلق بهش هست                                                                                          |
| PlayerText:textid   | آی‌دی player-textdraw که می‌خوای فونتش رو تغییر بدی                                                                                       |
| TEXT_DRAW_FONT:font | چهار نوع فونت مثل موارد زیر وجود داره. مقدار فونت بیشتر از 3 نمایش داده نمی‌شه، و هر چیزی بیشتر از 16 کلاینت رو کرش می‌کنه. |

استایل‌های موجود:
![استایل‌های موجود](https://assets.open.mp/assets/images/textdraws/Textdraw_font_styles.png)

فونت‌های موجود:
![فونت‌های موجود](https://assets.open.mp/assets/images/textdraws/Textdraw_Fonts.png)

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
/*
    TEXT_DRAW_FONT_0
    TEXT_DRAW_FONT_1
    TEXT_DRAW_FONT_2
    TEXT_DRAW_FONT_3
    TEXT_DRAW_FONT_SPRITE_DRAW
    TEXT_DRAW_FONT_MODEL_PREVIEW
*/

new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Avval, textdraw ro ijad mikonim
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server!");
    
    // Font player-textdraw 'welcomeText[playerid]' ro be 2 set mikonim.
    PlayerTextDrawFont(playerid, welcomeText[playerid], TEXT_DRAW_FONT_2);
    
    // 'welcomeText[playerid]' ro be player namayesh midim
    PlayerTextDrawShow(playerid, welcomeText[playerid]);

    return 1;
}
```

## توابع مرتبط

- [CreatePlayerTextDraw](CreatePlayerTextDraw): ایجاد یک player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): حذف یک player-textdraw.
- [PlayerTextDrawGetFont](PlayerTextDrawGetFont): دریافت فونت متن یک player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): تنظیم رنگ متن در یک player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): تنظیم رنگ جعبه یک player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): تنظیم رنگ پس زمینه یک player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): تنظیم تراز یک player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): تنظیم اندازه حروف متن در یک player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): تنظیم اندازه جعبه player-textdraw (یا منطقه قابل کلیک برای PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): فعال/غیرفعال کردن outline روی یک player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): تنظیم سایه روی یک player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): تنظیم فاصله متن در یک player-textdraw به نسبت متناسب.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): فعال/غیرفعال کردن جعبه روی یک player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): تنظیم متن یک player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): نمایش یک player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): مخفی کردن یک player-textdraw.