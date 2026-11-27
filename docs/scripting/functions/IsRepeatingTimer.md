---
title: "IsRepeatingTimer | open.mp"
description: "Checks if a timer is set to repeat."
canonical: https://open.mp/docs/scripting/functions/IsRepeatingTimer
language: en
---

# IsRepeatingTimer

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Checks if a timer is set to repeat.

## Parameters

| Name | Description |
| --- | --- |
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

-   [SetTimer](https://open.mp/docs/scripting/functions/SetTimer): Set a timer.
-   [SetTimerEx](https://open.mp/docs/scripting/functions/SetTimerEx): Set a timer with parameters.
-   [KillTimer](https://open.mp/docs/scripting/functions/KillTimer): Stop a timer.
-   [IsValidTimer](https://open.mp/docs/scripting/functions/IsValidTimer): Checks if a timer is valid.
-   [CountRunningTimers](https://open.mp/docs/scripting/functions/CountRunningTimers): Get the running timers.
