---
title: AddStaticVehicle
sidebar_label: AddStaticVehicle
description: Nagdaragdag ng 'static' na sasakyan (na-pre-load ang mga modelo para sa mga manlalaro) sa gamemode.
tags: ["vehicle"]
---

## Description

Nagdaragdag ng 'static' na sasakyan (na-pre-load ang mga modelo para sa mga manlalaro) sa gamemode.

| Name                                     | Description                            |
| ---------------------------------------- | -------------------------------------- |
| modelid                                  | Ang Model ID para sa sasakyan.         |
| Float:spawn_X                            | Ang X-coordinate para sa sasakyan.     |
| Float:spawn_Y                            | Ang Y-coordinate para sa sasakyan.     |
| Float:spawn_Z                            | Ang Z-coordinate para sa sasakyan.     |
| Float:z_angle                            | Direksyon ng sasakyan - anggulo.       |
| [color1](../resources/vehiclecolorid) | Ang pangunahing ID ng kulay. -1 para sa random. |
| [color2](../resources/vehiclecolorid) | Ang pangalawang kulay ID. -1 para sa random. |

## Returns

Ang ID ng sasakyan ng sasakyang ginawa (sa pagitan ng 1 at MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) kung hindi ginawa ang sasakyan (naabot na ang limitasyon ng sasakyan o naipasa ang di-wastong ID ng modelo ng sasakyan).

## Examples

```c
public OnGameModeInit()
{
    // Mag lagay ng Hydra sa laro
    AddStaticVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, 0, 1);

    return 1;
}
```

## Related Functions

- [AddStaticVehicleEx](AddStaticVehicleEx): Magdagdag ng static na sasakyan na may custom na respawn time.
- [CreateVehicle](CreateVehicle): Gumawa ng sasakyan.
- [DestroyVehicle](DestroyVehicle): Sirain ang sasakyan.