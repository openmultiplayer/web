---
title: "GetPlayer3DTextLabelColor | open.mp"
description: "Gets the player's 3D text label color."
canonical: https://open.mp/docs/scripting/functions/GetPlayer3DTextLabelColor
language: en
---

# GetPlayer3DTextLabelColor

warning

This function is deprecated. Please see [GetPlayer3DTextLabelColour](https://open.mp/docs/scripting/functions/GetPlayer3DTextLabelColour).

## Description

Gets the player's 3D text label color.

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |
| PlayerText3D:textid | The ID of the player's 3D text label to get the color of. |

## Returns

Returns the player's 3D text label color.

## Examples

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new color;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);

color = GetPlayer3DTextLabelColor(playerid, playerTextId);
// color = 0x008080FF
```

## Related Functions

-   [Get3DTextLabelColor](https://open.mp/docs/scripting/functions/Get3DTextLabelColor): Gets the 3D text label color.
