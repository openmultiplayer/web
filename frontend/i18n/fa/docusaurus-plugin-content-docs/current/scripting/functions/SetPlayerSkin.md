---
title: SetPlayerSkin
sidebar_label: SetPlayerSkin
description: اسکین بازیکن را تنظیم کنید.
tags: ["player"]
---

## توضیحات

اسکین بازیکن را تنظیم کنید.

| نام      | توضیحات                                       |
| -------- | --------------------------------------------- |
| playerid | شناسه بازیکن.                                 |
| skinid   | شناسه [اسکین](../resources/skins) برای تنظیم. |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود. بازیکن متصل نیست.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/cj", true) == 0)
    {
        SetPlayerSkin(playerid, 0); // CJ اسکین
        SendClientMessage(playerid, 0xFFFFFFFF, "اسکین شما به CJ تغییر کرد!");
        return 1;
    }
    return 0;
}
```

## نکته‌ها

::tip

- از [SpawnPlayer](SpawnPlayer) پس از تغییر اسکین استفاده کردن برای اعمال تغییرات توصیه می‌شود.
- برخی اسکین‌ها معتبر نیستند. در صورت استفاده از اسکین نامعتبر، بازی ممکن است کرش کند.

:::

## توابع مرتبط

- [GetPlayerSkin](GetPlayerSkin): شناسه اسکین بازیکن را دریافت کنید.
- [SetSpawnInfo](SetSpawnInfo): تنظیمات spawn برای بازیکن تنظیم کنید.
- [SpawnPlayer](SpawnPlayer): مجبور کردن یک بازیکن به spawn شدن.

## منابع مرتبط

- [شناسه‌های اسکین](../resources/skins)
