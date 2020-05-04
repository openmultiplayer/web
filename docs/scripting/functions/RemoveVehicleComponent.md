---
id: RemoveVehicleComponent
title: RemoveVehicleComponent
description: Remove a component from a vehicle.
tags: ['vehicle']
---

<TagLinks />

## Description

Remove a component from a vehicle.


| Name | Description |
|------|-------------|
|vehicleid | ID of the vehicle.|
|componentid | ID of the component to remove.|


## Returns

 0 - The component was not removed because the vehicle does not exist.

 1 - The component was successfully removed from the vehicle.


## Examples


```c
//remove Nitro from vehicle number 1
RemoveVehicleComponent(1,1010);
```


## Related Functions


-  AddVehicleComponent: Add a component to a vehicle.
-  GetVehicleComponentInSlot: Check what components a vehicle has.
-  GetVehicleComponentType: Check the type of component via the ID.
-  OnVehicleMod: Called when a vehicle is modded.
-  OnEnterExitModShop: Called when a vehicle enters or exits a mod shop.