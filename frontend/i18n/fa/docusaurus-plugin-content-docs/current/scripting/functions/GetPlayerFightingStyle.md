---
title: GetPlayerFightingStyle
sidebar_label: GetPlayerFightingStyle
description: استایل جنگی که در حال حاضر بازیکن از آن استفاده می‌کند را دریافت کنید.
tags: ["player"]
---

## توضیحات

استایل جنگی که در حال حاضر بازیکن از آن استفاده می‌کند را دریافت کنید.

| نام      | توضیحات                                            |
| -------- | ------------------------------------------------- |
| playerid | شناسه بازیکنی که می‌خواهید استایل جنگی‌اش را دریافت کنید. |

## مقدار بازگشتی

شناسه [استایل جنگی](../resources/fightingstyles) بازیکن.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/fightstyle", true))
    {
        new string[64];

        new FIGHT_STYLE:style = GetPlayerFightingStyle(playerid);
        new styleName[11];

        switch (style)
        {
            case FIGHT_STYLE_NORMAL:
            {
                styleName = "normal";
            }
            case FIGHT_STYLE_BOXING:
            {
                styleName = "boxing";
            }
            case FIGHT_STYLE_KUNGFU:
            {
                styleName = "kungfu";
            }
            case FIGHT_STYLE_KNEEHEAD:
            {
                styleName = "kneehead";
            }
            case FIGHT_STYLE_GRABKICK:
            {
                styleName = "grabkick";
            }
            case FIGHT_STYLE_ELBOW:
            {
                styleName = "elbow";
            }
        }
        
        format(string, sizeof(string), "You are using %s fighting style!", styleName);
        SendClientMessage(playerid, 0xFFFFFFAA, string);
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [SetPlayerFightingStyle](SetPlayerFightingStyle): تنظیم استایل جنگی بازیکن.

## منابع مرتبط

- [Fighting Styles](../resources/fightingstyles)