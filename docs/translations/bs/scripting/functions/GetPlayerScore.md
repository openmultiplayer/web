---
title: GetPlayerScore
description: Ova funkcija vraća rezultat igrača kakav je postavljen pomoću SetPlayerScore.
tags: ["player"]
---

## Deskripcija

Ova funkcija vraća rezultat igrača kakav je postavljen pomoću SetPlayerScore.

| Ime      | Deskripcija                                 |
| -------- | ------------------------------------------- |
| playerid | Igrač od kojeg treba dobiti rezultat/score. |

## Returns

Score igrača.

## Primjeri

```c
public OnPlayerCommandText(playerid,text[])
{
    if (!strcmp(cmdtext,"/score",true))
    {
        new string[128];
        format(string, sizeof(string), "Score: %i", GetPlayerScore(playerid));
        SendClientMessage(playerid, COLOR_ORANGE, string);
        return 1;
    }
    return 0;
}
```

## Srodne Funkcije

- [SetPlayerScore](SetPlayerScore): Postavi rezultat/score igrača.
- [GetPlayerPing](GetPlayerPing): Dobij ping igrača.
