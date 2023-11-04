---
title: SelectTextDraw
description: Display the cursor and allow the player to select a textdraw.
tags: ["textdraw"]
---

:::warning

This function was added in SA-MP 0.3e and will not work in earlier versions!

:::

## คำอธิบาย

Display the cursor and allow the player to select a textdraw

| Name       | Description                                                    |
| ---------- | -------------------------------------------------------------- |
| playerid   | The ID of the player that should be able to select a textdraw  |
| hovercolor | The color of the textdraw when hovering over with mouse (RGBA) |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/tdselect", true))
    {
        SelectTextDraw(playerid, 0x00FF00FF); // Highlight green when hovering over
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Please select a textdraw!");
        return 1;
    }
    return 0;
}
```

## บันทึก

:::tip

It is the TEXT which will be highlighted when hovered over, NOT the box (if one is shown).

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CancelSelectTextDraw](CancelSelectTextDraw): Cancel textdraw selection with the mouse
- [TextDrawSetSelectable](TextDrawSetSelectable): Sets whether a textdraw is selectable through SelectTextDraw
- [PlayerTextDrawSetSelectable](PlayerTextDrawSetSelectable): Sets whether a player-textdraw is selectable through SelectTextDraw
- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Called when a player clicks on a textdraw.
- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): Called when a player clicks on a player-textdraw.
