---
title: SelectTextDraw
sidebar_label: SelectTextDraw
description: کرسر رو نمایش می‌ده و به بازیکن اجازه می‌ده که یه textdraw انتخاب کنه.
tags: ["textdraw"]
---

## توضیحات

کرسر رو نمایش می‌ده و به بازیکن اجازه می‌ده که یه textdraw انتخاب کنه

| نام        | توضیحات                                                    |
| ----------- | -------------------------------------------------------------- |
| playerid    | ID بازیکن که باید بتونه textdraw انتخاب کنه  |
| hoverColour | رنگ textdraw وقتی موس روش hover می‌کنه (RGBA) |

## مقدار برگشتی

این تابع مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/tdselect", true))
    {
        SelectTextDraw(playerid, 0x00FF00FF); // Highlight green when hovering over
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Please select a textdraw!");
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

متن (TEXT) هست که وقتی hover می‌شه برجسته می‌شه، نه جعبه (box) - اگر جعبه نمایش داده بشه.

:::

## توابع مرتبط

- [CancelSelectTextDraw](CancelSelectTextDraw): لغو انتخاب textdraw با موس
- [TextDrawSetSelectable](TextDrawSetSelectable): تنظیم اینکه آیا textdraw از طریق SelectTextDraw قابل انتخابه یا نه
- [PlayerTextDrawSetSelectable](PlayerTextDrawSetSelectable): تنظیم اینکه آیا player-textdraw از طریق SelectTextDraw قابل انتخابه یا نه

## کالبک‌های مرتبط

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): وقتی بازیکن روی textdraw کلیک می‌کنه صدا زده می‌شه.
- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): وقتی بازیکن روی player-textdraw کلیک می‌کنه صدا زده می‌شه.