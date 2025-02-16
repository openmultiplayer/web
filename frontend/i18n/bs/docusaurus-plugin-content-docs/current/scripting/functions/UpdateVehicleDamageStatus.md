---
title: UpdateVehicleDamageStatus
sidebar_label: UpdateVehicleDamageStatus
description: Postavlja različite statuse vizuelnog oštećenja vozila, kao što su ispucale gume, slomljena svjetla i oštećeni paneli.
tags: ["vehicle"]
---

:::tip

Za neke korisne funkcije za rad s vrijednostima oštećenja vozila pogledajte [ovdje](../resources/damagestatus).

:::

## Deskripcija

Postavlja različite statuse vizuelnog oštećenja vozila, kao što su ispucale gume, slomljena svjetla i oštećeni paneli.

| Ime       | Deskripcija                                       |
| --------- | ------------------------------------------------- |
| vehicleid | ID vozila za utvrđivanje štete.                   |
| panels    | Skup bitova koji sadrže status oštećenja panela.  |
| doors     | Skup bitova koji sadrže status oštećenja vrata.   |
| lights    | Skup bitova koji sadrže status oštećenja svjetla. |
| tires     | Skup bitova koji sadrže status oštećenja guma.    |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new 
	VEHICLE_PANEL_STATUS:panels,
	VEHICLE_DOOR_STATUS:doors,
	VEHICLE_LIGHT_STATUS:lights,
	VEHICLE_TIRE_STATUS:tires;

GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);

tires = VEHICLE_TIRE_STATUS:15; // Stavljajući gume na 15 biće probušene

// Or do it like this:
tires = (VEHICLE_TIRE_STATUS_FRONT_LEFT_POPPED | VEHICLE_TIRE_STATUS_FRONT_RIGHT_POPPED | VEHICLE_TIRE_STATUS_REAR_LEFT_POPPED | VEHICLE_TIRE_STATUS_REAR_RIGHT_POPPED);

UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
```

## Srodne Funkcije

- [SetVehicleHealth](SetVehicleHealth): Postavi helte vozila.
- [GetVehicleHealth](GetVehicleHealth): Provjeri helte vozila.
- [RepairVehicle](RepairVehicle): U potpunosti popravite vozilo.
- [GetVehicleDamageStatus](GetVehicleDamageStatus): Dobij status oštečenja za svaki dio posebno.

## Srodne Callbacks

- [OnVehicleDamageStatusUpdate](../callbacks/OnVehicleDamageStatusUpdate): Pozvano kada se stanje oštećenja vozila promijeni.

## Srodne Resources

- [Damage Status](../resources/damagestatus)
- [Vehicle Panel Status](../resources/vehicle-panel-status)
- [Vehicle Door Status](../resources/vehicle-door-status)
- [Vehicle Light Status](../resources/vehicle-light-status)
- [Vehicle Tire Status](../resources/vehicle-tire-status)
