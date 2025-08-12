---
title: GetPlayerIp
sidebar_label: GetPlayerIp
description: دریافت آدرس IP بازیکن مشخص شده و ذخیره آن در یک رشته.
tags: ["player", "ip address"]
---

## توضیحات

دریافت آدرس IP بازیکن مشخص شده و ذخیره آن در یک رشته.

| نام              | توضیحات                                                          |
| ----------------- | -------------------------------------------------------------------- |
| playerid          | ID بازیکن برای دریافت آدرس IP.                       |
| ip[]              | رشته برای ذخیره آدرس IP بازیکن، به صورت reference پاس داده می‌شود. |
| len = sizeof (ip) | حداکثر طول آدرس IP (16 توصیه می‌شود).               |

## مقادیر برگشتی

آدرس IP بازیکن در آرایه مشخص شده ذخیره می‌شود.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    new ipAddress[16];
    GetPlayerIp(playerid, ipAddress, sizeof(ipAddress));
    if (!strcmp(ipAddress, "127.0.0.1"))
    {
        SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to your server, master :)");
    }
    return 1;
}
```

## نکات

:::tip

PAWN حساس به حروف کوچک و بزرگ است. GetPlayerIP کار نخواهد کرد.

:::

:::warning

**سرور SA-MP**: این تابع در [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect) **کار نمی‌کند** چون بازیکن قبلاً قطع شده است. IP نامعتبری (255.255.255.255) برمی‌گرداند. 
IPهای بازیکنان را در [OnPlayerConnect](../callbacks/OnPlayerConnect) ذخیره کنید اگر نیاز است در [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect) استفاده شوند.

**سرور open.mp**: این تابع در [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect) **کار می‌کند**.

:::

## توابع مرتبط

- [NetStats_GetIpPort](NetStats_GetIpPort): دریافت IP و پورت بازیکن.
- [GetPlayerRawIp](GetPlayerRawIp): دریافت Raw IP بازیکن.
- [GetPlayerName](GetPlayerName): دریافت نام بازیکن.
- [GetPlayerPing](GetPlayerPing): دریافت پینگ بازیکن.
- [GetPlayerVersion](GetPlayerVerion): دریافت نسخه کلاینت بازیکن.

## کالبک‌های مرتبط

- [OnIncomingConnection](../callbacks/OnIncomingConnection): زمانی که بازیکن در حال تلاش برای اتصال به سرور است فراخوانی می‌شود.
- [OnPlayerConnect](../callbacks/OnPlayerConnect): زمانی که بازیکن به سرور متصل می‌شود فراخوانی می‌شود.
- [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect): زمانی که بازیکن سرور را ترک می‌کند فراخوانی می‌شود.