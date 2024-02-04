---
title: IsBanned
description: Checks if the given IP address is banned.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Checks if the given IP address is banned.

| Name              | Description              |
| ----------------- | ------------------------ |
| const ipaddress[] | The IP address to check. |

## Returns

Returns true if the IP address is banned, otherwise false.

## Examples

```c
if (IsBanned("255.255.255.255"))
{
    // Do something
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
- [ClearBanList](ClearBanList): Clears the ban list.
