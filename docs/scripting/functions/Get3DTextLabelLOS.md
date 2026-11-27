---
title: "Get3DTextLabelLOS | open.mp"
description: "Gets the 3D text label line-of-sight."
canonical: https://open.mp/docs/scripting/functions/Get3DTextLabelLOS
language: en
---

# Get3DTextLabelLOS

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the 3D text label line-of-sight.

| Name | Description |
| --- | --- |
| Text3D:textid | The ID of the 3D text label to get the line-of-sight of. |

## Returns

Returns the line-of-sight of the 3D text label as boolean (`false`/`true`).

## Examples

```c
new Text3D:gMyLabel;
new bool:testLOS;

gMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, true);

testLOS = Get3DTextLabelLOS(gMyLabel);
// testLOS = true
```

## Related Functions

-   [Set3DTextLabelLOS](https://open.mp/docs/scripting/functions/Set3DTextLabelLOS): Sets the 3D text label line-of-sight.
-   [GetPlayer3DTextLabelLOS](https://open.mp/docs/scripting/functions/GetPlayer3DTextLabelLOS): Gets the player 3D text label line-of-sight.
