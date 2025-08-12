---
title: GetPlayerRawIp
sidebar_label: GetPlayerRawIp
description: دریافت آدرس Raw IP (v4) بازیکن مشخص شده.
tags: ["player", "ip address"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت آدرس Raw IP (v4) بازیکن مشخص شده.

| نام     | توضیحات                                        |
| -------- | -------------------------------------------------- |
| playerid | ID بازیکن برای دریافت آدرس Raw IP. |

## مقادیر برگشتی

آدرس Raw IP بازیکن را به صورت integer برمی‌گرداند.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    new rawIp = GetPlayerRawIp(playerid);
    SendClientMessage(playerid, 0xFFFF00FF, "SERVER: Your Raw IP address: %d", rawIp);
    return 1;
}
```

## نکات

:::tip

PAWN حساس به حروف کوچک و بزرگ است. GetPlayerRawIP کار نخواهد کرد. 

:::

## توابع مرتبط

- [GetPlayerIp](GetPlayerIp): دریافت IP بازیکن.
- [NetStats_GetIpPort](NetStats_GetIpPort): دریافت IP و پورت بازیکن.