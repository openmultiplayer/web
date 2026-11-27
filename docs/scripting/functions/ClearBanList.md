---
title: "ClearBanList | open.mp"
description: "Clears the ban list."
canonical: https://open.mp/docs/scripting/functions/ClearBanList
language: en
---

# ClearBanList

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Clears the ban list.

## Returns

**true** - Success.

**false** - Failed to execute the function.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/clearbanlist", true))
    {
        if (!IsPlayerAdmin(playerid))
        {
            return 1;
        }

        ClearBanList();
        SendClientMessage(playerid, -1, "[SERVER]: Ban list cleared.");
        return 1;
    }
    return 0;
}
```

## Notes

tip

You can see the ban list in the **bans.json** file.

## Related Functions

-   [BlockIpAddress](https://open.mp/docs/scripting/functions/BlockIpAddress): Block an IP address from connecting to the server for a set amount of time.
-   [UnBlockIpAddress](https://open.mp/docs/scripting/functions/UnBlockIpAddress): Unblock an IP that was previously blocked.
-   [Ban](https://open.mp/docs/scripting/functions/Ban): Ban a player from playing on the server.
-   [BanEx](https://open.mp/docs/scripting/functions/BanEx): Ban a player with a custom reason.
-   [Kick](https://open.mp/docs/scripting/functions/Kick): Kick a player from the server.
-   [IsBanned](https://open.mp/docs/scripting/functions/IsBanned): Checks if the given IP address is banned.
