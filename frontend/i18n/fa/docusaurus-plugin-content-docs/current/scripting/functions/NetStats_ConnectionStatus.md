---
title: NetStats_ConnectionStatus
sidebar_label: NetStats_ConnectionStatus
description: وضعیت اتصال فعلی بازیکن را بگیر.
tags: ["network monitoring"]
---

## توضیحات

وضعیت اتصال فعلی بازیکن را می‌گیرد.

| نام      | توضیحات                                            |
| -------- | -------------------------------------------------- |
| playerid | ID بازیکنی که وضعیت اتصالش گرفته می‌شود.           |

## مقدار بازگشتی

[وضعیت اتصال](../resources/connectionstatus) بازیکن، به عنوان یک مقدار integer.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/connectionstatus"))
    {
        static ConnectionStatuses[9][48] = 
        {
            "No Action",
            "Disconnect ASAP",
            "Disconnect ASAP Silently",
            "Disconnect On No Ack",
            "Requested Connection",
            "Handling Connection Request",
            "Unverified Sender",
            "Set Encryption On Multiple 16 Byte Packet",
            "Connected"
        };

        new connectionStatus = NetStats_ConnectionStatus(playerid);

        new string[144];
        format(string, sizeof(string), "Your current connection status: %s", ConnectionStatuses[connectionStatus]);
        SendClientMessage(playerid, -1, string);
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
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): تعداد پیام‌های شبکه‌ای که سرور در ثانیه گذشته از بازیکن دریافت کرده را بگیر.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): درصد packet loss بازیکن را بگیر.
- [NetStats_GetIpPort](NetStats_GetIpPort): IP و port بازیکن را بگیر.
- [IsPlayerConnected](IsPlayerConnected): بررسی کن که آیا بازیکن به سرور متصل است.

## کالبک‌های مرتبط

- [OnPlayerConnect](../callbacks/OnPlayerConnect): وقتی بازیکن به سرور متصل می‌شود فراخوانی می‌شود.
- [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect): وقتی بازیکن سرور را ترک می‌کند فراخوانی می‌شود.

## منابع مرتبط

- [Connection Status](../resources/connectionstatus)