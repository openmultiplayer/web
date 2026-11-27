---
title: "CountRunningTimers | open.mp"
description: "Get the running timers."
canonical: https://open.mp/docs/scripting/functions/CountRunningTimers
language: en
---

# CountRunningTimers

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the running timers. ([SetTimer](https://open.mp/docs/scripting/functions/SetTimer) & [SetTimerEx](https://open.mp/docs/scripting/functions/SetTimerEx))

## Returns

Returns the amount of running timers.

## Examples

```c
printf("Running timers: %d", CountRunningTimers());
```

## Related Functions

-   [SetTimer](https://open.mp/docs/scripting/functions/SetTimer): Set a timer.
-   [SetTimerEx](https://open.mp/docs/scripting/functions/SetTimerEx): Set a timer with parameters.
-   [KillTimer](https://open.mp/docs/scripting/functions/KillTimer): Kills (stops) a running timer.
