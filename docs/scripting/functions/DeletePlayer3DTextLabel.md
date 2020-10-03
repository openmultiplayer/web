---
id: DeletePlayer3DTextLabel
title: DeletePlayer3DTextLabel
description: Destroy a 3D text label that was created using CreatePlayer3DTextLabel.
tags: ["player", "3dtextlabel"]
---

:::warning

This function was added in SA-MP 0.3a and will not work in earlier versions!

:::

## Description

Destroy a 3D text label that was created using CreatePlayer3DTextLabel.

| Name            | Description                                         |
| --------------- | --------------------------------------------------- |
| playerid        | The ID of the player whose 3D text label to delete. |
| PlayerText3D:id | The ID of the player's 3D text label to delete.     |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the label specified doesn't exist.

## Examples

```c
new PlayerText3D:labelid = CreatePlayer3DTextLabel(...);

// Later...
DeletePlayer3DTextLabel(playerid, labelid);
```

## Related Functions

- [Create3DTextLabel](../functions/Create3DTextLabel.md): Create a 3D text label.
- [Attach3DTextLabelToPlayer](../functions/Attach3DTextLabelToPlayer.md): Attach a 3D text label to a player.
- [Attach3DTextLabelToVehicle](../functions/Attach3DTextLabelToVehicle.md): Attach a 3D text label to a vehicle.
- [Update3DTextLabelText](../functions/Update3DTextLabelText.md): Change the text of a 3D text label.
- [CreatePlayer3DTextLabel](../functions/CreatePlayer3DTextLabel.md): Create A 3D text label for one player.
- [UpdatePlayer3DTextLabelText](../functions/UpdatePlayer3DTextLabelText.md): Change the text of a player's 3D text label.
