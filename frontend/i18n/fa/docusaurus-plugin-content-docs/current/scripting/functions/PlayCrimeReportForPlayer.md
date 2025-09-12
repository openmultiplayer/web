---
title: PlayCrimeReportForPlayer
sidebar_label: PlayCrimeReportForPlayer
description: این تابع گزارش جرم برای بازیکن پخش می‌کند - درست مثل تک‌نفره وقتی CJ جرم انجام می‌دهد.
tags: ["player"]
---

## توضیحات

این تابع گزارش جرم برای بازیکن پخش می‌کند - درست مثل تک‌نفره وقتی CJ جرم انجام می‌دهد.

| نام       | توضیحات                                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------------------ |
| playerid  | ID بازیکنی که گزارش جرم را خواهد شنید.                                                                                          |
| suspectid | ID بازیکن مظنون که در گزارش جرم توصیف خواهد شد.                                                                                  |
| crime     | [crime ID](../resources/crimelist)، که به عنوان 10-code گزارش می‌شود (مثل 10-16 اگر 16 به عنوان crimeid پاس داده شود). |

## مقدار بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - اجرای تابع ناموفق بود. این به معنای آن است که بازیکن مشخص شده وجود ندارد.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/suspect"))
    {
        PlayCrimeReportForPlayer(playerid, 0, 16);
        SendClientMessage(playerid, 0xFFFFFFFF, "ID 0 committed a crime (10-16).");
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [PlayerPlaySound](PlayerPlaySound): صدایی برای بازیکن پخش کن.

## منابع مرتبط

- [Crime IDs](../resources/crimelist)