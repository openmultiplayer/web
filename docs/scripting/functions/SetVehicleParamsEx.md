---
title: SetVehicleParamsEx
description: Sets a vehicle's parameters for all players.
tags: ["vehicle"]
---

## Description

Sets a vehicle's parameters for all players.

| Name           | Description                                                     |
| -------------- | --------------------------------------------------------------- |
| vehicleid      | The ID of the vehicle to set the parameters of.                 |
| bool:engine    | Engine status. 0 - Off, 1 - On.                                 |
| bool:lights    | Light status. 0 - Off, 1 - On.                                  |
| bool:alarm     | Vehicle alarm status. If on, the alarm starts. 0 - Off, 1 - On. |
| bool:doors     | Door lock status. 0 - Unlocked, 1 - Locked.                     |
| bool:bonnet    | Bonnet (hood) status. 0 - Closed, 1 - Open.                     |
| bool:boot      | Boot/trunk status. 0 - Closed, 1 - Open.                        |
| bool:objective | Toggle the objective arrow above the vehicle. 0 - Off, 1 - On.  |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. This means the vehicle does not exist.

## Examples

```c
// On top of our script, declaring a global variable
new
    gVehicleAlarmTimer[MAX_VEHICLES] = {0, ...};

// If setting a single parameter, you should obtain the current parameters so they aren't ALL changed
new
    bool:engine, bool:lights, bool:alarm, bool:doors, bool:bonnet, bool:boot, bool:objective;

// Somewhere where you create the vehicle..
GetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
SetVehicleParamsEx(vehicleid, VEHICLE_PARAMS_ON, lights, alarm, doors, bonnet, boot, objective); // ONLY the engine param was changed to VEHICLE_PARAMS_ON (1)

// The function
SetVehicleParamsEx_Fixed(vehicleid, &bool:engine, &bool:lights, &bool:alarm, &bool:doors, &bool:bonnet, &bool:boot, &bool:objective)
{
    SetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
    if (alarm)
    {
        // Kill the timer, reset the timer identifier and then restart it if it was already running
        KillTimer(gVehicleAlarmTimer[vehicleid]);
        gVehicleAlarmTimer[vehicleid] = 0;
        gVehicleAlarmTimer[vehicleid] = SetTimerEx("DisableVehicleAlarm", 20000, false, "d", vehicleid);
    }
}

forward DisableVehicleAlarm(vehicleid);
public DisableVehicleAlarm(vehicleid)
{
    new
        bool:engine, bool:lights, bool:alarm, bool:doors, bool:bonnet, bool:boot, bool:objective;

    GetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
    if (alarm == VEHICLE_PARAMS_ON)
    {
        SetVehicleParamsEx(vehicleid, engine, lights, VEHICLE_PARAMS_OFF, doors, bonnet, boot, objective);
    }

    // Reset the timer identifier
    gVehicleAlarmTimer[vehicleid] = 0;
}
```

## Definitions

- `VEHICLE_PARAMS_UNSET` (-1)
- `VEHICLE_PARAMS_OFF` (0)
- `VEHICLE_PARAMS_ON` (1)

## Notes

:::tip

- The alarm will not reset when finished, you'll need to reset it by yourself with this function.
- Lights also operate during the day (Only when [ManualVehicleEngineAndLights](ManualVehicleEngineAndLights) is enabled).

:::

## Related Functions

- [GetVehicleParamsEx](GetVehicleParamsEx): Get a vehicle's parameters.
- [SetVehicleParamsForPlayer](SetVehicleParamsForPlayer): Set the parameters of a vehicle for a player.
- [UpdateVehicleDamageStatus](UpdateVehicleDamageStatus): Update the vehicle damage.
