---
title: IsRepeatingTimer
sidebar_label: IsRepeatingTimer
description: چک می‌کنه که آیا یه timer روی repeat تنظیم شده یا نه.
tags: ["timer"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا یه timer روی repeat تنظیم شده یا نه.

## پارامترها

| نام     | توضیحات                       |
|---------|-------------------------------|
| timerid | ID timer که باید چک بشه.      |

## مقادیر برگشتی

**true**: Timer یه repeating timer هست.

**false**: Timer یه repeating timer نیست.

## مثال‌ها

```c
new g_Timer;

public OnGameModeInit()
{
    g_Timer = SetTimer("TimerCallback", 60000, true);

    if (IsRepeatingTimer(g_Timer))
    {
        // Do something
    }
    return 1;
}
```

## توابع مرتبط

- [SetTimer](SetTimer): تنظیم یه timer.
- [SetTimerEx](SetTimerEx): تنظیم یه timer با پارامتر.
- [KillTimer](KillTimer): متوقف کردن یه timer.
- [IsValidTimer](IsValidTimer): چک کردن اینکه timer معتبره یا نه.
- [CountRunningTimers](CountRunningTimers): دریافت timer های در حال اجرا.