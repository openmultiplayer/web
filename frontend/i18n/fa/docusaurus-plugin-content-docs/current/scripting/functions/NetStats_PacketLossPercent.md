---
title: NetStats_PacketLossPercent
sidebar_label: NetStats_PacketLossPercent
description: درصد packet loss بازیکن را بگیر.
tags: ["network monitoring"]
---

## توضیحات

درصد packet loss بازیکن را می‌گیرد. Packet loss به معنای این است که داده‌هایی که بازیکن به سرور ارسال می‌کند از بین می‌رود (یا برعکس).

| نام      | توضیحات                                     |
| -------- | ------------------------------------------ |
| playerid | ID بازیکنی که داده از آن گرفته می‌شود.      |

## مقدار بازگشتی

درصد packet loss به عنوان float. 0 اگر بازیکن متصل نباشد.

## مثال‌ها

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/packetloss"))
    {
        new szString[144];
        format(szString, sizeof(szString), "Packets lost: %.2f percent.", NetStats_PacketLossPercent(playerid));
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```

## نکات

:::tip

این تابع فعلاً غیرقابل اعتماد یافت شده و خروجی آن طبق انتظار نیست در مقایسه با کلاینت. بنابراین این تابع نباید به عنوان packet loss kicker استفاده شود. یک تابع packetloss دقیق‌تر:

```c
stock GetPlayerPacketLoss(playerid, &Float:packetLoss)
{
    /* Returns the packetloss percentage of the given playerid - Made by Fusez */

    if(!IsPlayerConnected(playerid))
    {
        return 0;
    }

    new nstats[400+1], nstats_loss[20], start, end;
    GetPlayerNetworkStats(playerid, nstats, sizeof (nstats));

    start = strfind(nstats, "packetloss", true);
    end = strfind(nstats, "%", true, start);

    strmid(nstats_loss, nstats, start+12, end, sizeof (nstats_loss));
    packetLoss = floatstr(nstats_loss);
    return 1;
}
```

:::

:::tip

توجه داشته باش که این تابع packet های از دست رفته توسط سرور را گزارش می‌کند. تعداد packet loss گزارش شده توسط کلاینت **متفاوت** خواهد بود، نه به این دلیل که یکی از آن‌ها نادرست باشد، بلکه به این دلیل که هم سرور و هم کلاینت فقط از packet های از دست رفته ارسال شده توسط خودشان آگاه هستند.

:::

:::tip

هر چیزی بیشتر از 0.0% باید نگرانی باشد. هر چیزی بیشتر از 1.0% کاملاً بد است.

:::

## توابع مرتبط

- [GetPlayerNetworkStats](GetPlayerNetworkStats): networkstats بازیکن را گرفته و در یک رشته ذخیره کن.
- [GetNetworkStats](GetNetworkStats): networkstats سرور را گرفته و در یک رشته ذخیره کن.
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): زمانی که بازیکن متصل بوده را بگیر.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): تعداد پیام‌های شبکه‌ای که سرور از بازیکن دریافت کرده را بگیر.
- [NetStats_BytesReceived](NetStats_BytesReceived): مقدار اطلاعات (به بایت) که سرور از بازیکن دریافت کرده را بگیر.
- [NetStats_MessagesSent](NetStats_MessagesSent): تعداد پیام‌های شبکه‌ای که سرور به بازیکن ارسال کرده را بگیر.
- [NetStats_BytesSent](NetStats_BytesSent): مقدار اطلاعات (به بایت) که سرور به بازیکن ارسال کرده را بگیر.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): تعداد پیام‌های شبکه‌ای که سرور در ثانیه گذشته از بازیکن دریافت کرده را بگیر.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): وضعیت اتصال بازیکن را بگیر.
- [NetStats_GetIpPort](NetStats_GetIpPort): IP و port بازیکن را بگیر.