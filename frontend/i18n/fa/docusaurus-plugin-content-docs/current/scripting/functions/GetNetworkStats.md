---
title: GetNetworkStats
sidebar_label: GetNetworkStats
description: آمار شبکه سرور رو برمیگردونه و تو یه رشته ذخیره می‌کنه.
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

آمار شبکه سرور رو برمیگردونه و تو یه رشته ذخیره می‌کنه.

| اسم                   | توضیح                                                          |
| ---------------------- | -------------------------------------------------------------- |
| output[]               | رشته‌ای برای ذخیره آمار شبکه، به صورت reference پاس داده میشه. |
| size = sizeof (output) | طول رشته‌ای که باید ذخیره بشه.                         |

## مقادیر برگشتی

این تابع همیشه 1 برمیگردونه.

## مثال‌ها

</div>

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/netstats"))
    {
        new stats[400+1];
        GetNetworkStats(stats, sizeof(stats)); // آمار شبکه سرور رو بگیر
        ShowPlayerDialog(playerid, 0, DIALOG_STYLE_MSGBOX, "Server Network Stats", stats, "Close", "");
    }
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

**خروجی:**

</div>

```
Server Ticks: 200
Messages in Send buffer: 0
Messages sent: 142
Bytes sent: 8203
Acks sent: 11
Acks in send buffer: 0
Messages waiting for ack: 0
Messages resent: 0
Bytes resent: 0
Packetloss: 0.0%
Messages received: 54
Bytes received: 2204
Acks received: 0
Duplicate acks received: 0
Inst. KBits per second: 28.8
KBits per second sent: 10.0
KBits per second received: 2.7
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [GetPlayerNetworkStats](GetPlayerNetworkStats): آمار شبکه بازیکن رو برمیگردونه و تو یه رشته ذخیره می‌کنه.
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): مدت زمانی که بازیکن متصل بوده رو برمیگردونه.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): تعداد پیام‌های شبکه‌ای که سرور از بازیکن دریافت کرده رو برمیگردونه.
- [NetStats_BytesReceived](NetStats_BytesReceived): میزان اطلاعات (برحسب بایت) که سرور از بازیکن دریافت کرده رو برمیگردونه.
- [NetStats_MessagesSent](NetStats_MessagesSent): تعداد پیام‌های شبکه‌ای که سرور به بازیکن فرستاده رو برمیگردونه.
- [NetStats_BytesSent](NetStats_BytesSent): میزان اطلاعات (برحسب بایت) که سرور به بازیکن فرستاده رو برمیگردونه.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): تعداد پیام‌های شبکه‌ای که سرور تو ثانیه گذشته از بازیکن دریافت کرده رو برمیگردونه.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): درصد packet loss بازیکن رو برمیگردونه.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): وضعیت اتصال بازیکن رو برمیگردونه.
- [NetStats_GetIpPort](NetStats_GetIpPort): IP و پورت بازیکن رو برمیگردونه.

</div>