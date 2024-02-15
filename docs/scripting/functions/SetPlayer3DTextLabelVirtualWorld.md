---
title: SetPlayer3DTextLabelVirtualWorld
description: Sets the player's 3D text label virtual world id.
tags: ["player", "3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Sets the player's 3D text label virtual world id.

| Name      | Description                                                               |
| --------- | ------------------------------------------------------------------------- |
| playerid | The ID of the player.  |
| PlayerText3D:textid | The ID of the player's 3D text label to set the virtual world id. |
| VirtualWorld | The virtual world in which you are able to see the 3D Text            |

## Examples

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);

SetPlayer3DTextLabelVirtualWorld(playerid, playerTextId, 60);
```

## Notes

:::warning

There is no virtual world support for player 3D text labels.
This function does nothing and is fundamentally broken!

:::

## Related Functions

- [GetPlayer3DTextLabelVirtualWorld](GetPlayer3DTextLabelVirtualWorld): Gets the player's 3D text label virtual world id.
- [Set3DTextLabelVirtualWorld](Set3DTextLabelVirtualWorld): Sets the 3D text label virtual world id.
