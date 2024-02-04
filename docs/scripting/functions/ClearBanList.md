---
title: ClearBanList
description: Clears the ban list.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Clears the ban list.

## Returns

false: Failed to execute the function.

true: Success.

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

:::tip

You can see the ban list in the bans.json file.

:::

## Related Functions

- [BlockIpAddress](BlockIpAddress): Block an IP address from connecting to the server for a set amount of time.
- [UnBlockIpAddress](UnBlockIpAddress): Unblock an IP that was previously blocked.
- [Ban](Ban): Ban a player from playing on the server.
- [BanEx](BanEx): Ban a player with a custom reason.
- [Kick](Kick): Kick a player from the server.
- [IsBanned](IsBanned): Checks if the given IP address is banned.
