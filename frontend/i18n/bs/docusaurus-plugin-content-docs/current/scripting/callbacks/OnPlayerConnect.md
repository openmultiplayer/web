---
title: OnPlayerConnect
sidebar_label: OnPlayerConnect
description: Ovaj callback je pozvan kada se igrač konektovao na server.
tags: ["player"]
---

## Deskripcija

Ovaj callback je pozvan kada se igrač konektovao na server.

| Ime      | Deskripcija                   |
| -------- | ----------------------------- |
| playerid | ID igrača koji se konektovao. |

## Returns

1 - Spriječiti će da druge filterskripte primaju ovaj callback.

0 - Označava da će ovaj callback biti proslijeđen do sljedeće filterskripte.

Uvijek je pozvana prva u filterskripti.

## Primjeri

```c
public OnPlayerConnect(playerid)
{
    new
        string[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    format(string, sizeof string, "%s je usao na server. Dobrodosao!", playerName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## Zabilješke

:::tip

Ovaj callback pozvat će i NPC.

:::

## Srodne Funkcije
