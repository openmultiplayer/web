---
id: Delete3DTextLabel
title: Delete3DTextLabel
description: Delete a 3D text label (created with Create3DTextLabel).
tags: ["3dtextlabel"]
---

:::warning

This function was added in SA-MP 0.3a and will not work in earlier versions!

:::

## Description

Delete a 3D text label (created with Create3DTextLabel).

| Name      | Description                            |
| --------- | -------------------------------------- |
| Text3D:id | The ID of the 3D text label to delete. |

## Returns

1 if the 3D text label was deleted, otherwise 0.

## Examples

```c
new Text3D:MyLabel;

MyLabel = Create3DTextLabel(...);

Delete3DTextLabel(MyLabel);
```

## Related Functions

- [Create3DTextLabel](../functions/Create3DTextLabel.md): Create a 3D text label.
- [Attach3DTextLabelToPlayer](../functions/Attach3DTextLabelToPlayer.md): Attach a 3D text label to a player.
- [Attach3DTextLabelToVehicle](../functions/Attach3DTextLabelToVehicle.md): Attach a 3D text label to a vehicle.
- [Update3DTextLabelText](../functions/Update3DTextLabelText.md): Change the text of a 3D text label.
- [CreatePlayer3DTextLabel](../functions/CreatePlayer3DTextLabel.md): Create A 3D text label for one player.
- [DeletePlayer3DTextLabel](../functions/DeletePlayer3DTextLabel.md): Delete a player's 3D text label.
- [UpdatePlayer3DTextLabelText](../functions/UpdatePlayer3DTextLabelText.md): Change the text of a player's 3D text label.
