---
title: VehicleColourIndexToColour
description: Convert a car colour index to a HEX colour (RGBA).
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Convert a car colour index to a HEX colour (RGBA).

## Parameters

| Name         | Description                                    |
|--------------|------------------------------------------------|
| index        | [Vehicle colour](../resources/vehiclecolorid). |
| alpha = 0xFF | Alpha channel.                                 |

## Examples

```c
new colour = VehicleColourIndexToColour(3, 0xFF);
```

## Related Functions

- [GetRandomVehicleColourPair](GetRandomVehicleColourPair): Get random colour indexes that are valid for the given vehicle model.
- [GetVehicleColours](GetVehicleColours): Gets the vehicle colours.
