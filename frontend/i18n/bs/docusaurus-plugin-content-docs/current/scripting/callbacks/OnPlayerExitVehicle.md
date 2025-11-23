---
title: OnPlayerExitVehicle
sidebar_label: OnPlayerExitVehicle
description: Ovaj callback je pozvan kada igrač krene da izlazi iz vozila.
tags: ["player", "vehicle"]
---

## Deskripcija

Ovaj callback je pozvan kada igrač krene da izlazi iz vozila.

| Name      | Deskripcija                      |
| --------- | -------------------------------- |
| playerid  | ID igrača koji izlazi iz vozila. |
| vehicleid | ID vozila iz kojeg igrač izlazi. |

## Return-ovi

Uvijek je pozvana prva u filterskripti.

## Primjeri

```c
public OnPlayerExitVehicle(playerid, vehicleid)
{
    new string[35];
    format(string, sizeof(string), "INFO: Izlaziš iz vozila ID %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Zabilješke

:::warning

Nije pozvan kada igrač spadne sa bicikla ili ako je uklonjen iz vozila iz drugih namjera ili načina kao npr. korištenjem funkcije `SetPlayerPos`. Moraš koristiti `OnPlayerStateChange` i provjeriti da li je igračevo posljednje stanje PLAYER_STATE_DRIVER ili PLAYER_STATE_PASSENGER i da li je njihovo novo stanje PLAYER_STATE_ONFOOT.

:::

## Srodne Funkcije

- [RemovePlayerFromVehicle](../functions/RemovePlayerFromVehicle): Izbaci igrača iz njihovog vozila.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): Provjeri na kojem sjedištu se nalazi igrač.
