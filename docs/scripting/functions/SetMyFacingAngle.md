---
title: "SetMyFacingAngle | open.mp"
description: "Set the NPC's facing angle."
canonical: https://open.mp/docs/scripting/functions/SetMyFacingAngle
language: en
---

# SetMyFacingAngle

warning

This function is deprecated. Please see [NPC\_SetFacingAngle](https://open.mp/docs/scripting/functions/NPC_SetFacingAngle).

## Description

Set the NPC's facing angle.

| Name | Description |
| --- | --- |
| Float:ang | The new NPC's facing angle. |

## Examples

```c
SetMyFacingAngle(0); //NPC faces north
```

```c
       north (0)
          |
(90) west- -east (270)
          |
       south (180)
```

## Related Functions

-   [GetMyFacingAngle](https://open.mp/docs/scripting/functions/GetMyFacingAngle): Get the NPC's facing angle.
