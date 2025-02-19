---
title: AddStaticVehicleEx
sidebar_label: AddStaticVehicleEx
description: Nagdaragdag ng 'static' na sasakyan (mga modelo ay paunang na-load para sa mga manlalaro) sa gamemode.
tags: ["vehicle"]
---

## Description

Nagdaragdag ng 'static' na sasakyan (mga modelo ay paunang na-load para sa mga manlalaro) sa gamemode. Naiiba sa AddStaticVehicle sa isang paraan lamang: nagbibigay-daan sa isang respawn time na itakda kapag ang sasakyan ay naiwang walang tao ng driver.

| Name                                     | Description                            |
| ---------------------------------------- | -------------------------------------- |
| modelid                                  | Ang Model ID para sa sasakyan.         |
| Float:spawn_X                            | Ang X-coordinate para sa sasakyan.     |
| Float:spawn_Y                            | Ang Y-coordinate para sa sasakyan.     |
| Float:spawn_Z                            | Ang Z-coordinate para sa sasakyan.     |
| Float:z_angle                            | Direksyon ng sasakyan - anggulo.       |
| [color1](../resources/vehiclecolorid) | Ang pangunahing ID ng kulay. -1 para sa random. |
| [color2](../resources/vehiclecolorid) | Ang pangalawang kulay ID. -1 para sa random. |
| respawn_delay                            | Tantalahin niya hanggang sa ang kotse ay respawned nang walang driver, sa ilang segundo. |
| addsiren                                 | Idinagdag sa 0.3.7; hindi gagana sa mga naunang bersyon. May default na value na 0. Nagbibigay-daan sa sasakyan na magkaroon ng sirena, kung ang sasakyan ay may busina. |

## Returns

Ang ID ng sasakyan ng sasakyang ginawa (1 - MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) kung hindi ginawa ang sasakyan (naabot na ang limitasyon ng sasakyan o naipasa ang di-wastong ID ng modelo ng sasakyan).

## Examples

```c
public OnGameModeInit()
{
    // Mag lagay ng Hydra (520) sa laro na respawn 15 segundo pagkatapos maiwan
    AddStaticVehicleEx (520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 15);

    return 1;
}
```

## Related Functions

- [AddStaticVehicle](AddStaticVehicle): Magdagdag ng static na sasakyan.
- [CreateVehicle](CreateVehicle): Gumawa ng sasakyan.