---
title: GetPlayerArmour
sidebar_label: GetPlayerArmour
description: This function stores the armour of a player into a variable.
tags: ["player"]
---

## Description

This function stores the armour of a player into a variable.

| Name          | Description                                               |
| ------------- | --------------------------------------------------------- |
| playerid      | The ID of the player that you want to get the armour of.  |
| &Float:armour | The float to to store the armour in, passed by reference. |

## Returns

**1** - success

**0** - failure (i.e. player not connected).

The player's armour is stored in the specified variable.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/myarmour", true))
    {
		new string[40];

		new Float:armour;
		GetPlayerArmour(playerid, armour);

		format(string, sizeof(string), "SERVER: Your armour is %.2f percent", armour);
		SendClientMessage(playerid, 0xFFFFFFAA, string);
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

Even though the armour can be set to near infinite values on the server side, the individual clients will only report values up to 255. Anything higher will wrap around; 256 becomes 0, 257 becomes 1, etc. Armour is obtained rounded to integers: set 50.15, but get 50.0

:::

## Related Functions

- [SetPlayerArmour](SetPlayerArmour): Set the armour of a player.
- [GetPlayerHealth](GetPlayerHealth): Find out how much health a player has.
- [GetVehicleHealth](GetVehicleHealth): Check the health of a vehicle.
