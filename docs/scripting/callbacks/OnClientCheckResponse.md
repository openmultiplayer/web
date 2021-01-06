---
title: OnClientCheckResponse
description: This callback is called when a SendClientCheck request comletes
tags: []
---

## Description

This callback is called when a SendClientCheck request comletes.

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

## Related Functions

- [SendClientCheck](../functions/SendClientCheck): Perform a memory check on the client.