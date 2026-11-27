---
title: "SetMyPos | open.mp"
description: "Set position of the NPC"
canonical: https://open.mp/docs/scripting/functions/SetMyPos
language: en
---

# SetMyPos

warning

This function is deprecated. Please see [NPC\_SetPos](https://open.mp/docs/scripting/functions/NPC_SetPos).

## Description

Set the position of the NPC.

| Name | Description |
| --- | --- |
| Float:x | The X coordinate to put the NPC at. |
| Float:y | The Y coordinate to put the NPC at. |
| Float:z | The Z coordinate to put the NPC at. |

## Returns

This function does not return any specific values.

## Example

```c
SetMyPos(0.0, 0.0, 3.0);
```

## Related Functions

-   [GetMyPos](https://open.mp/docs/scripting/functions/GetMyPos): Get the NPC's current position.
