---
title: Get3DTextLabelColor
description: Gets the 3D text label color.
tags: ["3dtextlabel"]
---

:::warning

This function is deprecated. Please see [Get3DTextLabelColour](Get3DTextLabelColour).

:::

## Description

Gets the 3D text label color.

| Name      | Description                                                               |
| --------- | ------------------------------------------------------------------------- |
| Text3D:textid | The ID of the 3D text label to get the color of. |

## Returns

Returns the 3D text label color.

## Examples

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);

new color =  Get3DTextLabelColor(gMyLabel);
// The `color` will be 0x008080FF
```

## Related Functions

- [GetPlayer3DTextLabelColor](GetPlayer3DTextLabelColor): Gets the player 3D text label color.
