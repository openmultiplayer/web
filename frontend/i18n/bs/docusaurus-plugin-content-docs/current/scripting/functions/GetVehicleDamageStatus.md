---
title: GetVehicleDamageStatus
description: Dohvatite status oštećenja vozila.
tags: ["vehicle"]
---

:::tip

Za neke korisne funkcije za rad sa vrijednostima oštećenja vozila pogledajte [ovdje](../resources/damagestatus).

:::

## Deskripcija

Dohvatite status oštećenja vozila.

| Ime                         | Deskripcija                                                                    |
| --------------------------- | ------------------------------------------------------------------------------ |
| vehicleid                   | ID vozila za dobiti status oštećenja.                                          |
| VEHICLE_PANEL_STATUS:panels | Varijabla za pohraniti podatke o oštećenjima panela, proslijeđeno referencom.  |
| VEHICLE_DOOR_STATUS:doors   | Varijabla za pohraniti podatke o oštećenjima vrata, proslijeđeno referencom.   |
| VEHICLE_LIGHT_STATUS:lights | Varijabla za pohraniti podatke o oštećenjima svjetla, proslijeđeno referencom. |
| VEHICLE_TIRE_STATUS:tires   | Varijabla za pohraniti podatke o oštećenjima guma, proslijeđeno referencom.    |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da navedeno vozilo ne postoji.

## Primjeri

```c
new 
	VEHICLE_PANEL_STATUS:panels,
	VEHICLE_DOOR_STATUS:doors,
	VEHICLE_LIGHT_STATUS:lights,
	VEHICLE_TIRE_STATUS:tires;

GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
printf("Vehicle Status: [Paneli]: %d - [Vrata]: %d - [Svjetla]: %d - [Gume]: %d", panels, doors, lights, tires);
```

## Srodne Funkcije

- [UpdateVehicleDamageStatus](UpdateVehicleDamageStatus): Ažurirajte štetu na vozilu.
- [SetVehicleHealth](SetVehicleHealth): Postavi helte vozila.
- [GetVehicleHealth](GetVehicleHealth): Provjeri helte vozila.
- [RepairVehicle](RepairVehicle): U potpunosti popravite vozilo.

## Srodne Callbacks

- [OnVehicleDamageStatusUpdate](../callbacks/OnVehicleDamageStatusUpdate): Pozvano kada se stanje oštećenja vozila promijeni.

## Srodne Resources

- [Damage Status](../resources/damagestatus)
- [Vehicle Panel Status](../resources/vehicle-panel-status)
- [Vehicle Door Status](../resources/vehicle-door-status)
- [Vehicle Light Status](../resources/vehicle-light-status)
- [Vehicle Tire Status](../resources/vehicle-tire-status)
