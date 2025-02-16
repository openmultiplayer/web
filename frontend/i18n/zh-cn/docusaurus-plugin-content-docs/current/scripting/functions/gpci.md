---
title: gpci
sidebar_label: gpci
description: Fetch the CI (computer/client identification) of a user, this is linked to their SAMP/GTA on their computer.
tags: []
---

<LowercaseNote />

## Description

Fetch the CI of a user, this is linked to their SAMP/GTA on their computer.

:::warning

A player's CI is NOT UNIQUE, some players may have similar or the same CI, don't ban solely due to a CI match.

:::

## Parameters

| Name                  | Description                             |
| --------------------- | --------------------------------------- |
| playerid              | The ID of the player to fetch their CI. |
| serial[]              | String to store the fetched CI in.      |
| len = sizeof (serial) | Assigned size of the string.            |

## Return Values

This function will return the string value of a user's CI.

## Example Usage

**SA-MP server:**

```c
#include <a_samp>

#if !defined gpci
    native gpci(playerid, serial[], len);
#endif

public OnPlayerConnect(playerid)
{
    new serial[41]; // 40 + \0
    gpci(playerid, serial, sizeof(serial));

    new string[128];
    format(string, sizeof(string), "Your CI Serial: %s", serial);
    SendClientMessage(playerid, -1, string);
    return 1;
}
```

**open.mp server:**

```c
#include <open.mp>

public OnPlayerConnect(playerid)
{
    new serial[41]; // 40 + \0
    GPCI(playerid, serial, sizeof(serial));
    SendClientMessage(playerid, -1, "Your CI Serial: %s", serial);
    return 1;
}
```

## Notes

:::warning

In SA-MP server you must add 'native gpci(playerid, serial[], len);' at the top of your script before using any CI functions.

:::

## Related Functions

- [GetNetworkStats](GetNetworkStats): Gets the servers networkstats and saves it into a string.
- [GetPlayerNetworkStats](GetPlayerNetworkStats): Gets a player networkstats and saves it into a string.
