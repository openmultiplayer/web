---
title: OnPlayerDisconnect
sidebar_label: OnPlayerDisconnect
description: Ovaj callback je pozvan kada se igrač diskonektuje sa servera.
tags: ["player"]
---

## Deskripcija

Ovaj callback je pozvan kada se igrač diskonektuje sa servera.

| Ime      | Deskripcija                                           |
| -------- | ----------------------------------------------------- |
| playerid | ID igrača koji se diskonektovao.                      |
| reason   | Razlog zašto se diskonektovao. Pogledaj tabelu ispod. |

## Returns

0 - Spriječiti će da ostale filterskripte primaju ovaj callback.

1 - Označava da će ovaj callback biti proslijeđen narednoj filterskripti.

Uvijek je pozvana prva u filterskripti.

## Primjeri

```c
public OnPlayerDisconnect(playerid, reason)
{
    new
        szString[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);

    new szDisconnectReason[3][] =
    {
        "Timeout/Crash", // Ako je reason jednak 0, onda je igrac napustio server zbog timeouta ili crasha
        "Svojevoljni izlaz", // Ako je reason jednak 1, igrac je svojevoljno napustio igru (komandom /(q)uit ili ESC menijem)
        "Kick/Ban" // Ako je reason jednak 2, igrac je napustio server zbog kicka ili bana
    };

    format(szString, sizeof szString, "%s je izasao sa servera (%s).", playerName, szDisconnectReason[reason]);

    SendClientMessageToAll(0xC4C4C4FF, szString);
    return 1;
}
```

## Zabilješke

:::tip

Neke funkcije možda neće raditi kako treba kada se koriste u ovom callbacku zato što se igrač već diskonektovao kada je callback pozvan. Ovo znači da ne možeš dobiti nedvosmislenu informaciju iz funkcije kao npr GetPlayerIp i GetPlayerPos.

:::

## Srodne Funkcije
