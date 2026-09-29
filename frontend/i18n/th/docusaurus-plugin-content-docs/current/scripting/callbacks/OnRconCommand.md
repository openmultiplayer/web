---
title: OnRconCommand
sidebar_label: OnRconCommand
description: This callback is called when a command is sent through the server console, remote RCON, or via the in-game "/rcon command".
tags: []
---

## คำอธิบาย

This callback is called when a command is sent through the server console, remote RCON, or via the in-game "/rcon command".

| Name  | Description                                                                       |
| ----- | --------------------------------------------------------------------------------- |
| cmd[] | A string containing the command that was typed, as well as any passed parameters. |

## ส่งคืน

It is always called first in filterscripts so returning 1 there blocks gamemode from seeing it.

## ตัวอย่าง

```c
public OnRconCommand(cmd[])
{
    printf("[RCON]: You typed '/rcon %s'!", cmd);
    return 0;
}
```

```c
public OnRconCommand(cmd[])
{
    if (!strcmp(cmd, "hello", true))
    {
        SendClientMessageToAll(0xFFFFFFAA, "Hello World!");
        print("You said hello to the world."); // This will appear to the player who typed the rcon command in the chat in white
        return 1;
    }
    return 0;
}
```

## บันทึก

:::note

- The /rcon prefix is not included in the cmd parameter when a player types a command. If you use the print function here, it will send a message to both the player who typed the command in-game and the server log.
- This callback is not called if the player is not logged in as an RCON admin. When a player uses /rcon login to log in, this callback will not be called, instead, OnRconLoginAttempt is called. Once logged in as an RCON admin, any subsequent commands will trigger this callback.

:::

:::warning

In SA-MP, you need to include this callback in a loaded filterscript for it to work. However, this issue was fixed in open.mp.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [IsPlayerAdmin](../functions/IsPlayerAdmin): Checks if a player is logged into RCON.
- [OnRconLoginAttempt](OnRconLoginAttempt): Called when an attempt to login to RCON is made.
