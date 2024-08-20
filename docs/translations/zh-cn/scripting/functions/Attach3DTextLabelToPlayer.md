---
title: Attach3DTextLabelToPlayer
description: Attach a 3D text label to a player.
tags: ["player", "3dtextlabel"]
---

## Description

Attach a 3D text label to a player.

| Name          | Description                                                           |
| ------------- | --------------------------------------------------------------------- |
| Text3D:textid | The ID of the 3D text label to attach. Returned by Create3DTextLabel. |
| playerid      | The ID of the player to attach the label to.                          |
| Float:offsetX | The X offset from the player.                                         |
| Float:offsetY | The Y offset from the player.                                         |
| Float:offsetZ | The Z offset from the player.                                         |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. This means the player and/or label do not exist.

## Examples

```c
public OnPlayerConnect(playerid)
{
    new Text3D:textLabel = Create3DTextLabel("Hello, I am new here!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0);
    Attach3DTextLabelToPlayer(textLabel, playerid, 0.0, 0.0, 0.7);
    return 1;
}
```

## Related Functions

- [Create3DTextLabel](Create3DTextLabel): Create a 3D text label.
- [Delete3DTextLabel](Delete3DTextLabel): Delete a 3D text label.
- [Get3DTextLabelAttachedData](Get3DTextLabelAttachedData): Gets the 3D text label attached data.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Attach a 3D text label to a vehicle.
- [Update3DTextLabelText](Update3DTextLabelText): Change the text of a 3D text label.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Create A 3D text label for one player.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Delete a player's 3D text label.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Change the text of a player's 3D text label.
