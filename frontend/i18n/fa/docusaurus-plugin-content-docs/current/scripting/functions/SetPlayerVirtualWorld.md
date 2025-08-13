---
title: SetPlayerVirtualWorld
sidebar_label: SetPlayerVirtualWorld
description: تنظیم دنیای مجازی یک بازیکن.
tags: ["player"]
---

## توضیحات

تنظیم دنیای مجازی یک بازیکن. آنها فقط می‌توانند بازیکنان یا وسایل نقلیه دیگری را ببینند که در همان دنیا هستند.

| نام          | توضیحات                                                   |
| ------------ | --------------------------------------------------------- |
| playerid     | شناسه بازیکنی که می‌خواهید دنیای مجازی آن را تنظیم کنید.   |
| virtualWorld | شناسه دنیای مجازی برای قرار دادن بازیکن در آن.           |

## مقدار بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا شکست خورد. این به معنای آن است که بازیکن متصل نیست.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/world3", true) == 0)
    {
        SetPlayerVirtualWorld(playerid, 3);
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

دنیای مجازی پیش‌فرض ۰ است.

:::

## توابع مرتبط

- [GetPlayerVirtualWorld](GetPlayerVirtualWorld): بررسی اینکه بازیکن در چه دنیای مجازی است.
- [SetVehicleVirtualWorld](SetVehicleVirtualWorld): تنظیم دنیای مجازی یک وسیله نقلیه.