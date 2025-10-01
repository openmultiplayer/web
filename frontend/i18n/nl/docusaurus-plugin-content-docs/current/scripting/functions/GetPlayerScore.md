---
title: GetPlayerScore
sidebar_label: GetPlayerScore
description: Haal de score van een speler op (zoals gezet met SetPlayerScore).
tags: ["player"]
---

## Beschrijving

Geeft de score van een speler terug.

| Naam | Beschrijving |
| ---- | ------------ |
| playerid | Speler waarvan je de score wilt. |

## Retourneert

De score van de speler.

## Voorbeeld

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/score", true))
    {
        new s[32];
        format(s, sizeof(s), "Your score: %i", GetPlayerScore(playerid));
        SendClientMessage(playerid, 0xFF8000FF, s);
        return 1;
    }
    return 0;
}
```

## Gerelateerd

- [SetPlayerScore](SetPlayerScore)
- [GetPlayerPing](GetPlayerPing)


