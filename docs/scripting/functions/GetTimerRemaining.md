---
title: "GetTimerRemaining | open.mp"
description: "Gets the remaining interval of a timer."
canonical: https://open.mp/docs/scripting/functions/GetTimerRemaining
language: en
---

# GetTimerRemaining

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the remaining interval of a timer.

## Parameters

| Name | Description |
| --- | --- |
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

-   [SetTimer](https://open.mp/docs/scripting/functions/SetTimer): Set a timer.
-   [SetTimerEx](https://open.mp/docs/scripting/functions/SetTimerEx): Set a timer with parameters.
-   [KillTimer](https://open.mp/docs/scripting/functions/KillTimer): Stop a timer.
-   [IsValidTimer](https://open.mp/docs/scripting/functions/IsValidTimer): Checks if a timer is valid.
-   [IsRepeatingTimer](https://open.mp/docs/scripting/functions/IsRepeatingTimer): Checks if a timer is set to repeat.
-   [GetTimerInterval](https://open.mp/docs/scripting/functions/GetTimerInterval): Gets the interval of a timer.
-   [CountRunningTimers](https://open.mp/docs/scripting/functions/CountRunningTimers): Get the running timers.
