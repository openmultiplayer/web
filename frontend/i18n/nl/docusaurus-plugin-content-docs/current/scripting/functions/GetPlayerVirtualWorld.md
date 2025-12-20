---
title: GetPlayerVirtualWorld
sidebar_label: GetPlayerVirtualWorld
description: Haal de huidige virtual world van een speler op.
tags: ["player"]
---

## Beschrijving

Geeft de virtual world‑ID van de speler terug.

| Naam | Beschrijving |
| ---- | ------------ |
| playerid | Speler waarvan je de virtual world wilt. |

## Retourneert

De virtual world‑ID waarin de speler zich bevindt.

## Voorbeeld

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/world", true))
    {
        new s[32];
        format(s, sizeof(s), "Your virtual world: %i", GetPlayerVirtualWorld(playerid));
        SendClientMessage(playerid, -1, s);
        return 1;
    }
    return 0;
}
```

## Opmerkingen

Virtual worlds zijn niet hetzelfde als interiors.

## Gerelateerd

- [SetPlayerVirtualWorld](SetPlayerVirtualWorld)
- [GetVehicleVirtualWorld](GetVehicleVirtualWorld)
- [GetPlayerInterior](GetPlayerInterior)


