---
title: OnNPCEnterVehicle
description: This callback is called when a NPC enters a vehicle.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Description

This callback is called when a NPC enters a vehicle.

| Name         | Description                                             |
| ------------ | ------------------------------------------------------- |
| vehicleid    | The vehicle ID the NPC enter                            |
| seatid       | The seatid the NPC uses                                 |

## Examples

```c
public OnNPCEnterVehicle(vehicleid, seatid)
{
    printf("OnNPCEnterVehicle ID: %d Seat: %d", vehicleid, seatid);
    return 1;
}
```

## Related Callbacks

- [OnNPCExitVehicle](../callbacks/OnNPCExitVehicle): Gets called when a NPC leaves a Vehicle.
