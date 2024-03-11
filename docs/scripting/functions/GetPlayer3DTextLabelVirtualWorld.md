---
title: GetPlayer3DTextLabelVirtualWorld
description: Gets the player's 3D text label virtual world id.
tags: ["player", "3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the player's 3D text label virtual world id.

| Name                | Description                                                          |
| ------------------- | -------------------------------------------------------------------- |
| playerid            | The ID of the player.                                                |
| PlayerText3D:textid | The ID of the player's 3D text label to get the virtual world id of. |

## Returns

Returns the virtual world id of the player's 3D text label.

## Examples

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new worldid;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);

worldid = GetPlayer3DTextLabelVirtualWorld(playerid, playerTextId);
```

## Notes

:::warning

There is no virtual world support for player 3D text labels.
This function just returns the player's virtual world!

:::

## Related Functions

- [Get3DTextLabelVirtualWorld](Get3DTextLabelVirtualWorld): Gets the 3D text label virtual world id.
