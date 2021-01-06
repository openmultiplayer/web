---
title: SendClientCheck
description: Perform a memory check on the client.
tags: []
---

## Description

Perform a memory check on the client.

| Name            | Description                          |
| --------------- | ------------------------------------ |
| playerid        | The ID of the player to check.       |
| type            | The type of check to perform.        |
| memAddr         | The base address to check.           |
| memOffset       | The offset from the base address.    |
| byteCount       | The number of bytes to check.        |

## Returns

1: The function was executed successfully.

0: The function failed to execute. The player is not connected.

## Examples

```c
public OnPlayerConnect(playerid)
{
    SendClientCheck(playerid, 0x48, 0, 0, 2);
    return 1;
}

public OnClientCheckResponse(playerid, actionid, memaddr, retndata)
{
    if(actionid == 0x48)
    {
        print("The player's client response is 0x48");
    }
    return 1;
}
```

## Notes

:::warning

This callback is only called when it is in a filterscript.

:::

## Related Functions
