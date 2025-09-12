---
title: GetPlayerVersion
sidebar_label: GetPlayerVersion
description: نسخه کلاینت SA-MP را همان‌طور که توسط بازیکن گزارش شده برمی‌گرداند.
tags: ["player"]
---

## توضیحات

نسخه کلاینت SA-MP را همان‌طور که توسط بازیکن گزارش شده برمی‌گرداند.

| نام                   | توضیحات                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| playerid               | ID بازیکن برای دریافت نسخه کلاینتش.                |
| version[]              | رشته برای ذخیره نسخه بازیکن، به صورت reference پاس داده می‌شود. |
| len = sizeof (version) | حداکثر طول نسخه.                                |

## مقادیر برگشتی

نسخه کلاینت در آرایه مشخص شده ذخیره می‌شود.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    new version[24];
    GetPlayerVersion(playerid, version, sizeof(version));

    new string[64];
    format(string, sizeof(string), "Your version of SA-MP: %s", version);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    // Possible text: "Your version of SA-MP: 0.3.7"
    return 1;
}
```

## نکات

:::tip

نسخه کلاینت می‌تواند تا 24 کاراکتر طول داشته باشد، در غیر این صورت اتصال به دلیل "Invalid client connection" رد خواهد شد. اما، بازیکنان عادی فقط می‌توانند با طول نسخه بین 5 (0.3.7) تا 9 (0.3.DL-R1) کاراکتر ملحق شوند.

:::

:::warning

رشته‌ای که نسخه در آن ذخیره می‌شود خالی خواهد بود اگر playerid یک NPC باشد.

:::

## توابع مرتبط

- [GetPlayerName](GetPlayerName): دریافت نام بازیکن.
- [GetPlayerPing](GetPlayerPing): دریافت پینگ بازیکن.
- [GetPlayerIp](GetPlayerIp): دریافت IP بازیکن.