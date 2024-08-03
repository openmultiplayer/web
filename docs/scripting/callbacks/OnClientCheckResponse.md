---
title: OnClientCheckResponse
description: This callback is called when a SendClientCheck request completes
tags: []
---

## Description

This callback is called when a SendClientCheck request completes.

| Name          | Description                       |
| ------------- | --------------------------------- |
| playerid      | The ID of the player checked.     |
| actionid      | The type of check performed.      |
| memaddr       | The address requested.            |
| retndata      | The result of the check.          |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnPlayerConnect(playerid)
{
    SendClientCheck(playerid, 0x48, 0, 0, 2);
    return 1;
}

public OnClientCheckResponse(playerid, actionid, memaddr, retndata)
{
    if(actionid == 0x48) // or 72
    {
        print("The player is connecting using the PC client.");
    }
    return 1;
}
```

## Notes

:::warning

**SA:MP Server**: This callback is only called when it is in a filterscript.

**Open Multiplayer Server**: This callback functions normally inside a gamemode / filterscript. 

:::

## Related Functions

The following function might be useful, as they're related to this callback in one way or another. 

- [SendClientCheck](../functions/SendClientCheck): Perform a memory check on the client.
- [opcodes](../resources/opcodes.md): Action opcodes IDs and their purpose.