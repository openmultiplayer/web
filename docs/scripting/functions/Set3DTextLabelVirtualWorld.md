---
title: "Set3DTextLabelVirtualWorld | open.mp"
description: "Sets the 3D text label virtual world id."
canonical: https://open.mp/docs/scripting/functions/Set3DTextLabelVirtualWorld
language: en
---

# Set3DTextLabelVirtualWorld

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Sets the 3D text label virtual world id.

| Name | Description |
| --- | --- |
| Text3D:textid | The ID of the 3D text label to set the virtual world id. |
| virtualWorld | The virtual world in which you are able to see the 3D Text |

## Examples

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 20, false);

Set3DTextLabelVirtualWorld(gMyLabel, 60);
// The virtual world id changed from '20' to '60'
```

## Related Functions

-   [Get3DTextLabelVirtualWorld](https://open.mp/docs/scripting/functions/Get3DTextLabelVirtualWorld): Gets the 3D text label virtual world id.
-   [SetPlayer3DTextLabelVirtualWorld](https://open.mp/docs/scripting/functions/SetPlayer3DTextLabelVirtualWorld): Sets the player 3D text label virtual world id.
