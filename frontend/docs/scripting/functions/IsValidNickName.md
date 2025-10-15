---
title: IsValidNickName
sidebar_label: IsValidNickName
description: Checks if a nick name is valid.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Checks if a nick name is valid.

| Name         | Description             |
| ------------ | ----------------------- |
| const name[] | The nick name to check. |

## Returns

Returns true if the nick name is valid, otherwise false.

## Examples

```c
if (IsValidNickName("Barnaby_Keene"))
{
    // Do something
}
else
{
    SendClientMessage(playerid, 0xFF0000FF, "Your nick name is not valid.");
}
```

## Notes

:::tip

By default the valid characters in the nick name is (0-9, a-z, A-Z, [], (), \$ @ . \_ and = only).

:::

## Related Functions

- [AllowNickNameCharacter](AllowNickNameCharacter): Allows a character to be used in the nick name.
- [SetPlayerName](SetPlayerName): Sets the name of a player.
- [GetPlayerName](GetPlayerName): Gets the name of a player.
