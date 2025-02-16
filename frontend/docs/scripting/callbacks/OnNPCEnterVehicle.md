---
title: OnNPCEnterVehicle
sidebar_label: OnNPCEnterVehicle
description: This callback is called when a NPC enters a vehicle.
tags: ["npc"]
---

## Description

This callback is called when a NPC enters a vehicle.

| Name      | Description                  |
| --------- | ---------------------------- |
| vehicleid | The vehicle ID the NPC enter |
| seatid    | The seatid the NPC uses      |

## Examples

```c
public OnNPCEnterVehicle(vehicleid, seatid)
{
    printf("OnNPCEnterVehicle ID: %d Seat: %d", vehicleid, seatid);
    return 1;
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

- [OnNPCExitVehicle](OnNPCExitVehicle): This callback is called when a NPC leaves a Vehicle.
