---
title: OnRconLoginAttempt
description: This callback is called when someone attempts to log in to RCON in-game; successful or not.
tags: ["rcon", "administration"]
---

## Description

This callback is called when someone attempts to log in to RCON in-game; successful or not.

| Name       | Description                                             |
| ---------- | ------------------------------------------------------- |
| ip[]       | The IP of the player that tried to log in to RCON.      |
| password[] | The password used to login with.                        |
| success    | 0 if the password was incorrect or 1 if it was correct. |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnRconLoginAttempt(ip[], password[], success)
{
    if (!success) // If the password was incorrect
    {
        printf("FAILED RCON LOGIN BY IP %s USING PASSWORD %s", ip, password);
        
        new ipAddress[16];
        
        for (new i = 0; i < MAX_PLAYERS; i++) // Loop through all players
        {
            if (!IsPlayerConnected(i))
            {
                continue;
            }

            GetPlayerIp(i, ipAddress, sizeof(ipAddress));
            
            if (!strcmp(ip, ipAddress, true)) // If a player's IP is the IP that failed the login
            {
                SendClientMessage(i, 0xFFFFFFFF, "Wrong Password. Bye!"); // Send a message
                Kick(i); // They are now kicked.
                break;
            }
        }
    }
    return 1;
}
```

## Notes

:::tip

This callback is only called when /rcon login is used in-game. This callback is only called when the player is not yet logged in. When the player is logged in, [OnRconCommand](OnRconCommand) is called instead.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnRconCommand](OnRconCommand): This callback is called when an RCON command is sent. 

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [IsPlayerAdmin](../functions/IsPlayerAdmin): Checks if a player is logged into RCON.
- [SetPlayerAdmin](../functions/SetPlayerAdmin): Sets the player as an RCON admin.
- [SendRconCommand](../functions/SendRconCommand): Sends an RCON command via the script.
