---
title: IsRepeatingTimer
sidebar_label: IsRepeatingTimer
description: Checks if a timer is set to repeat.
tags: ["timer"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Checks if a timer is set to repeat.

## Parameters

| Name    | Description                   |
| ------- | ----------------------------- |
| timerid | The ID of the timer to check. |

## Return Values

**true**: Timer is a repeating timer.

**false**: Timer is not a repeating timer.

## Examples

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

## Related Functions

- [SetTimer](SetTimer): Set a timer.
- [SetTimerEx](SetTimerEx): Set a timer with parameters.
- [KillTimer](KillTimer): Stop a timer.
- [IsValidTimer](IsValidTimer): Checks if a timer is valid.
- [CountRunningTimers](CountRunningTimers): Get the running timers.
