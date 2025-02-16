---
title: OnPlayerStateChange
sidebar_label: OnPlayerStateChange
description: Acest callback este apelat atunci când un jucător își schimbă starea.
tags: ["player"]
---

## Descriere

Acest callback este apelat atunci când un jucător își schimbă starea.

| Nume     | Descriere                                |
| -------- | ---------------------------------------- |
| playerid | ID-ul jucătorului care și-a schimbat starea. |
| newstate | Noua stare a jucătorului.                |
| oldstate | Starea anterioară a jucătorului.         |

Consultați [Starile jucătorului](../resources/playerstates) pentru o listă a tuturor stărilor de jucător disponibile.

## Returnări

It is always called first in filterscripts.

## Exemple

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (oldstate == PLAYER_STATE_ONFOOT && newstate == PLAYER_STATE_DRIVER) // Jucătorul a intrat într-un vehicul ca șofer
    {
        new vehicleid = GetPlayerVehicleID(playerid);
        AddVehicleComponent(vehicleid, 1010); // Adăugați NOS la vehicul
    }
    return 1;
}
```

## Note

<TipNPCCallbacks />

## Funcții similare

- [GetPlayerState](../functions/GetPlayerState): Obțineți starea actuală a unui jucător.
- [GetPlayerSpecialAction](../functions/GetPlayerSpecialAction): Obțineți acțiunea specială curentă a unui jucător.
- [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction): Setează acțiunea specială a unui jucător.