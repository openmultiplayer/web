---
title: KillTimer
description: Kills (stops) a running timer.
tags: []
---

# KillTimer

<TagLinks />

## Description

Kills (stops) a running timer.


| Name | Description |
|------|-------------|
|timerid | The ID of the timer to kill (returned by SetTimer or SetTimerEx).|


## Returns

This function always returns 0.


## Examples


```c
new connect_timer[MAX_PLAYERS];
 
public OnPlayerConnect(playerid)
{
    print("Starting timer...");
    connect_timer[playerid] = SetTimerEx("WelcomeTimer", 5000, true, "i", playerid);
    return 1;
}
 
public OnPlayerDisconnect(playerid)
{
    KillTimer(connect_timer[playerid]);
    return 1;
}
 
forward WelcomeTimer(playerid);
public WelcomeTimer(playerid)
{
    SendClientMessage(playerid, -1, "Welcome!");
}
```


## Related Functions


-  SetTimer: Set a timer.
-  SetTimerEx: Set a timer with parameters.