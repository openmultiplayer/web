---
title: KillTimer
sidebar_label: KillTimer
description: Kills (stops) a running timer.
tags: []
---

## คำอธิบาย

Kills (stops) a running timer.

| Name    | Description                                                       |
| ------- | ----------------------------------------------------------------- |
| timerid | The ID of the timer to kill (returned by SetTimer or SetTimerEx). |

## ส่งคืน

This function always returns 0.

## ตัวอย่าง

```c
new connect_timer[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    print("Starting timer...");
    connect_timer[playerid] = SetTimerEx("WelcomeTimer", 5000, true, "i", playerid);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
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

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetTimer](SetTimer): Set a timer.
- [SetTimerEx](SetTimerEx): Set a timer with parameters.
