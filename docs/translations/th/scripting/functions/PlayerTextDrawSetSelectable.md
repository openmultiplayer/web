---
id: PlayerTextDrawSetSelectable
title: PlayerTextDrawSetSelectable
description: Toggles whether a player-textdraw can be selected or not.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

This function was added in SA-MP 0.3e and will not work in earlier versions!

:::

## คำอธิบาย

Toggles whether a player-textdraw can be selected or not.

| Name            | Description                                                                         |
| --------------- | ----------------------------------------------------------------------------------- |
| playerid        | The ID of the player whose player-textdraw to set the selectability of.             |
| PlayerText:text | The ID of the player-textdraw to set the selectability of.                          |
| set             | Set the player-textdraw selectable (1) or non-selectable (0). By default this is 0. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if(!strcmp(cmdtext, "/select_ptd", true))
    {
        for(new i = 0; i < MAX_PLAYER_TEXT_DRAWS; i++) PlayerTextDrawSetSelectable(playerid, PlayerText:i, 1);
        SendClientMessage(playerid, 0xFFFFFFAA, "SERVER: All player-textdraws can be selected now!");
        return 1;
    }
    return 0;
}
```

## บันทึก

:::tip

Use PlayerTextDrawTextSize to define the clickable area.

:::

:::warning

PlayerTextDrawSetSelectable MUST be used BEFORE the textdraw is shown to the player.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SelectTextDraw: Enables the mouse, so the player can select a textdraw
- CancelSelectTextDraw: Cancel textdraw selection with the mouse
- OnPlayerClickPlayerTextDraw: Called when a player clicks on a player-textdraw.
