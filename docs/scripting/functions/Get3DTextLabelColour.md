---
title: "Get3DTextLabelColour | open.mp"
description: "Gets the 3D text label colour."
canonical: https://open.mp/docs/scripting/functions/Get3DTextLabelColour
language: en
---

# Get3DTextLabelColour

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the 3D text label colour.

| Name | Description |
| --- | --- |
| Text3D:textid | The ID of the 3D text label to get the colour of. |

## Returns

Returns the 3D text label colour.

## Examples

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);

new colour = Get3DTextLabelColour(gMyLabel);
// colour = 0x008080FF
```

## Related Functions

-   [GetPlayer3DTextLabelColour](https://open.mp/docs/scripting/functions/GetPlayer3DTextLabelColour): Gets the player 3D text label colour.
