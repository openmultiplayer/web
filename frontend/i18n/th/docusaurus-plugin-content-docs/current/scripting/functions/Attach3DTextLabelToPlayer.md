---
title: Attach3DTextLabelToPlayer
sidebar_label: Attach3DTextLabelToPlayer
description: Attach a 3D text label to a player.
tags: ["player", "3dtextlabel"]
---

## คำอธิบาย

Attach a 3D text label to a player.

| Name      | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| Text3D:textid | The ID of the 3D text label to attach. Returned by Create3DTextLabel. |
| playerid  | The ID of the player to attach the label to.                          |
| OffsetX   | The X offset from the player.                                         |
| OffsetY   | The Y offset from the player.                                         |
| OffsetZ   | The Z offset from the player.                                         |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. This means the player and/or label do not exist.

## ตัวอย่าง

```c
public OnPlayerConnect(playerid)
{
    new Text3D:label = Create3DTextLabel("Hello, I am new here!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0);
    Attach3DTextLabelToPlayer(label, playerid, 0.0, 0.0, 0.7);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [Create3DTextLabel](Create3DTextLabel): Create a 3D text label.
- [Delete3DTextLabel](Delete3DTextLabel): Delete a 3D text label.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Attach a 3D text label to a vehicle.
- [Update3DTextLabelText](Update3DTextLabelText): Change the text of a 3D text label.
- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Create A 3D text label for one player.
- [DeletePlayer3DTextLabel](DeletePlayer3DTextLabel): Delete a player's 3D text label.
- [UpdatePlayer3DTextLabelText](UpdatePlayer3DTextLabel): Change the text of a player's 3D text label.
