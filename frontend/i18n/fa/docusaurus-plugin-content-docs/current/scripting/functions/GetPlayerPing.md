---
title: GetPlayerPing
sidebar_label: GetPlayerPing
description: دریافت پینگ بازیکن.
tags: ["player"]
---

## توضیحات

دریافت پینگ بازیکن. پینگ مقدار زمانی را اندازه‌گیری می‌کند که طول می‌کشد تا سرور کلاینت را 'ping' کند و کلاینت پیام را بازگرداند.

| نام     | توضیحات                              |
| -------- | ---------------------------------------- |
| playerid | ID بازیکن برای دریافت پینگش. |

## مقادیر برگشتی

پینگ فعلی بازیکن (بر حسب میلی‌ثانیه).

## مثال‌ها

```c
new string[24];
format(string, sizeof(string), "Your ping: %d", GetPlayerPing(playerid));
SendClientMessage(playerid, -1, string);
```

<br />

**مثال برای kick کردن بازیکنان با پینگ بالا:**

```c
// Declare an array of all possible timer identifiers for timers for kicking players with
// generally high ping with default value of 0
new gPlayerPingTimer[MAX_PLAYERS] = {0, ...};

// A constant (nice documentation :))
const MAX_ACCEPTED_PING = 500;

public OnPlayerConnect(playerid)
{
    // Initiate the timer and assign the variable the identifier of the timer
    gPlayerPingTimer[playerid] = SetTimerEx("Ping_Timer", 3 * 1000, true, "i", playerid);
}

public OnPlayerDisconnect(playerid, reason)
{
    // Kill the timer and reset the value to invalid
    KillTimer(gPlayerPingTimer[playerid]);
    gPlayerPingTimer[playerid] = 0;
}

// A forwarded function (callback)
forward Ping_Timer(playerid);
public Ping_Timer(playerid)
{
    // Kick player if their ping is more than the generally accepted high ping
    new ping = GetPlayerPing(playerid);
    if (ping > MAX_ACCEPTED_PING)
    {
        new string[128];
        format(string, sizeof(string), "You have been kicked from the server. Reason: high ping (%d)", ping);
        SendClientMessage(playerid, -1, string);
        
        Kick(playerid);
    }
    return 1;
}
```

## نکات

:::warning

پینگ بازیکن ممکن است برای مدتی بعد از اتصال بازیکن 65535 باشد

:::

## توابع مرتبط

- [GetPlayerIp](GetPlayerIp): دریافت IP بازیکن.
- [GetPlayerName](GetPlayerName): دریافت نام بازیکن.
- [GetPlayerVersion](GetPlayerVersion): دریافت نسخه کلاینت بازیکن.