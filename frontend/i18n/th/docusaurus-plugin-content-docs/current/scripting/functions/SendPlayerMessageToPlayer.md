---
title: SendPlayerMessageToPlayer
description: Sends a message in the name of a player to another player on the server.
tags: ["player"]
---

## คำอธิบาย

Sends a message in the name of a player to another player on the server. The message will appear in the chat box but can only be seen by the user specified with 'playerid'. The line will start with the sender's name in their color, followed by the message in white.

| Name            | Description                                                |
| --------------- | ---------------------------------------------------------- |
| playerid        | The ID of the player who will receive the message.         |
| senderid        | The sender's ID. If invalid, the message will not be sent. |
| const message[] | The message that will be sent.                             |

## ส่งคืน

1: The function was executed successfully.

0: The function failed to execute. This means the player specified does not exist.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/hello", true))
    {
        SendPlayerMessageToPlayer(0, playerid, "Hello ID 0!"); //Will send a message to the user with the ID 0 in the name of the user who typed '/hello'.
        // Assuming 'playerid' is called Tenpenny, the output will be 'Tenpenny: Hello ID 0!'
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

- SendPlayerMessageToAll: Force a player to send text for all players.
- SendClientMessage: Send a message to a certain player.
- SendClientMessageToAll: Send a message to all players.
- OnPlayerText: Called when a player sends a message via the chat.
