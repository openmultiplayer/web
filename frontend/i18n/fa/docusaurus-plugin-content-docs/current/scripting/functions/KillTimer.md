---
title: KillTimer
sidebar_label: KillTimer
description: یک تایمر در حال اجرا رو می‌کشه (متوقف می‌کنه).
tags: ["timer"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

یک تایمر در حال اجرا رو می‌کشه (متوقف می‌کنه).

| اسم    | توضیح                                                       |
| ------- | ----------------------------------------------------------------- |
| timerid | شناسه تایمری که می‌خوای بکشیش (که از SetTimer یا SetTimerEx برگردونده شده). |

## مقادیر برگشتی

این تابع همیشه 0 برمی‌گردونه.

## مثال‌ها

</div>

```c
new gConnectTimer[MAX_PLAYERS] = {0, ...};

public OnPlayerConnect(playerid)
{
    print("Starting timer...");
    gConnectTimer[playerid] = SetTimerEx("WelcomeTimer", 5000, true, "i", playerid);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    KillTimer(gConnectTimer[playerid]);
    gConnectTimer[playerid] = 0;
    return 1;
}

forward WelcomeTimer(playerid);
public WelcomeTimer(playerid)
{
    SendClientMessage(playerid, -1, "Welcome!");
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [SetTimer](SetTimer): تنظیم تایمر.
- [SetTimerEx](SetTimerEx): تنظیم تایمر با پارامترها.
- [IsValidTimer](IsValidTimer): چک کردن معتبر بودن تایمر.
- [IsRepeatingTimer](IsRepeatingTimer): چک کردن اینکه تایمر تکرار میشه یا نه.
- [GetTimerInterval](GetTimerInterval): گرفتن interval تایمر.
- [GetTimerRemaining](GetTimerRemaining): گرفتن interval باقی‌مانده تایمر.
- [CountRunningTimers](CountRunningTimers): گرفتن تعداد تایمرهای در حال اجرا.

</div>