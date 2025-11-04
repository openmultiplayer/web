---
title: GetPlayerPos
sidebar_label: GetPlayerPos
description: Haal de positie van een speler op (X, Y, Z).
tags: ["player"]
---

## Beschrijving

Haal de positie van een speler op, als X‑, Y‑ en Z‑coördinaten.

| Naam | Beschrijving |
| ---- | ------------ |
| playerid | ID van de speler. |
| &Float:x | Referentie voor X‑coördinaat |
| &Float:y | Referentie voor Y‑coördinaat |
| &Float:z | Referentie voor Z‑coördinaat |

## Retourneert

**true** bij succes, **false** bij falen (speler niet verbonden). Coördinaten worden in de variabelen opgeslagen.

## Voorbeeld

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    new Float:x, Float:y, Float:z;
    GetPlayerPos(playerid, x, y, z);
    CreatePickup(1212, 4, x, y, z, -1);
    return 1;
}
```

## Opmerkingen

Kan onbetrouwbaar zijn in [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect) en `OnPlayerRequestClass` (speler niet gespawned).

## Gerelateerd

- [SetPlayerPos](SetPlayerPos)
- [GetVehiclePos](GetVehiclePos)
- [IsPlayerInRangeOfPoint](IsPlayerInRangeOfPoint)
- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint)


