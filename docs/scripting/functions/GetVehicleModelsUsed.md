---
title: GetVehicleModelsUsed
description: Get the number of used vehicle models on the server.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

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

- [GetVehicleModelCount](GetVehicleModelCount): Gets the model count of a vehicle model.
