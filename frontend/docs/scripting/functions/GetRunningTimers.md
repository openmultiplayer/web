---
title: GetRunningTimers
description: Get the running timers.
tags: []
---

:::warning

This function is deprecated, see [CountRunningTimers](CountRunningTimers).

:::

## Description

Get the running timers. ([SetTimer](SetTimer) & [SetTimerEx](SetTimerEx))

## Returns

Returns the amount of running timers.

## Examples

```c
printf("Running timers: %d", GetRunningTimers());
```

## Related Functions

- [SetTimer](SetTimer): Set a timer.
- [SetTimerEx](SetTimerEx): Set a timer with parameters.
- [KillTimer](KillTimer): Kills (stops) a running timer.
