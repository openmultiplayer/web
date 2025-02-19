---
title: OnPlayerText
sidebar_label: OnPlayerText
description: Called when a player sends a chat message.
tags: ["player"]
---

## คำอธิบาย

Called when a player sends a chat message.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The ID of the player who typed the text. |
| text[]   | The text the player typed.               |

## ส่งคืน

It is always called first in filterscripts so returning 0 there blocks other scripts from seeing it.

## ตัวอย่าง

```c
public OnPlayerText(playerid, text[])
{
    new pText[144];
    format(pText, sizeof (pText), "(%d) %s", playerid, text);
    SendPlayerMessageToAll(playerid, pText);
    return 0; // ignore the default text and send the custom one
}
```

## บันทึก

:::tip

NPC สามารถเรียก Callback นี้ได้

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SendPlayerMessageToPlayer](../../scripting/functions/SendPlayerMessageToPlayer.md): Force a player to send text for one player.
- [SendPlayerMessageToAll](../../scripting/functions/SendPlayerMessageToAll.md): Force a player to send text for all players.
