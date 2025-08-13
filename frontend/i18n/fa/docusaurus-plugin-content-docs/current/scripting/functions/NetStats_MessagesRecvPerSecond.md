---
title: NetStats_MessagesRecvPerSecond
sidebar_label: NetStats_MessagesRecvPerSecond
description: تعداد پیام‌هایی که بازیکن در ثانیه گذشته دریافت کرده را بگیر.
tags: ["network monitoring"]
---

## توضیحات

تعداد پیام‌هایی که بازیکن در ثانیه گذشته دریافت کرده را می‌گیرد.

| نام      | توضیحات                                     |
| -------- | ------------------------------------------ |
| playerid | ID بازیکنی که داده از آن گرفته می‌شود.      |

## مقدار بازگشتی

تعداد پیام‌هایی که بازیکن در ثانیه گذشته دریافت کرده.

## مثال‌ها

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/msgpersec"))
    {
        new szString[144];
        format(szString, sizeof(szString), "You have received %i network messages in the last second.", NetStats_MessagesRecvPerSecond(playerid));
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
- [NetStats_BytesReceived](NetStats_BytesReceived): مقدار اطلاعات (به بایت) که سرور از بازیکن دریافت کرده را بگیر.
- [NetStats_MessagesSent](NetStats_MessagesSent): تعداد پیام‌های شبکه‌ای که سرور به بازیکن ارسال کرده را بگیر.
- [NetStats_BytesSent](NetStats_BytesSent): مقدار اطلاعات (به بایت) که سرور به بازیکن ارسال کرده را بگیر.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): درصد packet loss بازیکن را بگیر.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): وضعیت اتصال بازیکن را بگیر.
- [NetStats_GetIpPort](NetStats_GetIpPort): IP و port بازیکن را بگیر.