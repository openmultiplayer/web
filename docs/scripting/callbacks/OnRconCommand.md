---
title: OnRconCommand
description: This callback is called when a command is sent through the server console, remote RCON, or via the in-game "/rcon command".
tags: ["rcon", "administration"]
---

## Description

This callback is called when a command is sent through the server console, remote RCON, or via the in-game "/rcon command".

| Name  | Description                                                                       |
| ----- | --------------------------------------------------------------------------------- |
| cmd[] | A string containing the command that was typed, as well as any passed parameters. |

## Returns

It is always called first in filterscripts so returning 1 there blocks gamemode from seeing it.

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

:::tip

"/rcon " is not included in "cmd" when a player types a command. If you use the "print" function here, it will send a message to the player who typed the command in-game as well as the log. This callback is not called when the player is not logged in as RCON admin. When the player is not logged in as RCON admin and uses /rcon login, this callback will not be called and OnRconLoginAttempt is called instead. However, when the player is logged in as RCON admin, the use of this command will call this callback.

:::

:::warning

You will need to include this callback in a loaded filterscript for it to work in the gamemode!

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnRconLoginAttempt](OnRconLoginAttempt): This callback is called when an attempt to login to RCON is made.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [IsPlayerAdmin](../functions/IsPlayerAdmin): Checks if a player is logged into RCON.
- [SetPlayerAdmin](../functions/SetPlayerAdmin): Sets the player as an RCON admin.
