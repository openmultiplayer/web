---
title: OnNPCExitVehicle
description: This callback is called when a NPC leaves a vehicle.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Description

This callback is called when a NPC leaves a vehicle.


## Examples

```c
public OnNPCExitVehicle()
{
    print("The NPC left the vehicle");
    return 1;
}
```

## Related Callbacks

- [OnNPCEnterVehicle](../callbacks/OnNPCEnterVehicle): Gets called when a NPC enters a vehicle.
