---
title: CancelEdit
description: Cancel object edition mode for a player.
tags: []
---

## คำอธิบาย

Cancel object edition mode for a player

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | The ID of the player to cancel edition for |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopedit", true))
    {
        CancelEdit(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You stopped editing the object!");
        return 1;
    }
    return 0;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SelectObject](../../scripting/functions/SelectObject.md): Select an object.
- [EditObject](../../scripting/functions/EditObject.md): Edit an object.
- [EditPlayerObject](../../scripting/functions/EditPlayerObject.md): Edit an object.
- [EditAttachedObject](../../scripting/functions/EditAttachedObject.md): Edit an attached object.
- [CreateObject](../../scripting/functions/CreateObject.md): Create an object.
- [DestroyObject](../../scripting/functions/DestroyObject.md): Destroy an object.
- [MoveObject](../../scripting/functions/MoveObject.md): Move an object.
