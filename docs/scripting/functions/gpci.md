---
id: gpci
title: gpci
description: Fetch the GPCI of a user, this is linked to their SAMP/GTA on their computer.
tags: []
---

:::note

This function name starts with a lowercase letter.

:::

## Description

Fetch the GPCI of a user, this is linked to their SAMP/GTA on their computer.

:::warning

A player's GPCI is NOT UNIQUE, some players may have similar or the same GPCI, don't ban solely due to a GPCI match.

:::

## Parameters

| Name     | Description                                      |
| -------- | ------------------------------------------------ |
| playerid | The ID of the player to fetch their GPCI.        |
| string[] | String to store the fetched GPCI in.             |
| length   | Assigned size of the string, should use sizeof() |

## Return Values

This function will return the string value of a user's GPCI.

:::warning

You must add 'native gpci(playerid, serial[], len);' at the top of your script before using any GPCI functions

:::

## Example Usage

```c
#if !defined gpci
    native gpci(playerid, serial[], len);
#endif

new szSerial[41]; // 40 + \0

gpci(iPlayerID, szSerial, sizeof(szSerial));
return szSerial;
```

:::tip

This function may come in handy to easily get someone's GPCI.

:::

```c
ReturnGPCI(iPlayerID)
{
    new
        szSerial[41]; // 40 + \0

    gpci(iPlayerID, szSerial, sizeof(szSerial));
    return szSerial;
}
```

## Related Functions

- [GetNetworkStats]GetNetworkStats): Gets the servers networkstats and saves it into a string.
- [GetPlayerNetworkStats](GetPlayerNetworkStats): Gets a player networkstats and saves it into a string.
