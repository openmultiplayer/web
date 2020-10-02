---
id: IsValidVehicle
title: IsValidVehicle
description: Check if a vehicle is created.
tags: []
---

:::note

This function exists within the SA-MP server, but it has not been defined within the include files. To use this function, you must first declare the appropriate native at the top of your script:

'native IsValidVehicle(vehicleid);'. It is recommended you place this under the inclusion of a_samp.inc

:::

## Description

Check if a vehicle is created.

## Parameters

|Name       |Description
|-          |-
|vehicleid  |The vehicle to check for existance

## Return Values

**true** if the vehicle exists, otherwise **false**.

## Example Usage

```c
#if !defined IsValidVehicle
    native IsValidVehicle(vehicleid);
#endif

// Count vehicles
public OnPlayerCommandText(playerid,cmdtext[])
{
    if(!strcmp(cmdtext,"/countvehicles",true))
    {
        new
            count,
            msg[60];

        for(new i; i < MAX_VEHICLES; i++)
        {
            if(IsValidVehicle(i)) count++;
        }

        format(msg, sizeof(msg), "* There are %d valid spawned vehicles on this server.", count);
        SendClientMessage(playerid, 0x33CCCCFF, msg);
        return 1;
    }
    return 0;
}
```

## Related Functions

* [GetPlayerVehicleID](../functions/GetPlayerVehicleID): Get the ID of the vehicle the player is in.
* [GetVehicleModel](../functions/GetVehicleModel): Get the model id of a vehicle.
