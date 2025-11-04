---
title: GetPlayerHealth
sidebar_label: GetPlayerHealth
description: Haal de health van een speler op.
tags: ["player"]
---

## Beschrijving

Haal de health van een speler op (nuttig o.a. voor cheat‑detectie).

| Naam | Beschrijving |
| ---- | ------------ |
| playerid | ID van de speler. |
| &Float:health | Float‑referentie om health in op te slaan. |

## Retourneert

**true** bij succes, **false** bij falen (niet verbonden). Health wordt in de variabele geplaatst.

## Voorbeeld

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/doctor", true))
    {
        new Float:hp;
        GetPlayerHealth(playerid, hp);
        if (hp < 50.0) SetPlayerHealth(playerid, 50.0);
        return 1;
    }
    return 0;
}
```

## Opmerkingen

De client rapporteert waarden tot maximaal 255; hogere waarden lopen over (256→0, 257→1, …). Bij het opvragen wordt de waarde afgerond naar een geheel getal.

## Gerelateerd

- [SetPlayerHealth](SetPlayerHealth)
- [GetVehicleHealth](GetVehicleHealth)
- [GetPlayerArmour](GetPlayerArmour)


