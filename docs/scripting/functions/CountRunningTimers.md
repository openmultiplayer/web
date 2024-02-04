---
title: CountRunningTimers
description: Get the running timers.
tags: ["timer"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the running timers. ([SetTimer](SetTimer) & [SetTimerEx](SetTimerEx))

## Returns

Returns the amount of running timers.

## Examples

```c
printf("Running timers: %d", CountRunningTimers());
```

## Related Functions

- [SetTimer](SetTimer): Set a timer.
- [SetTimerEx](SetTimerEx): Set a timer with parameters.
- [KillTimer](KillTimer): Kills (stops) a running timer.
