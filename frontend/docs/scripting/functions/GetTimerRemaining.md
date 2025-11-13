---
title: GetTimerRemaining
sidebar_label: GetTimerRemaining
description: Gets the remaining interval of a timer.
tags: ["timer"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the remaining interval of a timer.

## Parameters

| Name    | Description                                           |
| ------- | ----------------------------------------------------- |
| timerid | The ID of the timer to get the remaining interval of. |

## Return Values

Returns the remaining interval of the timer in milliseconds.

## Examples

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

## Related Functions

- [SetTimer](SetTimer): Set a timer.
- [SetTimerEx](SetTimerEx): Set a timer with parameters.
- [KillTimer](KillTimer): Stop a timer.
- [IsValidTimer](IsValidTimer): Checks if a timer is valid.
- [IsRepeatingTimer](IsRepeatingTimer): Checks if a timer is set to repeat.
- [GetTimerInterval](GetTimerInterval): Gets the interval of a timer.
- [CountRunningTimers](CountRunningTimers): Get the running timers.
