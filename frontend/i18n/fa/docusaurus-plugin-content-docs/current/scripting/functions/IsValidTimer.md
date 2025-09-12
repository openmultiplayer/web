---
title: IsValidTimer
sidebar_label: IsValidTimer
description: چک می‌کنه که آیا یه timer معتبره یا نه.
tags: ["timer"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا یه timer معتبره یا نه.

## پارامترها

| نام     | توضیحات                       |
|---------|-------------------------------|
| timerid | ID timer که باید چک بشه.      |

## مقادیر برگشتی

**true**: Timer معتبره.

**false**: Timer معتبر نیست.

## مثال‌ها

```c
new g_Timer;

public OnGameModeInit()
{
    g_Timer = SetTimer("TimerCallback", 60000, true);
    return 1;
}

public OnGameModeExit()
{
    if (IsValidTimer(g_Timer))
    {
        printf("Timer ID %d is valid.", g_Timer);
        KillTimer(g_Timer);
    }
    else
    {
        printf("Timer ID %d is not valid.", g_Timer);
    }
    return 1;
}
```

## توابع مرتبط

- [SetTimer](SetTimer): تنظیم یه timer.
- [SetTimerEx](SetTimerEx): تنظیم یه timer با پارامتر.
- [KillTimer](KillTimer): متوقف کردن یه timer.
- [IsRepeatingTimer](IsRepeatingTimer): چک کردن اینکه timer روی repeat تنظیم شده یا نه.
- [CountRunningTimers](CountRunningTimers): دریافت timer های در حال اجرا.