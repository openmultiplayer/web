---
title: OnTrailerUpdate
sidebar_label: OnTrailerUpdate
description: Deze callback wordt aangeroepen wanneer een speler een trailer-update stuurt.
tags: ["vehicle"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler een trailer-update stuurt.

| Naam      | Beschrijving                                    |
| --------- | ---------------------------------------------- |
| playerid  | Het ID van de speler die een trailer-update stuurde |
| vehicleid | De trailer die wordt bijgewerkt                |

## Returns

0 - Annuleert alle trailer-updates die naar andere spelers worden gestuurd. Update wordt nog steeds naar de bijwerkende speler gestuurd.

1 - Verwerkt de trailer-update normaal en synchroniseert het tussen alle spelers.

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnTrailerUpdate(playerid, vehicleid)
{
    DetachTrailerFromVehicle(GetPlayerVehicleID(playerid));
    return 0;
}
```

## Notities

:::warning

Deze callback wordt zeer frequent aangeroepen per seconde per trailer. Vermijd intensieve berekeningen of intensieve file I/O in deze callback.

:::

## Gerelateerde Callbacks

- [OnUnoccupiedVehicleUpdate](OnUnoccupiedVehicleUpdate): Deze callback wordt aangeroepen wanneer de positie van een voertuig zonder bestuurder wordt gesynct door een client.

## Gerelateerde Functies

- [GetVehicleTrailer](../functions/GetVehicleTrailer): Check welke trailer een voertuig trekt.
- [IsTrailerAttachedToVehicle](../functions/IsTrailerAttachedToVehicle): Check of een trailer is gekoppeld aan een voertuig.
- [AttachTrailerToVehicle](../functions/AttachTrailerToVehicle): Koppel een trailer aan een voertuig.
- [DetachTrailerFromVehicle](../functions/DetachTrailerFromVehicle): Ontkoppel een trailer van een voertuig.
