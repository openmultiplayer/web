---
title: GetTimerInterval
sidebar_label: GetTimerInterval
description: Gets the interval of a timer.
tags: ["timer"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the interval of a timer.

## Parameters

| Name    | Description                                 |
| ------- | ------------------------------------------- |
| timerid | The ID of the timer to get the interval of. |

## Return Values

Returns the interval of the timer in milliseconds.

## Examples

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

## Related Functions

- [SetTimer](SetTimer): Set a timer.
- [SetTimerEx](SetTimerEx): Set a timer with parameters.
- [KillTimer](KillTimer): Stop a timer.
- [IsValidTimer](IsValidTimer): Checks if a timer is valid.
- [IsRepeatingTimer](IsRepeatingTimer): Checks if a timer is set to repeat.
- [GetTimerRemaining](GetTimerRemaining): Gets the remaining interval of a timer.
- [CountRunningTimers](CountRunningTimers): Get the running timers.
