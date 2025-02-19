---
title: SendRconCommand
sidebar_label: SendRconCommand
description: Sends an RCON (Remote Console) command.
tags: ["administration"]
---

## คำอธิบาย

Sends an RCON (Remote Console) command.

| Name      | Description                      |
| --------- | -------------------------------- |
| command[] | The RCON command to be executed. |

## ส่งคืน

This function always returns 1.

## บันทึก

:::warning

- Does not support login, due to the lack of a 'playerid' parameter.
- 'password 0' will remove the server's password if one is set.
- This function will result in OnRconCommand being called.

:::

## ตัวอย่าง

```c
SendRconCommand("gmx");
// This is a scripted version of typing "/rcon gmx" in-game.
// GMX restarts the game mode.

// Example using format()
new szMapName[] = "Los Santos";
new szCmd[64];
format(szCmd, sizeof(szCmd), "mapname %s", szMapName);
SendRconCommand(szCmd);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- IsPlayerAdmin: Checks if a player is logged into RCON.

## Related Callbacks

- OnRconCommand: Called when an RCON command is sent.
- OnRconLoginAttempt: Called when an attempt to login to RCON is made.
