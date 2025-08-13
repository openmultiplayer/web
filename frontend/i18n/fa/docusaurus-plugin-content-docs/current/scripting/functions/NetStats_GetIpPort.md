---
title: NetStats_GetIpPort
sidebar_label: NetStats_GetIpPort
description: IP و port بازیکن را بگیر.
tags: ["network monitoring", "ip address"]
---

## توضیحات

IP و port بازیکن را می‌گیرد.

| نام                    | توضیحات                                                            |
| ---------------------- | ----------------------------------------------------------------- |
| playerid               | ID بازیکنی که IP و port آن گرفته می‌شود.                          |
| output[]               | آرایه رشته‌ای برای ذخیره IP و port، که توسط reference پاس می‌شود.  |
| size = sizeof (output) | حداکثر طول IP/port. 22 پیشنهاد می‌شود.                            |

## مقدار بازگشتی

IP و port بازیکن در آرایه مشخص شده ذخیره می‌شود.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/ipandport"))
    {
        new dest[22];
        NetStats_GetIpPort(playerid, dest, sizeof(dest));

        new szString[144];
        format(szString, sizeof(szString), "Your current IP and port: %s.", dest);
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```

## توابع مرتبط

- [GetPlayerIp](GetPlayerIp): IP بازیکن را بگیر.
- [GetPlayerNetworkStats](GetPlayerNetworkStats): networkstats بازیکن را گرفته و در یک رشته ذخیره کن.
- [GetNetworkStats](GetNetworkStats): networkstats سرور را گرفته و در یک رشته ذخیره کن.
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): زمانی که بازیکن متصل بوده را بگیر.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): تعداد پیام‌های شبکه‌ای که سرور از بازیکن دریافت کرده را بگیر.
- [NetStats_BytesReceived](NetStats_BytesReceived): مقدار اطلاعات (به بایت) که سرور از بازیکن دریافت کرده را بگیر.
- [NetStats_MessagesSent](NetStats_MessagesSent): تعداد پیام‌های شبکه‌ای که سرور به بازیکن ارسال کرده را بگیر.
- [NetStats_BytesSent](NetStats_BytesSent): مقدار اطلاعات (به بایت) که سرور به بازیکن ارسال کرده را بگیر.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): تعداد پیام‌های شبکه‌ای که سرور در ثانیه گذشته از بازیکن دریافت کرده را بگیر.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): درصد packet loss بازیکن را بگیر.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): وضعیت اتصال بازیکن را بگیر.