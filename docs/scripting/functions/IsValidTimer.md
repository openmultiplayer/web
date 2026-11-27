---
title: "IsValidTimer | open.mp"
description: "Checks if a timer is valid."
canonical: https://open.mp/docs/scripting/functions/IsValidTimer
language: en
---

# IsValidTimer

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Checks if a timer is valid.

## Parameters

| Name | Description |
| --- | --- |
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

-   [SetTimer](https://open.mp/docs/scripting/functions/SetTimer): Set a timer.
-   [SetTimerEx](https://open.mp/docs/scripting/functions/SetTimerEx): Set a timer with parameters.
-   [KillTimer](https://open.mp/docs/scripting/functions/KillTimer): Stop a timer.
-   [IsRepeatingTimer](https://open.mp/docs/scripting/functions/IsRepeatingTimer): Checks if a timer is set to repeat.
-   [CountRunningTimers](https://open.mp/docs/scripting/functions/CountRunningTimers): Get the running timers.
