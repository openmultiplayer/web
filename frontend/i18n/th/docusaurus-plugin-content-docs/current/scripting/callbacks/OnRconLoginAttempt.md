---
title: OnRconLoginAttempt
sidebar_label: OnRconLoginAttempt
description: This callback is called when someone attempts to log in to RCON in-game; successful or not.
tags: []
---

## คำอธิบาย

This callback is called when someone attempts to log in to RCON in-game; successful or not.

| Name       | Description                                             |
| ---------- | ------------------------------------------------------- |
| ip[]       | The IP of the player that tried to log in to RCON.      |
| password[] | The password used to login with.                        |
| success    | 0 if the password was incorrect or 1 if it was correct. |

## ส่งคืน

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnRconLoginAttempt(ip[], password[], success)
{
    if (!success) //If the password was incorrect
    {
        printf("FAILED RCON LOGIN BY IP %s USING PASSWORD %s",ip, password);
        new pip[16];
        for(new i = GetPlayerPoolSize(); i != -1; --i) //Loop through all players
        {
            GetPlayerIp(i, pip, sizeof(pip));
            if (!strcmp(ip, pip, true)) //If a player's IP is the IP that failed the login
            {
                SendClientMessage(i, 0xFFFFFFFF, "Wrong Password. Bye!"); //Send a message
                Kick(i); //They are now kicked.
            }
        }
    }
    return 1;
}
```

## บันทึก

:::tip

This callback is only called when /rcon login is used in-game. This callback is only called when the player is not yet logged in. When the player is logged in, OnRconCommand is called instead.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [IsPlayerAdmin](../../scripting/functions/IsPlayerAdmin.md): Checks if a player is logged into RCON.
- [SendRconCommand](../../scripting/functions/SendRconCommand.md): Sends an RCON command via the script.
