---
title: SetPlayerFightingStyle
sidebar_label: SetPlayerFightingStyle
description: سبک جنگ ویژه پلیر رو تنظیم می‌کنه.
tags: ["player"]
---

## توضیحات

سبک جنگ ویژه پلیر رو تنظیم می‌کنه. برای استفاده توی بازی، aim کن و دکمه 'secondary attack' رو فشار بده (به طور پیش‌فرض ENTER).

| نام               | توضیحات                                                           |
| ----------------- | ----------------------------------------------------------------- |
| playerid          | آیدی پلیری که قراره سبک جنگش تنظیم بشه                             |
| FIGHT_STYLE:style | [سبک جنگی](../resources/fightingstyles) که قراره تنظیم بشه        |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/boxing", true) == 0)
    {
        SetPlayerFightingStyle(playerid, FIGHT_STYLE_BOXING);
        SendClientMessage(playerid, 0xFFFFFFAA, "You have changed your fighting style to boxing!");
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

این روی حملات عادی مشت تاثیر نداره - فقط روی حملات ویژه/ثانویه (aim + فشار دادن دکمه 'secondary attack').

:::

## توابع مرتبط

- [GetPlayerFightingStyle](GetPlayerFightingStyle): سبک جنگ پلیر رو دریافت می‌کنه.

## منابع مرتبط

- [Fighting Styles](../resources/fightingstyles)