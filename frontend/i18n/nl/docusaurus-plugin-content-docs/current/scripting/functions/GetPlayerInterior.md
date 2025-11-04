---
title: GetPlayerInterior
sidebar_label: GetPlayerInterior
description: Haal het huidige interior van een speler op.
tags: ["player"]
---

## Beschrijving

Geeft de huidige interior‑ID van de speler terug.

| Naam | Beschrijving |
| ---- | ------------ |
| playerid | Speler waarvan je het interior wilt. |

## Retourneert

De interior‑ID waarin de speler zich bevindt.

## Voorbeeld

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/int", true))
    {
        new s[64];
        format(s, sizeof(s), "You are in interior %i", GetPlayerInterior(playerid));
        SendClientMessage(playerid, 0xFF8000FF, s);
        return 1;
    }
    return 0;
}
```

## Opmerkingen

Retourneert altijd interior 0 voor NPC's.

## Gerelateerd

- [SetPlayerInterior](SetPlayerInterior)
- [GetPlayerVirtualWorld](GetPlayerVirtualWorld)


