---
title: "GetMyPos | open.mp"
description: "Get position of the NPC"
canonical: https://open.mp/docs/scripting/functions/GetMyPos
language: en
---

# GetMyPos

warning

This function is deprecated. Please see [NPC\_GetPos](https://open.mp/docs/scripting/functions/NPC_GetPos).

## Description

Get the position of the NPC.

| Name | Description |
| --- | --- |
| &Float:x | A float to save the X coordinate, passed by reference. |
| &Float:y | A float to save the Y coordinate, passed by reference. |
| &Float:z | A float to save the Z coordinate, passed by reference. |

## Returns

This function does not return any specific values.

## Example

```c
new Float:x, Float:y, Float:z;
GetMyPos(x, y, z);
printf("I am currently at %f, %f, %f!", x, y, z);
```

## Related Functions

-   [SetMyPos](https://open.mp/docs/scripting/functions/SetMyPos): Set the NPC's current position.
