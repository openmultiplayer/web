---
title: GetVehicleModelCount
description: Gets the model count of a vehicle model.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the model count of a vehicle model.

## Parameters

| Name    | Description                                            |
|---------|--------------------------------------------------------|
| modelid | The ID of the [vehicle model](../resources/vehicleid). |

## Examples

```c
main()
{
    new modelid = 560;
    printf("Vehicle model: %d - model count: %d", modelid, GetVehicleModelCount(modelid)); // Vehicle model: 560 - model count: 1
}
```

## Related Functions

- [GetVehicleModelsUsed](GetVehicleModelsUsed): Get the number of used vehicle models on the server.
