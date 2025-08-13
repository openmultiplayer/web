---
title: HideGameTextForAll
sidebar_label: HideGameTextForAll
description: متوقف کردن نمایش یه استایل gametext برای همه بازیکنان.
tags: ["player", "gametext"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

متوقف کردن نمایش یه استایل gametext برای همه بازیکنان.

| نام            | توضیحات                                                      |
| -------------- | ------------------------------------------------------------ |
| style          | [استایل](../resources/gametextstyles) متنی که باید مخفی بشه.  |

## مقادیر برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/hidegametext3", true))
    {
        if (!IsPlayerAdmin(playerid))
        {
            return 1;
        }

        HideGameTextForAll(3);
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [HideGameTextForPlayer](HideGameTextForPlayer): متوقف کردن نمایش یه استایل gametext به بازیکن.
- [GameTextForPlayer](GameTextForPlayer): نمایش gametext به یه بازیکن.
- [GameTextForAll](GameTextForAll): نمایش gametext به همه بازیکنان.
- [TextDrawHideForAll](TextDrawHideForAll): مخفی کردن textdraw برای همه بازیکنان.