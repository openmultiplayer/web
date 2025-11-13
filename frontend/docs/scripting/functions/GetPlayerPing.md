---
title: GetPlayerPing
sidebar_label: GetPlayerPing
description: Get the ping of a player.
tags: ["player"]
---

## Description

Get the ping of a player. The ping measures the amount of time it takes for the server to 'ping' the client and for the client to send the message back.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The ID of the player to get the ping of. |

## Returns

The current ping of the player (expressed in milliseconds).

## Examples

```c
new string[24];
format(string, sizeof(string), "Your ping: %d", GetPlayerPing(playerid));
SendClientMessage(playerid, -1, string);
```

<br />

**Example to kick high ping players:**

```c
// Declare an array of all possible timer identifiers for timers for kicking players with
// generally high ping with default value of 0
new gPlayerPingTimer[MAX_PLAYERS] = {0, ...};

// A constant (nice documentation :))
const MAX_ACCEPTED_PING = 500;

public OnPlayerConnect(playerid)
{
    // Initiate the timer and assign the variable the identifier of the timer
    gPlayerPingTimer[playerid] = SetTimerEx("Ping_Timer", 3 * 1000, true, "i", playerid);
}

public OnPlayerDisconnect(playerid, reason)
{
    // Kill the timer and reset the value to invalid
    KillTimer(gPlayerPingTimer[playerid]);
    gPlayerPingTimer[playerid] = 0;
}

// A forwarded function (callback)
forward Ping_Timer(playerid);
public Ping_Timer(playerid)
{
    // Kick player if their ping is more than the generally accepted high ping
    new ping = GetPlayerPing(playerid);
    if (ping > MAX_ACCEPTED_PING)
    {
        new string[128];
        format(string, sizeof(string), "You have been kicked from the server. Reason: high ping (%d)", ping);
        SendClientMessage(playerid, -1, string);

        Kick(playerid);
    }
    return 1;
}
```

## Notes

:::warning

Player's ping may be 65535 for a while after a player connects

:::

## Related Functions

- [GetPlayerIp](GetPlayerIp): Get a player's IP.
- [GetPlayerName](GetPlayerName): Get a player's name.
- [GetPlayerVersion](GetPlayerVersion): Get a player's client-version.
