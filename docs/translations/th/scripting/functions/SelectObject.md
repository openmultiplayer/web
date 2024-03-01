---
title: SelectObject
description: Display the cursor and allow the player to select an object.
tags: []
---

## คำอธิบาย

Display the cursor and allow the player to select an object. OnPlayerSelectObject is called when the player selects an object.

| Name     | Description                                                   |
| -------- | ------------------------------------------------------------- |
| playerid | The ID of the player that should be able to select the object |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/select", true))
    {
        SelectObject(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Please select the object you'd like to edit!");
        return 1;
    }
    return 0;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- CreateObject: Create an object.
- DestroyObject: Destroy an object.
- MoveObject: Move an object.
- EditObject: Edit an object.
- EditPlayerObject: Edit an object.
- EditAttachedObject: Edit an attached object.
- CancelEdit: Cancel the edition of an object.
- OnPlayerSelectObject: Called when a player selected an object.
