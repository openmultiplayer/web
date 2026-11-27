---
title: "IsBanned | open.mp"
description: "Checks if the given IP address is banned."
canonical: https://open.mp/docs/scripting/functions/IsBanned
language: en
---

# IsBanned

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Checks if the given IP address is banned.

| Name | Description |
| --- | --- |
| const ipAddress\[\] | The IP address to check. |

## Returns

Returns **true** if the IP address is banned, otherwise **false**.

## Examples

```c
if (IsBanned("255.255.255.255"))
{
    // Do something
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
-   [ClearBanList](https://open.mp/docs/scripting/functions/ClearBanList): Clears the ban list.
