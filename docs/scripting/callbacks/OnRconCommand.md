---
title: OnRconCommand
description: This callback is called when a command is sent through the server console, RCON, or via the in-game "/rcon command".
tags: ["rcon", "administration"]
---

## Description

This callback is called when a command is sent through the server console, RCON (Remote Console), or via the in-game "/rcon command".

| Name  | Description                                                                       |
| ----- | --------------------------------------------------------------------------------- |
| cmd[] | A string containing the command that was typed, along with any passed parameters. |

## Returns

It is always called first in filterscripts so returning 1 on it blocks the main script from processing it.

## Examples

```c
public OnRconCommand(cmd[])
{
    printf("[RCON]: You typed '/rcon %s'!", cmd);
    return 0;
}

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

## Notes

:::warning

The /rcon prefix is not included in the cmd parameter when a player types a command. If you use the print function here, it will send a message to both the player who typed the command in-game and the server log.

This callback is not called if the player is not logged in as an RCON admin. When a player uses /rcon login to log in, this callback will not be called, instead, OnRconLoginAttempt is called. Once logged in as an RCON admin, any subsequent commands will trigger this callback.

:::

:::tip

In SA-MP, you need to include this callback in a loaded filterscript for it to work.

However, this issue was fixed in open.mp.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnRconLoginAttempt](OnRconLoginAttempt): This callback is called when an attempt to login to RCON is made.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [IsPlayerAdmin](../functions/IsPlayerAdmin): Checks if a player is logged into RCON.
- [SetPlayerAdmin](../functions/SetPlayerAdmin): Sets the player as an RCON admin.
