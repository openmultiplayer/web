---
title: GetVehicleDistanceFromPoint
description: This function can be used to calculate the distance (as a float) between a vehicle and another map coordinate.
tags: ["vehicle"]
---

## Description

This function can be used to calculate the distance (as a float) between a vehicle and another map coordinate. This can be useful to detect how far a vehicle away is from a location.

| Name      | Description                                          |
| --------- | ---------------------------------------------------- |
| vehicleid | The ID of the vehicle to calculate the distance for. |
| Float:x   | The X map coordinate.                                |
| Float:y   | The Y map coordinate.                                |
| Float:z   | The Z map coordinate.                                |

## Returns

A float containing the distance from the point specified in the coordinates.

## Examples

```c
/* when the player types 'vendingmachine' in to the chat box, they'll see this.*/
public OnPlayerText(playerid, text[])
{
    if (strcmp(text, "vendingmachine", true) == 0)
    {
        new
            string[64],
            vehicleid = GetPlayerVehicleID(playerid);
        
        new
            Float:distance = GetVehicleDistanceFromPoint(vehicleid, 237.9, 115.6, 1010.2);

        format(string, sizeof(string), "You're %.2f away from our vending machine.", distance);
        SendClientMessage(playerid, 0xA9C4E4FF, string);
    }
    return 0;
}
```

## Related Functions

- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint): Get the distance between a player and a point.
- [GetVehiclePos](GetVehiclePos): Get the position of a vehicle.
