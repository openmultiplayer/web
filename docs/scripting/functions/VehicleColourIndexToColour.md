---
title: "VehicleColourIndexToColour | open.mp"
description: "Convert a car colour index to a HEX colour (RGBA)."
canonical: https://open.mp/docs/scripting/functions/VehicleColourIndexToColour
language: en
---

# VehicleColourIndexToColour

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Convert a car colour index to a HEX colour (RGBA).

## Parameters

| Name | Description |
| --- | --- |
| index | [Vehicle colour](https://open.mp/docs/scripting/resources/vehiclecolorid). |
| alpha = 0xFF | Alpha channel. |

## Examples

```c
new colour = VehicleColourIndexToColour(3, 0xFF);
```

## Related Functions

-   [GetRandomVehicleColourPair](https://open.mp/docs/scripting/functions/GetRandomVehicleColourPair): Get random colour indexes that are valid for the given vehicle model.
-   [GetVehicleColours](https://open.mp/docs/scripting/functions/GetVehicleColours): Gets the vehicle colours.
