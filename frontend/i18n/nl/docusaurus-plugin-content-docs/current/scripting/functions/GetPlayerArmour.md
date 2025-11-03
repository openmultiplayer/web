---
title: GetPlayerArmour
sidebar_label: GetPlayerArmour
description: Haal de armour van een speler op.
tags: ["player"]
---

## Beschrijving

Sla de armour van een speler op in een variabele.

| Naam | Beschrijving |
| ---- | ------------ |
| playerid | ID van de speler. |
| &Float:armour | Float‑referentie om armour in op te slaan. |

## Retourneert

**1** bij succes, **0** bij falen (niet verbonden). Armour wordt in de variabele geplaatst.

## Voorbeeld

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/myarmour", true))
    {
        new s[40];
        new Float:armour;
        GetPlayerArmour(playerid, armour);
        format(s, sizeof(s), "SERVER: Your armour is %.2f percent", armour);
        SendClientMessage(playerid, 0xFFFFFFAA, s);
        return 1;
    }
    return 0;
}
```

## Opmerkingen

De client rapporteert waarden tot maximaal 255; hogere waarden lopen over (256→0, 257→1, …). Bij het opvragen wordt de waarde afgerond naar een geheel getal.

## Gerelateerd

- [SetPlayerArmour](SetPlayerArmour)
- [GetPlayerHealth](GetPlayerHealth)
- [GetVehicleHealth](GetVehicleHealth)


