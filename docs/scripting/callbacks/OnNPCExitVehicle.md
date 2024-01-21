---
title: OnNPCExitVehicle
description: This callback is called when a NPC leaves a vehicle.
tags: ["npc", "vehicle"]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Description

This callback is called when a NPC leaves a vehicle.


## Examples

```pawn
public OnNPCExitVehicle()
{
    print("The NPC left the vehicle");
    return 1;
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnNPCEnterVehicle](OnNPCEnterVehicle): This callback is called when a NPC enters a vehicle.
