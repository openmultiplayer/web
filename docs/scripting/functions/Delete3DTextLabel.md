---
title: Delete3DTextLabel
description: Delete a 3D text label (created with Create3DTextLabel).
tags: ["3dtextlabel"]
---

## Description

Delete a 3D text label (created with Create3DTextLabel).

| Name      | Description                            |
| --------- | -------------------------------------- |
| Text3D:id | The ID of the 3D text label to delete. |

## Returns

1 if the 3D text label was deleted, otherwise 0.

## Examples

```c
new Text3D:gMyLabel;

gMyLabel = Create3DTextLabel(...);

Delete3DTextLabel(gMyLabel);
```

## Related Functions

- [Create3DTextLabel](Create3DTextLabel): Create a 3D text label.
- [IsValid3DTextLabel](IsValid3DTextLabel): Checks if a 3D text label is valid.
- [Is3DTextLabelStreamedIn](Is3DTextLabelStreamedIn): Checks if a 3D text label is streamed in for a player.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Attach a 3D text label to a player.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Attach a 3D text label to a vehicle.
- [Update3DTextLabelText](Update3DTextLabelText): Change the text of a 3D text label.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Create A 3D text label for one player.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Delete a player's 3D text label.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText): Change the text of a player's 3D text label.
