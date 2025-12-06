---
title: IsValidTimer
sidebar_label: IsValidTimer
description: Checks if a timer is valid.
tags: ["timer"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Checks if a timer is valid.

## Parameters

| Name    | Description                   |
| ------- | ----------------------------- |
| timerid | The ID of the timer to check. |

## Return Values

**true**: Timer is valid.

**false**: Timer is not valid.

## Examples

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

## Related Functions

- [SetTimer](SetTimer): Set a timer.
- [SetTimerEx](SetTimerEx): Set a timer with parameters.
- [KillTimer](KillTimer): Stop a timer.
- [IsRepeatingTimer](IsRepeatingTimer): Checks if a timer is set to repeat.
- [CountRunningTimers](CountRunningTimers): Get the running timers.
