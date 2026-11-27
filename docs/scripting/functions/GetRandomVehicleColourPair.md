---
title: "GetRandomVehicleColourPair | open.mp"
description: "Get random colour indexes that are valid for the given vehicle model."
canonical: https://open.mp/docs/scripting/functions/GetRandomVehicleColourPair
language: en
---

# GetRandomVehicleColourPair

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get random colour indexes that are valid for the given vehicle model.

## Parameters

| Name | Description |
| --- | --- |
| modelid | The ID of the [vehicle model](https://open.mp/docs/scripting/resources/vehicleid). |
| &colour1 | A variable in which to store the colour1 value, passed by reference. |
| &colour2 | A variable in which to store the colour2 value, passed by reference. |
| &colour3 = 0 | A variable in which to store the colour3 value, passed by reference. |
| &colour4 = 0 | A variable in which to store the colour4 value, passed by reference. |

## Examples

```c
new
	colour1,
	colour2;

GetRandomVehicleColourPair(560, colour1, colour2);
```

## Related Functions

-   [VehicleColourIndexToColour](https://open.mp/docs/scripting/functions/VehicleColourIndexToColour): Convert a car colour index to a HEX colour (RGBA).
-   [GetVehicleColours](https://open.mp/docs/scripting/functions/GetVehicleColours): Gets the vehicle colours.
