---
title: SetTimer
sidebar_label: SetTimer
description: Sets a 'timer' to call a function after some time.
tags: ["timer"]
---

## Description

Sets a 'timer' to call a function after some time. Can be set to repeat.

| Name                 | Description                                                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| const functionName[] | Name of the function to call as a string. This must be a public function (forwarded). A null string here will crash the server. |
| interval             | Interval in milliseconds.                                                                                                       |
| bool:repeating       | Boolean (true/false) on whether the timer should repeat or not.                                                                 |

## Returns

The ID of the timer that was started.

Timer IDs start at **1**.

## Examples

```c
public OnGameModeInit()
{
    print("Starting timer...");
    SetTimer("OneSecondTimer", 1000, true); // Set a repeating timer of 1000 milliseconds (1 second)
}

forward OneSecondTimer();
public OneSecondTimer()
{
    print("1 second has passed.");
}
```

## Notes

:::warning

Timer intervals are not accurate (roughly 25% off) in SA-MP. There are fixes available [here](https://sampforum.blast.hk/showthread.php?tid=289675) and [here](https://sampforum.blast.hk/showthread.php?tid=650736).

But it is fixed in open.mp

:::

:::warning

The use of many timers will result in increased memory/cpu usage.

:::

:::tip

Timer IDs are never used twice.

You can use [KillTimer](KillTimer) on a timer ID and it won't matter if it's running or not. The function that should be called, must be public, meaning it has to be forwarded.

:::

## Definitions

| Definition    | Value |
|---------------|-------|
| INVALID_TIMER | 0     |

## Related Functions

- [SetTimerEx](SetTimerEx): Set a timer with parameters.
- [KillTimer](KillTimer): Stop a timer.
- [IsValidTimer](IsValidTimer): Checks if a timer is valid.
- [IsRepeatingTimer](IsRepeatingTimer): Checks if a timer is set to repeat.
- [GetTimerInterval](GetTimerInterval): Gets the interval of a timer.
- [GetTimerRemaining](GetTimerRemaining): Gets the remaining interval of a timer.
- [CountRunningTimers](CountRunningTimers): Get the running timers.
