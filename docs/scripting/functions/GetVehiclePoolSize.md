---
id: GetVehiclePoolSize
title: GetVehiclePoolSize
description: Gets the highest vehicleid currently in use on the server.
tags: ['vehicle']
---

:::warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

:::

## Description

Gets the highest vehicleid currently in use on the server.


| Name | Description |
|------|-------------|


## Examples


```c
RepairAllVehicles()
{
    for(new i = 1, j = GetVehiclePoolSize(); i <= j; i++) // vehicleids start at 1
    {
        RepairVehicle(i);
    }
}
```


## Related Functions


-  GetPlayerPoolSize: Gets the highest playerid connected to the server.