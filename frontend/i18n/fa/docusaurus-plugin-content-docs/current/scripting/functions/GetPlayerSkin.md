---
title: GetPlayerSkin
sidebar_label: GetPlayerSkin
description: کلاس اسکین بازیکن را برمی‌گرداند.
tags: ["player"]
---

## توضیحات

کلاس اسکین بازیکن را برمی‌گرداند.

| نام      | توضیحات                                      |
| -------- | -------------------------------------------- |
| playerid | بازیکنی که می‌خواهید اسکینش را بگیرید |

## مقدار بازگشتی

[شناسه اسکین](../resources/skins).

**0** اگر نامعتبر باشد.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/myskin", true))
    {
        new string[32];
        new playerSkin = GetPlayerSkin(playerid);

        format(string, sizeof(string), "Your skin id: %d", playerSkin);
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

اسکین جدید را بعد از فراخوانی [SetSpawnInfo](SetSpawnInfo) برمی‌گرداند اما قبل از اینکه بازیکن واقعاً ریسپان شود تا اسکین جدید را دریافت کند. اگر بازیکن با تابع [SpawnPlayer](SpawnPlayer) ریسپان شده باشد، اسکین قدیمی برمی‌گرداند.

:::

## تابع‌های مرتبط

- [SetPlayerSkin](SetPlayerSkin): اسکین بازیکن را تنظیم می‌کند.

## منابع مرتبط

- [شناسه‌های اسکین](../resources/skins)