---
title: NetStats_GetConnectedTime
sidebar_label: NetStats_GetConnectedTime
description: مقدار زمانی (به میلی‌ثانیه) که بازیکن به سرور متصل بوده را بگیر.
tags: ["network monitoring"]
---

## توضیحات

مقدار زمانی (به میلی‌ثانیه) که بازیکن به سرور متصل بوده را می‌گیرد.

| نام      | توضیحات                                             |
| -------- | -------------------------------------------------- |
| playerid | ID بازیکنی که زمان اتصالش گرفته می‌شود.             |

## مقدار بازگشتی

این تابع مقدار زمانی (به میلی‌ثانیه) که بازیکن به سرور متصل بوده را برمی‌گرداند.

اگر بازیکن متصل نباشد 0 برگردانده می‌شود.

## مثال‌ها

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/connectedtime"))
    {
        new szString[144];
        format(szString, sizeof(szString), "You have been connected for %i milliseconds.", NetStats_GetConnectedTime(playerid));
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```

## نکات

:::tip

مقدار بازگشتی پس از تغییر حالت بازی (استفاده از دستور RCON "gmx") به صفر reset نمی‌شود.

:::

## توابع مرتبط

- [GetPlayerNetworkStats](GetPlayerNetworkStats): networkstats بازیکن را گرفته و در یک رشته ذخیره کن.
- [GetNetworkStats](GetNetworkStats): networkstats سرور را گرفته و در یک رشته ذخیره کن.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): تعداد پیام‌های شبکه‌ای که سرور از بازیکن دریافت کرده را بگیر.
- [NetStats_BytesReceived](NetStats_BytesReceived): مقدار اطلاعات (به بایت) که سرور از بازیکن دریافت کرده را بگیر.
- [NetStats_MessagesSent](NetStats_MessagesSent): تعداد پیام‌های شبکه‌ای که سرور به بازیکن ارسال کرده را بگیر.
- [NetStats_BytesSent](NetStats_BytesSent): مقدار اطلاعات (به بایت) که سرور به بازیکن ارسال کرده را بگیر.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): تعداد پیام‌های شبکه‌ای که سرور در ثانیه گذشته از بازیکن دریافت کرده را بگیر.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): درصد packet loss بازیکن را بگیر.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): وضعیت اتصال بازیکن را بگیر.
- [NetStats_GetIpPort](NetStats_GetIpPort): IP و port بازیکن را بگیر.