---
title: ClearBanList
sidebar_label: ClearBanList
description: پاک کردن لیست ban.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

پاک کردن لیست ban.

## مقدار بازگشتی

**true** - موفقیت.

**false** - اجرای تابع ناموفق بود.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/clearbanlist", true))
    {
        if (!IsPlayerAdmin(playerid))
        {
            return 1;
        }

        ClearBanList();
        SendClientMessage(playerid, -1, "[SERVER]: Ban list cleared.");
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

می‌توانید لیست ban را در فایل **bans.json** مشاهده کنید.

:::

## توابع مرتبط

- [BlockIpAddress](BlockIpAddress): بلاک کردن آدرس IP از اتصال به سرور برای مدت زمان مشخص.
- [UnBlockIpAddress](UnBlockIpAddress): آنبلاک کردن IP که قبلاً بلاک شده بود.
- [Ban](Ban): ban کردن بازیکن از بازی در سرور.
- [BanEx](BanEx): ban کردن بازیکن با دلیل سفارشی.
- [Kick](Kick): kick کردن بازیکن از سرور.
- [IsBanned](IsBanned): بررسی اینکه آیا آدرس IP داده شده ban است.