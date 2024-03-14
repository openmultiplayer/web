---
title: GetPlayerName
description: Get a player's name.
tags: ["player"]
---

## Description

Get a player's name.

| Name     | Description                                                                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid | The ID of the player to get the name of.                                                                                                        |
| name[]   | An array into which to store the name, passed by reference.                                                                                     |
| len      | The length of the string that should be stored. Recommended to be MAX_PLAYER_NAME + 1. The + 1 is necessary to account for the null terminator. |

## Return Values

Returns the length of the player's name.

**0** if player specified doesn't exist.

## Examples

```c
public OnPlayerConnect(playerid)
{
    // Get the name of the player that connected and display a join message to other players

    new name[MAX_PLAYER_NAME + 1];
    GetPlayerName(playerid, name, sizeof(name));

    new string[128];
    format(string, sizeof(string), "%s has joined the server.", name);
    SendClientMessageToAll(0xC4C4C4FF, string);

    return 1;
}
```

## Notes

:::tip

A player's name can be up to 24 characters long by using [SetPlayerName](SetPlayerName).

This is defined as `MAX_PLAYER_NAME`.

However, the client can only join with a nickname between 3 and 20 characters, otherwise the connection will be rejected and the player has to quit to choose a valid name.

:::

## Related Functions

- [SetPlayerName](SetPlayerName): Set a player's name.
- [IsValidNickName](IsValidNickName): Checks if a nick name is valid.
- [GetPlayerIp](GetPlayerIp): Get a player's IP.
- [GetPlayerPing](GetPlayerPing): Get the ping of a player.
- [GetPlayerScore](GetPlayerScore): Get the score of a player.
- [GetPlayerVersion](GetPlayerVersion): Get a player's client-version.
