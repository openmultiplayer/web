---
title: "GetTimerInterval | open.mp"
description: "Gets the interval of a timer."
canonical: https://open.mp/docs/scripting/functions/GetTimerInterval
language: en
---

# GetTimerInterval

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the interval of a timer.

## Parameters

| Name | Description |
| --- | --- |
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

-   [SetTimer](https://open.mp/docs/scripting/functions/SetTimer): Set a timer.
-   [SetTimerEx](https://open.mp/docs/scripting/functions/SetTimerEx): Set a timer with parameters.
-   [KillTimer](https://open.mp/docs/scripting/functions/KillTimer): Stop a timer.
-   [IsValidTimer](https://open.mp/docs/scripting/functions/IsValidTimer): Checks if a timer is valid.
-   [IsRepeatingTimer](https://open.mp/docs/scripting/functions/IsRepeatingTimer): Checks if a timer is set to repeat.
-   [GetTimerRemaining](https://open.mp/docs/scripting/functions/GetTimerRemaining): Gets the remaining interval of a timer.
-   [CountRunningTimers](https://open.mp/docs/scripting/functions/CountRunningTimers): Get the running timers.
