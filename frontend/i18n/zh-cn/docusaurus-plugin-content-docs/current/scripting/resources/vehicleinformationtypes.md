---
title: Vehicle Information Types
description: Vehicle Information Type Constants.
---

:::info

A list of vehicle info types used by [GetVehicleModelInfo](../functions/GetVehicleModelInfo) can be found here.

:::

| Vehicle Information Type              | Description                                                       |
| ------------------------------------- | ----------------------------------------------------------------- |
| `VEHICLE_MODEL_INFO_SIZE`             | The vehicle size                                                  |
| `VEHICLE_MODEL_INFO_FRONTSEAT`        | Position of the front seat \*                                      |
| `VEHICLE_MODEL_INFO_REARSEAT`         | Position of the rear seat \*                                       |
| `VEHICLE_MODEL_INFO_PETROLCAP`        | Position of the fuel cap \*                                        |
| `VEHICLE_MODEL_INFO_WHEELSFRONT`      | Position of the front wheels \*                                    |
| `VEHICLE_MODEL_INFO_WHEELSREAR`       | Position of the rear wheels \*                                     |
| `VEHICLE_MODEL_INFO_WHEELSMID`        | Position of the middle wheels (applies to vehicles which have more than 4 wheels) \* |
| `VEHICLE_MODEL_INFO_FRONT_BUMPER_Z`   | Height of the front bumper. [GetVehicleModelInfo](../functions/GetVehicleModelInfo) will only return the Z value when used |
| `VEHICLE_MODEL_INFO_REAR_BUMPER_Z`    | Height of the rear bumper. [GetVehicleModelInfo](../functions/GetVehicleModelInfo) will only return the Z value when used |

\* These values are calculated from the pivot (usually the center) of the vehicle.
