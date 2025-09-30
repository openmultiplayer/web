---
title: OnPlayerExitVehicle
sidebar_label: OnPlayerExitVehicle
description: Deze callback wordt aangeroepen wanneer een speler begint een voertuig te verlaten.
tags: ["player", "vehicle"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler begint een voertuig te verlaten.

| Naam      | Beschrijving                                     |
| --------- | ----------------------------------------------- |
| playerid  | Het ID van de speler die het voertuig verlaat. |
| vehicleid | Het ID van het voertuig dat de speler verlaat.  |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnPlayerExitVehicle(playerid, vehicleid)
{
    new string[64];
    format(string, sizeof(string), "INFO: You are exiting vehicle %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notities

:::warning

- Wordt niet aangeroepen als de speler van een fiets valt of uit een voertuig wordt gehaald door andere middelen zoals [SetPlayerPos](../functions/SetPlayerPos).
- Je moet [OnPlayerStateChange](OnPlayerStateChange) gebruiken en controleren of hun oude staat `PLAYER_STATE_DRIVER` of `PLAYER_STATE_PASSENGER` is en hun nieuwe staat `PLAYER_STATE_ONFOOT`.

:::

## Gerelateerde Callbacks

De volgende callbacks kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [OnPlayerEnterVehicle](OnPlayerEnterVehicle): Deze callback wordt aangeroepen wanneer een speler begint een voertuig in te gaan.
- [OnPlayerStateChange](OnPlayerStateChange): Deze callback wordt aangeroepen wanneer een speler van staat verandert.

## Gerelateerde Functies

De volgende functies kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [RemovePlayerFromVehicle](../functions/RemovePlayerFromVehicle): Gooi een speler uit hun voertuig.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): Controleer in welke stoel een speler zit.
