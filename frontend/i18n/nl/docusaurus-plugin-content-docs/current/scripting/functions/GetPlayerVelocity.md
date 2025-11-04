---
title: GetPlayerVelocity
sidebar_label: GetPlayerVelocity
description: Haal de snelheid (X, Y, Z) van een speler op.
tags: ["player"]
---

## Beschrijving

Haal de snelheid van een speler op langs de X‑, Y‑ en Z‑as (componenten).

| Naam | Beschrijving |
| ---- | ------------ |
| playerid | Speler waarvan je de snelheid wilt. |
| &Float:x | Referentie voor X‑snelheid |
| &Float:y | Referentie voor Y‑snelheid |
| &Float:z | Referentie voor Z‑snelheid |

## Retourneert

De componenten worden in de variabelen opgeslagen.

## Voorbeeld

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/velocity", true))
    {
        new Float:x, Float:y, Float:z, s[128];
        GetPlayerVelocity(playerid, x, y, z);
        format(s, sizeof(s), "Velocity X: %f, Y: %f, Z: %f", x, y, z);
        SendClientMessage(playerid, -1, s);
        return 1;
    }
    return 0;
}
```

## Gerelateerd

- [SetPlayerVelocity](SetPlayerVelocity)
- [SetVehicleVelocity](SetVehicleVelocity)
- [GetVehicleVelocity](GetVehicleVelocity)


