---
title: GetPlayerNetworkStats
sidebar_label: GetPlayerNetworkStats
description: دریافت آمار شبکه بازیکن و ذخیره آن در یک رشته.
tags: ["player", "network monitoring"]
---

## توضیحات

دریافت آمار شبکه بازیکن و ذخیره آن در یک رشته.

| نام                   | توضیحات                                                   |
| ---------------------- | ------------------------------------------------------------- |
| playerid               | ID بازیکنی که می‌خواهید آمار شبکه‌اش را دریافت کنید.     |
| output[]               | رشته برای ذخیره آمار شبکه، به صورت reference پاس داده می‌شود. |
| size = sizeof (output) | طول رشته‌ای که باید ذخیره شود.               |

## مقادیر برگشتی

این تابع همیشه 1 برمی‌گرداند.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/mynetstats"))
    {
        new stats[400+1];
        GetPlayerNetworkStats(playerid, stats, sizeof(stats));
        ShowPlayerDialog(playerid, 0, DIALOG_STYLE_MSGBOX, "My Network Stats", stats, "Okay", "");
    }
    return 1;
}
```

## نکات

:::tip

این تابع ممکن است داده‌های دقیقی برنگرداند زمانی که در [OnPlayerDisconnect](OnPlayerDisconnect) استفاده شود اگر بازیکن به طور عادی quit کرده باشد. معمولاً داده‌های دقیقی برمی‌گرداند اگر بازیکن kicked شده یا timeout داشته باشد.

:::

## توابع مرتبط

- [GetNetworkStats](GetNetworkStats): دریافت آمار شبکه سرور و ذخیره آن در رشته.
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): دریافت زمانی که بازیکن متصل بوده است.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): دریافت تعداد پیام‌های شبکه دریافت شده از بازیکن.
- [NetStats_BytesReceived](NetStats_BytesReceived): دریافت مقدار اطلاعات (بایت) دریافت شده از بازیکن.
- [NetStats_MessagesSent](NetStats_MessagesSent): دریافت تعداد پیام‌های شبکه ارسال شده به بازیکن.
- [NetStats_BytesSent](NetStats_BytesSent): دریافت مقدار اطلاعات (بایت) ارسال شده به بازیکن.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): دریافت تعداد پیام‌های شبکه دریافت شده از بازیکن در ثانیه گذشته.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): دریافت درصد از دست رفتن بسته بازیکن.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): دریافت وضعیت اتصال بازیکن.
- [NetStats_GetIpPort](NetStats_GetIpPort): دریافت IP و پورت بازیکن.