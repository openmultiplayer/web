---
title: "GetMyFacingAngle | open.mp"
description: "Get the current facing angle of the NPC."
canonical: https://open.mp/docs/scripting/functions/GetMyFacingAngle
language: en
---

# GetMyFacingAngle

warning

This function is deprecated. Please see [NPC\_GetFacingAngle](https://open.mp/docs/scripting/functions/NPC_GetFacingAngle).

## Description

Get the current facing angle of the NPC.

| Name | Description |
| --- | --- |
| &Float:Angle | A float to save the angle in, passed by reference. |

## Returns

The facing angle is stored in the specified variable.

## Examples

```c
new Float:Angle;
GetMyFacingAngle(Angle);
printf("I am currently facing %f!", Angle);
```

## Related Functions

-   [SetMyFacingAngle](https://open.mp/docs/scripting/functions/SetMyFacingAngle): Set the NPC's facing angle.
