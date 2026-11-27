---
title: "KillTimer | open.mp"
description: "Kills (stops) a running timer."
canonical: https://open.mp/docs/scripting/functions/KillTimer
language: en
---

# KillTimer

## Description

Kills (stops) a running timer.

| Name | Description |
| --- | --- |
| timerid | The ID of the timer to kill (returned by [SetTimer](https://open.mp/docs/scripting/functions/SetTimer) or [SetTimerEx](https://open.mp/docs/scripting/functions/SetTimerEx)). |

## Returns

This function always returns **0**.

## Examples

```c
new gConnectTimer[MAX_PLAYERS] = {0, ...};

public OnPlayerConnect(playerid)
{
    print("Starting timer...");
    gConnectTimer[playerid] = SetTimerEx("WelcomeTimer", 5000, true, "i", playerid);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    KillTimer(gConnectTimer[playerid]);
    gConnectTimer[playerid] = 0;
    return 1;
}

forward WelcomeTimer(playerid);
public WelcomeTimer(playerid)
{
    SendClientMessage(playerid, -1, "Welcome!");
}
```

## Related Functions

-   [SetTimer](https://open.mp/docs/scripting/functions/SetTimer): Set a timer.
-   [SetTimerEx](https://open.mp/docs/scripting/functions/SetTimerEx): Set a timer with parameters.
-   [IsValidTimer](https://open.mp/docs/scripting/functions/IsValidTimer): Checks if a timer is valid.
-   [IsRepeatingTimer](https://open.mp/docs/scripting/functions/IsRepeatingTimer): Checks if a timer is set to repeat.
-   [GetTimerInterval](https://open.mp/docs/scripting/functions/GetTimerInterval): Gets the interval of a timer.
-   [GetTimerRemaining](https://open.mp/docs/scripting/functions/GetTimerRemaining): Gets the remaining interval of a timer.
-   [CountRunningTimers](https://open.mp/docs/scripting/functions/CountRunningTimers): Get the running timers.
