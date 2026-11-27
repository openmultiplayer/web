---
title: "GetPlayer3DTextLabelDrawDistance | open.mp"
description: "Gets the player's 3D text label draw distance."
canonical: https://open.mp/docs/scripting/functions/GetPlayer3DTextLabelDrawDistance
language: en
---

# GetPlayer3DTextLabelDrawDistance

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the player's 3D text label draw distance.

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |
| PlayerText3D:textid | The ID of the player's 3D text label to get the draw distance of. |

## Returns

Returns the draw distance of the player's 3D text label as float.

## Examples

```c
new PlayerText3D:playerTextId;
new Float:x, Float:y, Float:z;
new Float:drawDistance;

GetPlayerPos(playerid, x, y, z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, x, y, z, 40.0);

drawDistance = GetPlayer3DTextLabelDrawDistance(playerid, playerTextId);
// drawDistance = 40.0
```

## Related Functions

-   [SetPlayer3DTextLabelDrawDistance](https://open.mp/docs/scripting/functions/SetPlayer3DTextLabelDrawDistance): Sets the player's 3D text label draw distance.
-   [Get3DTextLabelDrawDistance](https://open.mp/docs/scripting/functions/Get3DTextLabelDrawDistance): Gets the 3D text label draw distance.
