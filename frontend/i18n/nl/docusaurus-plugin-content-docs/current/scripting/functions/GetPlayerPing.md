---
title: GetPlayerPing
sidebar_label: GetPlayerPing
description: Haal de ping van een speler op (in milliseconden).
tags: ["player"]
---

## Beschrijving

Haal de ping van een speler op (round‑trip tijd in milliseconden).

| Naam | Beschrijving |
| ---- | ------------ |
| playerid | ID van de speler. |

## Retourneert

De huidige ping van de speler (ms).

## Voorbeelden

```c
new s[24];
format(s, sizeof(s), "Your ping: %d", GetPlayerPing(playerid));
SendClientMessage(playerid, -1, s);
```

```c
new gPlayerPingTimer[MAX_PLAYERS] = {0, ...};
const MAX_ACCEPTED_PING = 500;

public OnPlayerConnect(playerid)
{
    gPlayerPingTimer[playerid] = SetTimerEx("Ping_Timer", 3000, true, "i", playerid);
}

public OnPlayerDisconnect(playerid, reason)
{
    KillTimer(gPlayerPingTimer[playerid]);
    gPlayerPingTimer[playerid] = 0;
}

forward Ping_Timer(playerid);
public Ping_Timer(playerid)
{
    new ping = GetPlayerPing(playerid);
    if (ping > MAX_ACCEPTED_PING)
    {
        new msg[128];
        format(msg, sizeof(msg), "You have been kicked. Reason: high ping (%d)", ping);
        SendClientMessage(playerid, -1, msg);
        Kick(playerid);
    }
    return 1;
}
```

## Opmerkingen

Ping kan kort 65535 zijn vlak na joinen.

## Gerelateerd

- [GetPlayerIp](GetPlayerIp)
- [GetPlayerName](GetPlayerName)
- [GetPlayerVersion](GetPlayerVersion)


