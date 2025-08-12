---
title: GetPlayerVirtualWorld
sidebar_label: GetPlayerVirtualWorld
description: دریافت دنیای مجازی فعلی که بازیکن در آن است.
tags: ["player"]
---

## توضیحات

دریافت دنیای مجازی فعلی که بازیکن در آن است.

| نام     | توضیحات                                       |
| -------- | ------------------------------------------------- |
| playerid | ID بازیکن برای دریافت دنیای مجازی‌اش. |

## مقادیر برگشتی

ID دنیای مجازی که بازیکن در حال حاضر در آن است.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/world", true))
    {
        new string[32];
        format(string, sizeof(string), "Your virtual world: %i", GetPlayerVirtualWorld(playerid));
        SendClientMessage(playerid, 0xFFFFFFFF, string);
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

دنیاهای مجازی مثل فضاهای داخلی نیستند.

:::

## توابع مرتبط

- [SetPlayerVirtualWorld](SetPlayerVirtualWorld): تنظیم دنیای مجازی بازیکن.
- [GetVehicleVirtualWorld](GetVehicleVirtualWorld): بررسی اینکه وسیله نقلیه در کدام دنیای مجازی است.
- [GetPlayerInterior](GetPlayerInterior): دریافت فضای داخلی فعلی بازیکن.