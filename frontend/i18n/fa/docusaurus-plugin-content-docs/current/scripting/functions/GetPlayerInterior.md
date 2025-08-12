---
title: GetPlayerInterior
sidebar_label: GetPlayerInterior
description: دریافت فضای داخلی فعلی بازیکن.
tags: ["player"]
---

## توضیحات

دریافت فضای داخلی فعلی بازیکن. لیست فضاهای داخلی شناخته شده همراه با موقعیت‌هایشان در این صفحه موجود است.

| نام     | توضیحات                           |
| -------- | ------------------------------------- |
| playerid | بازیکنی که می‌خواهید ID فضای داخلی‌اش را دریافت کنید. |

## مقادیر برگشتی

ID فضای داخلی که بازیکن در حال حاضر در آن قرار دارد.

## مثال‌ها

```c
public OnPlayerCommandText(playerid,text[])
{
    if (strcmp(cmdtext, "/int", true) == 0)
    {
        new string[64];
        format(string, sizeof(string), "You are in interior %i", GetPlayerInterior(playerid));
        SendClientMessage(playerid, 0xFF8000FF, string);
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

همیشه فضای داخلی 0 را برای NPCها برمی‌گرداند.

:::

## توابع مرتبط

- [SetPlayerInterior](SetPlayerInterior): تنظیم فضای داخلی بازیکن.
- [GetPlayerVirtualWorld](GetPlayerVirtualWorld): بررسی اینکه بازیکن در کدام دنیای مجازی است.