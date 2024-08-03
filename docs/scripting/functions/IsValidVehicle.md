---
title: IsValidVehicle
description: Check if a vehicle is created.
tags: ["vehicle"]
---

:::note

This function is not present in the old libraries packaged with the SA-MP server however the [latest versions of the maintained libraries](https://github.com/pawn-lang/samp-stdlib) contain this and other formerly missing declarations.

:::

## Description

Check if a vehicle is created.

## Parameters

| Name      | Description                        |
| --------- | ---------------------------------- |
| vehicleid | The vehicle to check for existance |

## Return Values

**true** if the vehicle exists, otherwise **false**.

## Example Usage

```c
#if !defined IsValidVehicle
    native IsValidVehicle(vehicleid);
#endif

// Count vehicles
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/countvehicles", true))
    {
        new
            count,
            string[128];

        for (new i = 0; i < MAX_VEHICLES; i++)
        {
            if (IsValidVehicle(i))
            {
                count++;
            }
        }

        format(string, sizeof(string), "* There are %d valid spawned vehicles on this server.", count);
        SendClientMessage(playerid, 0x33CCCCFF, string);
        return 1;
    }
    return 0;
}
```

## Related Functions

- [GetPlayerVehicleID](GetPlayerVehicleID): Get the ID of the vehicle the player is in.
- [GetVehicleModel](GetVehicleModel): Get the model id of a vehicle.
