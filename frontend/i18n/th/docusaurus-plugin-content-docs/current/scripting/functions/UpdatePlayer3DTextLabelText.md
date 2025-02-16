---
title: UpdatePlayer3DTextLabelText
description: Updates a player 3D Text Label's text and color.
tags: ["player", "3dtextlabel"]
---

## คำอธิบาย

Updates a player 3D Text Label's text and color

| Name            | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| playerid        | The ID of the player for which the 3D Text Label was created. |
| PlayerText3D:textid | The 3D Text Label you want to update.                         |
| color           | The color the 3D Text Label should have from now on.          |
| text[]          | The new text which the 3D Text Label should have from now on. |

## ส่งคืน

This function does not return any specific values.

## บันทึก

:::warning

If text[] is empty, the server/clients next to the text might crash!

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [Create3DTextLabel](../functions/Create3DTextLabel.md): Create a 3D text label.
- [Delete3DTextLabel](../functions/Delete3DTextLabel.md): Delete a 3D text label.
- [Attach3DTextLabelToPlayer](../functions/Attach3DTextLabelToPlayer.md): Attach a 3D text label to a player.
- [Attach3DTextLabelToVehicle](../functions/Attach3DTextLabelToVehicle.md): Attach a 3D text label to a vehicle.
- [Update3DTextLabelText](../functions/Update3DTextLabelText.md): Change the text of a 3D text label.
- [CreatePlayer3DTextLabel](../functions/CreatePlayer3DTextLabel.md): Create A 3D text label for one player.
- [DeletePlayer3DTextLabel](../functions/DeletePlayer3DTextLabel.md): Delete a player's 3D text label.
