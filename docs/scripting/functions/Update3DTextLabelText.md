---
id: Update3DTextLabelText
title: Update3DTextLabelText
description: Updates a 3D Text Label text and color.
tags: ["3dtextlabel"]
---

:::warning

This function was added in SA-MP 0.3a and will not work in earlier versions!

:::

## Description

Updates a 3D Text Label text and color.

| Name      | Description                                                   |
| --------- | ------------------------------------------------------------- |
| Text3D:id | The 3D Text Label you want to update.                         |
| color     | The color the 3D Text Label should have from now on.          |
| text[]    | The new text which the 3D Text Label should have from now on. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    new Text3D:mylabel;
    mylabel = Create3DTextLabel("I'm at the coordinates:\n30.0,40.0,50.0",0x008080FF,30.0,40.0,50.0,40.0,0);
    Update3DTextLabelText(mylabel, 0xFFFFFFFF, "New text.");
    return 1;
}
```

## Notes

:::warning

If text[] is empty, the server/clients next to the text might crash!

:::

## Related Functions

- [Create3DTextLabel](Create3DTextLabel.md): Create a 3D text label.
- [Delete3DTextLabel](Delete3DTextLabel.md): Delete a 3D text label.
- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer.md): Attach a 3D text label to a player.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle.md): Attach a 3D text label to a vehicle.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel.md): Create A 3D text label for one player.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel.md): Delete a player's 3D text label.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabelText.md): Change the text of a player's 3D text label.
