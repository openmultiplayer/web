---
title: GetTimerRemaining
sidebar_label: GetTimerRemaining
description: interval باقی‌مونده یه timer رو دریافت می‌کنه.
tags: ["timer"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

interval باقی‌مونده یه timer رو دریافت می‌کنه.

## پارامترها

| نام    | توضیحات                                           |
|---------|-------------------------------------------------------|
| timerid | ID timer که می‌خوای interval باقی‌مونده‌اش رو بگیری. |

## مقادیر برگشتی

interval باقی‌مونده timer رو به millisecond برمی‌گردونه.

## مثال‌ها

```c
new g_Timer;

public OnGameModeInit()
{
    g_Timer = SetTimer("TimerCallback", 60000, true);

    new remainingInterval = GetTimerRemaining(g_Timer);
    printf("Timer ID %d remaining interval: %d ms", g_Timer, remainingInterval);
    return 1;
}
```

## توابع مرتبط

- [SetTimer](SetTimer): تنظیم یه timer.
- [SetTimerEx](SetTimerEx): تنظیم یه timer با پارامتر.
- [KillTimer](KillTimer): متوقف کردن یه timer.
- [IsValidTimer](IsValidTimer): بررسی اعتبار یه timer.
- [IsRepeatingTimer](IsRepeatingTimer): بررسی اینکه آیا یه timer رو repeat تنظیم شده.
- [GetTimerInterval](GetTimerInterval): دریافت interval یه timer.
- [CountRunningTimers](CountRunningTimers): دریافت timer های در حال اجرا.