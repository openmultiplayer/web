---
title: "IsValidPlayer3DTextLabel | open.mp"
description: "Checks if a player's 3D text label is valid."
canonical: https://open.mp/docs/scripting/functions/IsValidPlayer3DTextLabel
language: en
---

# IsValidPlayer3DTextLabel

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Checks if a player's 3D text label is valid.

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |
| PlayerText3D:textid | The ID of the player's 3D text label to check. |

## Returns

This function returns **true** if the player's 3D text label is valid, or **false** if it is not.

## Examples

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);

if (IsValidPlayer3DTextLabel(playerid, playerTextId))
{
    // Do something
}
```

## Related Functions

-   [CreatePlayer3DTextLabel](https://open.mp/docs/scripting/functions/CreatePlayer3DTextLabel): Creates a 3D Text Label only for a specific player.
-   [IsValid3DTextLabel](https://open.mp/docs/scripting/functions/IsValid3DTextLabel): Checks if a 3D text label is valid.
