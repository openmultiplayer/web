---
title: GetPlayerPing
description: Dobij ping igrača.
tags: ["player"]
---

## Deskripcija

Dobij ping igrača. Ping mjeri količinu vremena koje je potrebno da poslužitelj 'pinga' klijenta i da klijent pošalje poruku natrag.

| Ime      | Deskripcija               |
| -------- | ------------------------- |
| playerid | ID igrača za dobiti ping. |

## Returns

Trenutni ping igrača (izražen u milisekundama).

## Primjeri

```c
// Deklarirajte niz svih mogućih identifikatora tajmera za tajmere za udaranje igrača s
// generalno visokim pingom sa zadanom vrijednošću -1
new
    gPlayerPingTimer[MAX_PLAYERS] = {-1, ...};

// Konstanta (lijepa dokumentacija :))
const
    MAX_ACCEPTED_PING = 500;

public OnPlayerConnect(playerid)
{
    // Pokrenite tajmer i dodijelite varijabli identifikator tajmera
    gPlayerPingTimer[playerid] = SetTimerEx("Ping_Timer", 3 * 1000, true, "i", playerid);
}

public OnPlayerDisconnect(playerid, reason)
{
    // Ubijte tajmer i vratite vrijednost na nevaljanu
    KillTimer(gPlayerPingTimer[playerid]);
    gPlayerPingTimer[playerid] = -1;
}

// Proslijeđena funkcija (callback)
forward public Ping_Timer(playerid);
public Ping_Timer(playerid)
{
    // Udarite igrača ako je njihov ping veći od općeprihvaćenog visokog pinga
    if (GetPlayerPing(playerid) > MAX_ACCEPTED_PING)
    {
        SendClientMessageToAll()
        Kick(playerid);
    }
    return 1;
}
```

## Zabilješke

:::warning

Ping igrača može biti neko vrijeme 65535 nakon što se igrač poveže

:::

## Srodne Funkcije

- [GetPlayerIp](GetPlayerIp): Dobij IP igrača.
- [GetPlayerName](GetPlayerName): Dobij ime igrača.
- [GetPlayerVersion](GetPlayerVersion): Dobij verziju igračevog klijenta.
