---
title: "GetPlayer3DTextLabelColour | open.mp"
description: "Gets the player's 3D text label colour."
canonical: https://open.mp/docs/scripting/functions/GetPlayer3DTextLabelColour
language: en
---

# GetPlayer3DTextLabelColour

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the player's 3D text label colour.

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |
| PlayerText3D:textid | The ID of the player's 3D text label to get the colour of. |

## Returns

Returns the player's 3D text label colour.

## Examples

```c
new PlayerText3D:playerTextId;
new Float:x, Float:y, Float:z;
new colour;

GetPlayerPos(playerid, x, y, z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, x, y, z, 40.0);

colour = GetPlayer3DTextLabelColour(playerid, playerTextId);
// colour = 0x008080FF
```

## Related Functions

-   [Get3DTextLabelColour](https://open.mp/docs/scripting/functions/Get3DTextLabelColour): Gets the 3D text label colour.
