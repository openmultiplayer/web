---
title: "GetRunningTimers | open.mp"
description: "Get the running timers."
canonical: https://open.mp/docs/scripting/functions/GetRunningTimers
language: en
---

# GetRunningTimers

warning

This function is deprecated, see [CountRunningTimers](https://open.mp/docs/scripting/functions/CountRunningTimers).

## Description

Get the running timers. ([SetTimer](https://open.mp/docs/scripting/functions/SetTimer) & [SetTimerEx](https://open.mp/docs/scripting/functions/SetTimerEx))

## Returns

Returns the amount of running timers.

## Examples

```c
printf("Running timers: %d", GetRunningTimers());
```

## Related Functions

-   [SetTimer](https://open.mp/docs/scripting/functions/SetTimer): Set a timer.
-   [SetTimerEx](https://open.mp/docs/scripting/functions/SetTimerEx): Set a timer with parameters.
-   [KillTimer](https://open.mp/docs/scripting/functions/KillTimer): Kills (stops) a running timer.
