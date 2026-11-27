---
title: "GetVehicleModelsUsed | open.mp"
description: "Get the number of used vehicle models on the server."
canonical: https://open.mp/docs/scripting/functions/GetVehicleModelsUsed
language: en
---

# GetVehicleModelsUsed

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the number of used vehicle models on the server.

## Examples

```c
public OnGameModeInit()
{
    printf("Used vehicle models: %d", GetVehicleModelsUsed());
}
```

## Related Functions

-   [GetVehicleModelCount](https://open.mp/docs/scripting/functions/GetVehicleModelCount): Gets the model count of a vehicle model.
