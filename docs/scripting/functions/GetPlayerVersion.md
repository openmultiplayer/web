---
title: "GetPlayerVersion | open.mp"
description: "Returns the SA-MP client version, as reported by the player."
canonical: https://open.mp/docs/scripting/functions/GetPlayerVersion
language: en
---

# GetPlayerVersion

## Description

Returns the SA-MP client version, as reported by the player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to get the client version of. |
| version\[\] | The string to store the player's version in, passed by reference. |
| len = sizeof (version) | The maximum length of the version. |

## Returns

The length of the player's client version.

**0** if player specified doesn't exist.

The client version is stored in the specified array.

## Examples

```c
public OnPlayerConnect(playerid)
{
    new version[24];
    GetPlayerVersion(playerid, version, sizeof(version));

    new string[64];
    format(string, sizeof(string), "Your version of SA-MP: %s", version);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    // Possible text: "Your version of SA-MP: 0.3.7"
    return 1;
}
```

## Notes

note

A client's version can be up to 24 characters long, otherwise the connection will be rejected due to "Invalid client connection". However, normal players can only join with a version length between 5 (0.3.7) and 9 (0.3.DL-R1) characters.

warning

The string the version gets stored in will be empty if playerid is an NPC.

## Related Functions

-   [GetPlayerName](https://open.mp/docs/scripting/functions/GetPlayerName): Get a player's name.
-   [GetPlayerPing](https://open.mp/docs/scripting/functions/GetPlayerPing): Get the ping of a player.
-   [GetPlayerIp](https://open.mp/docs/scripting/functions/GetPlayerIp): Get a player's IP.
