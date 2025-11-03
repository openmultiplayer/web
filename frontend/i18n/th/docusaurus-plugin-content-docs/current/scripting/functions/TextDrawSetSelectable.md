---
title: TextDrawSetSelectable
sidebar_label: TextDrawSetSelectable
description: Sets whether a textdraw can be selected (clicked on) or not.
tags: ["textdraw"]
---

## คำอธิบาย

Sets whether a textdraw can be selected (clicked on) or not

| Name     | Description                                                         |
| -------- | ------------------------------------------------------------------- |
| text     | The ID of the textdraw to make selectable.                          |
| bool:set | 'true' to make it selectable, or 'false' to make it not selectable. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/selectd", true))
    {
        for (new i = 0; i < MAX_TEXT_DRAWS; i++)
        {
            TextDrawSetSelectable(Text:i, true);
        }
        SendClientMessage(playerid, 0xFFFFFFAA, "SERVER: All textdraws can be selected now!");
        return 1;
    }
    return 0;
}
```

## บันทึก

:::tip

Use [TextDrawTextSize](TextDrawTextSize) to define the clickable area.

:::

:::warning

TextDrawSetSelectable must be used BEFORE the textdraw is shown to players for it to be selectable.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SelectTextDraw](SelectTextDraw): Enables the mouse, so the player can select a textdraw
- [CancelSelectTextDraw](CancelSelectTextDraw): Cancel textdraw selection with the mouse

## Related Callbacks

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Called when a player clicks on a textdraw.
