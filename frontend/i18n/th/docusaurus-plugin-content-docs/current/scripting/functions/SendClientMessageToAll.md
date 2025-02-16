---
title: SendClientMessageToAll
sidebar_label: SendClientMessageToAll
description: Displays a message in chat to all players.
tags: []
---

## คำอธิบาย

Displays a message in chat to all players. This is a multi-player equivalent of SendClientMessage.

| Name            | Description                                       |
| --------------- | ------------------------------------------------- |
| color           | The color of the message (0xRRGGBBAA Hex format). |
| const message[] | The message to show (max 144 characters).         |

## ส่งคืน

This function always returns true (1).

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/helloworld", true) == 0)
    {
        // Send a message to everyone.
        SendClientMessageToAll(-1, "Hello!");
        return 1;
    }
    return 0;
}
```

## บันทึก

:::warning

Avoid using format specifiers in your messages without formatting the string that is sent. It will result in crashes otherwise.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SendClientMessage: Send a message to a certain player.
- SendPlayerMessageToAll: Force a player to send text for all players.
