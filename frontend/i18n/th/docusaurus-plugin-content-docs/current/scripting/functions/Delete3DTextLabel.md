---
title: Delete3DTextLabel
sidebar_label: Delete3DTextLabel
description: Delete a 3D text label (created with Create3DTextLabel).
tags: ["3dtextlabel"]
---

## คำอธิบาย

Delete a 3D text label (created with Create3DTextLabel).

| Name      | Description                            |
| --------- | -------------------------------------- |
| Text3D:textid | The ID of the 3D text label to delete. |

## ส่งคืน

1 if the 3D text label was deleted, otherwise 0.

## ตัวอย่าง

```c
new Text3D:MyLabel;

MyLabel = Create3DTextLabel(...);

Delete3DTextLabel(MyLabel);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [Create3DTextLabel](../../scripting/functions/Create3DTextLabel.md): Create a 3D text label.
- [Attach3DTextLabelToPlayer](../../scripting/functions/Attach3DTextLabelToPlayer.md): Attach a 3D text label to a player.
- [Attach3DTextLabelToVehicle](../../scripting/functions/Attach3DTextLabelToVehicle.md): Attach a 3D text label to a vehicle.
- [Update3DTextLabelText](../../scripting/functions/Update3DTextLabelText.md): Change the text of a 3D text label.
- [CreatePlayer3DTextLabel](../../scripting/functions/CreatePlayer3DTextLabel.md): Create A 3D text label for one player.
- [DeletePlayer3DTextLabel](../../scripting/functions/DeletePlayer3DTextLabel.md): Delete a player's 3D text label.
- [UpdatePlayer3DTextLabelText](../../scripting/functions/UpdatePlayer3DTextLabelText.md): Change the text of a player's 3D text label.
