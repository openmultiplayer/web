---
title: EditPlayerObject
description: Allows players to edit a player-object (position and rotation) with a GUI and their mouse.
tags: ["player"]
---

## คำอธิบาย

Allows players to edit a player-object (position and rotation) with a GUI and their mouse.

| Name     | Description                                      |
| -------- | ------------------------------------------------ |
| playerid | The ID of the player that should edit the object |
| objectid | The object to be edited by the player            |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. Player or object not valid.

## ตัวอย่าง

```c
new object[MAX_PLAYERS];
public OnPlayerSpawn(playerid)
{
    object[playerid] = CreatePlayerObject(playerid, 1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/edit", true))
    {
        EditPlayerObject(playerid, object[playerid]);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You now edit your object!");
        return 1;
    }
    return 0;
}
```

## บันทึก

:::tip

You can move the camera while editing by pressing and holding the spacebar (or W in vehicle) and moving your mouse.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreateObject](../functions/CreateObject): Create an object.
- [DestroyObject](../functions/DestroyObject): Destroy an object.
- [MoveObject](../functions/MoveObject): Move an object.
- [EditAttachedObject](../functions/EditAttachedObject): Edit an attached object.
- [SelectObject](../functions/SelectObject): Select an object.
- [CancelEdit](../functions/CancelEdit): Cancel the edition of an object.
