---
title: "IsValidNickName | open.mp"
description: "Checks if a nick name is valid."
canonical: https://open.mp/docs/scripting/functions/IsValidNickName
language: en
---

# IsValidNickName

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Checks if a nick name is valid.

| Name | Description |
| --- | --- |
| const name\[\] | The nick name to check. |

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

note

By default the valid characters in the nick name is (0-9, a-z, A-Z, \[\], (), $ @ . \_ and = only).

## Related Functions

-   [AllowNickNameCharacter](https://open.mp/docs/scripting/functions/AllowNickNameCharacter): Allows a character to be used in the nick name.
-   [SetPlayerName](https://open.mp/docs/scripting/functions/SetPlayerName): Sets the name of a player.
-   [GetPlayerName](https://open.mp/docs/scripting/functions/GetPlayerName): Gets the name of a player.
