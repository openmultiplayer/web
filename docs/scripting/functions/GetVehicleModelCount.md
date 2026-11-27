---
title: "GetVehicleModelCount | open.mp"
description: "Gets the model count of a vehicle model."
canonical: https://open.mp/docs/scripting/functions/GetVehicleModelCount
language: en
---

# GetVehicleModelCount

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the model count of a vehicle model.

## Parameters

| Name | Description |
| --- | --- |
| modelid | The ID of the [vehicle model](https://open.mp/docs/scripting/resources/vehicleid). |

## Examples

```c
public OnGameModeInit()
{
    CreateVehicle(560, 2112.7607, -1308.3751, 23.6797, 90.0000, -1, -1, 100);
	CreateVehicle(560, 2104.5730, -1308.3313, 23.6797, 90.0000, -1, -1, 100);
	CreateVehicle(560, 2120.3616, -1308.4973, 23.6797, 90.0000, -1, -1, 100);

    new modelid = 560;
    printf("Vehicle model: %d - model count: %d", modelid, GetVehicleModelCount(modelid)); // Vehicle model: 560 - model count: 3
}
```

## Related Functions

-   [CreateVehicle](https://open.mp/docs/scripting/functions/CreateVehicle): Create a vehicle.
-   [GetVehicleModelsUsed](https://open.mp/docs/scripting/functions/GetVehicleModelsUsed): Get the number of used vehicle models on the server.
