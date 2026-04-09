---
title: GetVehicleSeats
sidebar_label: GetVehicleSeats
description: Gets the number of seats in the vehicle.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the number of seats in the vehicle.

| Name    | Description              |
| ------- | ------------------------ |
| modelid | ID of the vehicle model. |

## Return Values

Returns the number of seats.

**255** if the model is invalid.

## Examples

```c
new vehicleid = GetPlayerVehicleID(playerid);
new modelid = GetVehicleModel(vehicleid);
new seats = GetVehicleSeats(modelid);

new string[64];
format(string, sizeof(string), "Number of seats in this vehicle: %d", seats);
SendClientMessage(playerid, -1, string);
```

## Related Functions

- [PutPlayerInVehicle](PutPlayerInVehicle): Puts a player in a vehicle.
