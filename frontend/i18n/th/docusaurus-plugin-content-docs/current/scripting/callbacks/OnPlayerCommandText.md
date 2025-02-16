---
title: OnPlayerCommandText
sidebar_label: OnPlayerCommandText
description: This callback is called when a player enters a command into the client chat window.
tags: ["player"]
---

## คำอธิบาย

This callback is called when a player enters a command into the client chat window. Commands are anything that start with a forward slash, e.g. /help.

| Name      | Description                                                 |
| --------- | ----------------------------------------------------------- |
| playerid  | The ID of the player that entered a command.                |
| cmdtext[] | The command that was entered (including the forward slash). |

## ส่งคืน

It is always called first in filterscripts so returning 1 there blocks other scripts from seeing it.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/help", true))
    {
        SendClientMessage(playerid, -1, "SERVER: This is the /help command!");
        return 1;
        // Returning 1 informs the server that the command has been processed.
        // OnPlayerCommandText won't be called in other scripts.
    }
    return 0;
    // Returning 0 informs the server that the command hasn't been processed by this script.
    // OnPlayerCommandText will be called in other scripts until one returns 1.
    // If no scripts return 1, the 'SERVER: Unknown Command' message will be shown to the player.
}
```

## บันทึก

:::tip

NPC สามารถเรียก Callback นี้ได้

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SendRconCommand](../../scripting/functions/SendRconCommand.md): Sends an RCON command via the script.
