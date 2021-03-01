---
title: GetAnimationName
description: Dobij library/ime animacije za index.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3b i ne radi u nižim verzijama!

:::

## Deskripcija

Dobij library/ime animacije za index

| Ime        | Deskripcija                                                    |
| ---------- | -------------------------------------------------------------- |
| index      | Index animacije, returnovan/vraćen od GetPlayerAnimationIndex. |
| animlib[]  | String varijabla koja čuva library animacije.                  |
| len1       | Veličina stringa koji čuva library animacije.                  |
| animname[] | String varijabla koja čuva ime animacije.                      |
| len2       | Veličina stringa koji čuva ime animacije.                      |

## Returns

1 uspješno, 0 pri grešci.

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
        format(msgText, sizeof msgText, "Running anim: %s %s", animLib, animName);
        SendClientMessage(playerid, 0xFFFFFFFF, msgText);
    }
    return 1;
}
```

## Srodne Funkcije

- [GetPlayerAnimationIndex](GetPlayerAnimationIndex): Vraća indeks bilo koje primijenjene animacije koja se izvodi.
