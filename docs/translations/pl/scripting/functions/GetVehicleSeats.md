---
title: GetVehicleSeats
description: Pobiera liczbę miejsc w pojeździe.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Opis

Pobiera najwyższe seatid w pojeździe.

| Name      | Description        |
| --------- | ------------------ |
| modelid | ID modelu pojazdu. |

## Wartości zwrotne

Najwyższe seatid pojazdu.

**255** gdy model jest niepoprawny.

## Przykład

```c
new vehicleid = GetPlayerVehicleID(playerid);
new modelid = GetVehicleModel(vehicleid);
new seats = GetVehicleSeats(modelid);

new string[64];
format(string, sizeof(string), "Najwyzsze seatid w tym pojezdzie: %d", seats);
SendClientMessage(playerid, -1, string);
```

## Powiązane funkcje

- [PutPlayerInVehicle](PutPlayerInVehicle): Puts a player in a vehicle.
