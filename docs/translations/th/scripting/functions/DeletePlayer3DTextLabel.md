---
title: DeletePlayer3DTextLabel
description: Destroy a 3D text label that was created using CreatePlayer3DTextLabel.
tags: ["player", "3dtextlabel"]
---

## คำอธิบาย

Destroy a 3D text label that was created using CreatePlayer3DTextLabel.

| Name            | Description                                         |
| --------------- | --------------------------------------------------- |
| playerid        | The ID of the player whose 3D text label to delete. |
| PlayerText3D:id | The ID of the player's 3D text label to delete.     |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. This means the label specified doesn't exist.

## ตัวอย่าง

```c
new PlayerText3D:labelid = CreatePlayer3DTextLabel(...);

// Later...
DeletePlayer3DTextLabel(playerid, labelid);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [Create3DTextLabel](../../scripting/functions/Create3DTextLabel.md): Create a 3D text label.
- [Attach3DTextLabelToPlayer](../../scripting/functions/Attach3DTextLabelToPlayer.md): Attach a 3D text label to a player.
- [Attach3DTextLabelToVehicle](../../scripting/functions/Attach3DTextLabelToVehicle.md): Attach a 3D text label to a vehicle.
- [Update3DTextLabelText](../../scripting/functions/Update3DTextLabelText.md): Change the text of a 3D text label.
- [CreatePlayer3DTextLabel](../../scripting/functions/CreatePlayer3DTextLabel.md): Create A 3D text label for one player.
- [UpdatePlayer3DTextLabelText](../../scripting/functions/UpdatePlayer3DTextLabelText.md): Change the text of a player's 3D text label.
