---
title: GetTimerInterval
sidebar_label: GetTimerInterval
description: interval یه timer رو دریافت می‌کنه.
tags: ["timer"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

interval یه timer رو دریافت می‌کنه.

## پارامترها

| نام    | توضیحات                                 |
|---------|---------------------------------------------|
| timerid | ID timer که می‌خوای interval اش رو بگیری. |

## مقادیر برگشتی

interval timer رو به millisecond برمی‌گردونه.

## مثال‌ها

```c
new g_Timer;

public OnGameModeInit()
{
    g_Timer = SetTimer("TimerCallback", 60000, true);

    new interval = GetTimerInterval(g_Timer);
    printf("Timer ID %d interval: %d ms", g_Timer, interval);
    return 1;
}
```

## توابع مرتبط

- [SetTimer](SetTimer): تنظیم یه timer.
- [SetTimerEx](SetTimerEx): تنظیم یه timer با پارامتر.
- [KillTimer](KillTimer): متوقف کردن یه timer.
- [IsValidTimer](IsValidTimer): بررسی اعتبار یه timer.
- [IsRepeatingTimer](IsRepeatingTimer): بررسی اینکه آیا یه timer رو repeat تنظیم شده.
- [GetTimerRemaining](GetTimerRemaining): دریافت interval باقی‌مونده یه timer.
- [CountRunningTimers](CountRunningTimers): دریافت timer های در حال اجرا.