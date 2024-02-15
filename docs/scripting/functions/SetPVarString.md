---
title: SetPVarString
description: Saves a string into a player variable.
tags: ["pvar"]
---

## Description

Saves a string into a player variable.

| Name             | Description                                             |
|------------------|---------------------------------------------------------|
| playerid         | The ID of the player whose player variable will be set. |
| varname[]        | The name of the player variable.                        |
| string_value[]   | The string you want to save in the player variable.     |
| OPEN_MP_TAGS:... | Indefinite number of arguments of any tag.              |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerConnect(playerid)
{
    new 
        hours, 
        minutes, 
        seconds, 
        string[46];

    gettime(hours, minutes, seconds); // get the time
    format(string, sizeof(string), "Connected on %02d:%02d:%02d", hours, minutes, seconds); // create the string with the connect time
    SetPVarString(playerid, "timeconnected", string); // save the string into a player variable

    // PRO TIP: You don't need `format` in open.mp
    SetPVarString(playerid, "timeconnected", "Connected on %02d:%02d:%02d", hours, minutes, seconds);
    return 1;
}
```

## Notes

:::tip

Variables aren't reset until after OnPlayerDisconnect is called, so the values are still accessible in OnPlayerDisconnect.

:::

## Related Functions

- [SetPVarInt](SetPVarInt): Set an integer for a player variable.
- [GetPVarInt](GetPVarInt): Get the previously set integer from a player variable.
- [GetPVarString](GetPVarString): Get the previously set string from a player variable.
- [SetPVarFloat](SetPVarFloat): Set a float for a player variable.
- [GetPVarFloat](GetPVarFloat): Get the previously set float from a player variable.
- [DeletePVar](DeletePVar): Delete a player variable.
