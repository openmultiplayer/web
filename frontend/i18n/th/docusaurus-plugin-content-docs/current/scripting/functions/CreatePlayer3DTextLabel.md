---
title: CreatePlayer3DTextLabel
sidebar_label: CreatePlayer3DTextLabel
description: Creates a 3D Text Label only for a specific player.
tags: ["player", "3dtextlabel"]
---

## คำอธิบาย

Creates a 3D Text Label only for a specific player

| Name            | Description                                                                     |
| --------------- | ------------------------------------------------------------------------------- |
| playerid        | The player which should see the newly created 3DText Label.                     |
| text[]          | The text to display.                                                            |
| color           | The text color                                                                  |
| x               | X Coordinate (or offset if attached)                                            |
| y               | Y Coordinate (or offset if attached)                                            |
| z               | Z Coordinate (or offset if attached)                                            |
| DrawDistance    | The distance where you are able to see the 3D Text Label                        |
| attachedplayer  | The player you want to attach the 3D Text Label to. (None: INVALID_PLAYER_ID)   |
| attachedvehicle | The vehicle you want to attach the 3D Text Label to. (None: INVALID_VEHICLE_ID) |
| testLOS         | 0/1 Test the line-of-sight so this text can't be seen through walls             |

## ส่งคืน

The ID of the newly created Player 3D Text Label, or INVALID_3DTEXT_ID if the Player 3D Text Label limit (MAX_3DTEXT_PLAYER) was reached.

## ตัวอย่าง

```c
if (strcmp(cmd, "/playerlabel", true) == 0)
{
    new PlayerText3D:playertextid;
    new Float:X, Float:Y, Float:Z;
    GetPlayerPos( playerid, X, Y, Z );
    playertextid = CreatePlayer3DTextLabel(playerid,"Hello\nI'm at your position",0x008080FF,X,Y,Z,40.0);
    return 1;
}
```

## บันทึก

:::tip

drawdistance seems to be a lot smaller when spectating.

:::

:::warning

If text[] is empty, the server/clients next to the text might crash!

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [Create3DTextLabel](../../scripting/functions/Create3DTextLabel.md): Create a 3D text label.
- [Delete3DTextLabel](../../scripting/functions/Delete3DTextLabel.md): Delete a 3D text label.
- [Attach3DTextLabelToPlayer](../../scripting/functions/Attach3DTextLabelToPlayer.md): Attach a 3D text label to a player.
- [Attach3DTextLabelToVehicle](../../scripting/functions/Attach3DTextLabelToVehicle.md): Attach a 3D text label to a vehicle.
- [Update3DTextLabelText](../../scripting/functions/Update3DTextLabelText.md): Change the text of a 3D text label.
- [DeletePlayer3DTextLabel](../../scripting/functions/DeletePlayer3DTextLabel.md): Delete a player's 3D text label.
- [UpdatePlayer3DTextLabelText](../../scripting/functions/UpdatePlayer3DTextLabelText.md): Change the text of a player's 3D text label.
