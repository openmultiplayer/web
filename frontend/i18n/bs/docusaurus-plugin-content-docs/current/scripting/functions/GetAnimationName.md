---
title: GetAnimationName
sidebar_label: GetAnimationName
description: Dobij library/ime animacije za indeks.
tags: []
---

## Deskripcija

Dobij library/ime animacije za indeks.

| Ime        | Deskripcija                                                    |
| ---------- | -------------------------------------------------------------- |
| index      | Indeks animacije, koji vraća funkcija GetPlayerAnimationIndex. |
| animlib[]  | String varijabla koja pohranjuje library animacije.            |
| len1       | Veličina stringa koji pohranjuje library animacija.            |
| animname[] | String varijabla koja pohranjuje naziv animacije.              |
| len2       | Veličina stringa koji pohranjuje naziv animacije.              |

## Returns

1 za uspješno izvršavanje, 0 za neuspješno izvršavanje.

## Primjeri

```c
public OnPlayerUpdate(playerid)
{
    if (GetPlayerAnimationIndex(playerid))
    {
        new
            animLib[32],
            animName[32],
            msgText[128];

        GetAnimationName(GetPlayerAnimationIndex(playerid), animLib, sizeof animLib, animName, sizeof animName);
        format(msgText, sizeof msgText, "Pokretanje animacije: %s %s", animLib, animName);
        SendClientMessage(playerid, 0xFFFFFFFF, msgText);
    }
    return 1;
}
```

## Srodne Funkcije

- [GetPlayerAnimationIndex](GetPlayerAnimationIndex): Returna indeks bilo koje pokrenute primijenjene animacije.
