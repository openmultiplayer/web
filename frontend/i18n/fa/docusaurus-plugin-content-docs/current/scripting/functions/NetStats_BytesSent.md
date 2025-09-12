---
title: NetStats_BytesSent
sidebar_label: NetStats_BytesSent
description: مقدار داده (به بایت) که سرور به بازیکن ارسال کرده را بگیر.
tags: ["network monitoring"]
---

## توضیحات

مقدار داده (به بایت) که سرور به بازیکن ارسال کرده را می‌گیرد.

| نام      | توضیحات                                     |
| -------- | ------------------------------------------ |
| playerid | ID بازیکنی که داده از آن گرفته می‌شود.      |

## مقدار بازگشتی

این تابع تعداد بایت‌هایی که سرور به بازیکن ارسال کرده را برمی‌گرداند.

اگر بازیکن متصل نباشد 0 برگردانده می‌شود.

## مثال‌ها

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/bytes_sent"))
    {
        new szString[144];
        format(szString, sizeof(szString), "You have sent %i bytes of information to the server.", NetStats_BytesSent(playerid));
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```

## توابع مرتبط

- [GetPlayerNetworkStats](GetPlayerNetworkStats): networkstats بازیکن را گرفته و در یک رشته ذخیره کن.
- [GetNetworkStats](GetNetworkStats): networkstats سرور را گرفته و در یک رشته ذخیره کن.
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): زمانی که بازیکن متصل بوده را بگیر.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): تعداد پیام‌های شبکه‌ای که سرور از بازیکن دریافت کرده را بگیر.
- [NetStats_MessagesSent](NetStats_MessagesSent): تعداد پیام‌های شبکه‌ای که سرور به بازیکن ارسال کرده را بگیر.
- [NetStats_BytesReceived](NetStats_BytesReceived): مقدار اطلاعات (به بایت) که سرور از بازیکن دریافت کرده را بگیر.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): تعداد پیام‌های شبکه‌ای که سرور در ثانیه گذشته از بازیکن دریافت کرده را بگیر.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): درصد packet loss بازیکن را بگیر.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): وضعیت اتصال بازیکن را بگیر.
- [NetStats_GetIpPort](NetStats_GetIpPort): IP و port بازیکن را بگیر.