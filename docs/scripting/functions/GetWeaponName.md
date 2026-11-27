---
title: "GetWeaponName | open.mp"
description: "Get the name of a weapon."
canonical: https://open.mp/docs/scripting/functions/GetWeaponName
language: en
---

# GetWeaponName

## Description

Get the name of a weapon.

| Name | Description |
| --- | --- |
| WEAPON:weaponid | The [ID of the weapon](https://open.mp/docs/scripting/resources/weaponids) to get the name of. |
| weapon\[\] | An array to store the weapon's name in, passed by reference. |
| len = sizeof (weapon) | The maximum length of the weapon name to store. Should be sizeof(name). |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. The weapon specified does not exist.

The weapon's name is stored in the specified array.

## Examples

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // Variable declarations, with killerName having the default value of "World".
    new
        weaponName[32],
        string[64],
        playerName[MAX_PLAYER_NAME],
        killerName[MAX_PLAYER_NAME] = "World";

    // Get the weapon/ reason and player name
    GetWeaponName(reason, weaponName, sizeof(weaponName));
    GetPlayerName(playerid, playerName, sizeof(playerName));

    // Check if the player was killed by another player or was it because of environment
    if (killerid != INVALID_PLAYER_ID)
    {
        // We empty the killerName string by setting the first index to EOS (End of String)
        killerName[0] = EOS;
        // Get the killer's name
        GetPlayerName(killerid, killerName, sizeof(killerName));
    }

    // Send a message to the public chat that the X has caused death of Y with Z as the reason
    format(string, sizeof(string), "%s (%i) has wasted %s (%i) using a %s.", killerName, killerid, playerName, playerid, weaponName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## Related Functions

-   [GetPlayerWeapon](https://open.mp/docs/scripting/functions/GetPlayerWeapon): Check what weapon a player is currently holding.
-   [AllowInteriorWeapons](https://open.mp/docs/scripting/functions/AllowInteriorWeapons): Determine if weapons can be used in interiors.
-   [GivePlayerWeapon](https://open.mp/docs/scripting/functions/GivePlayerWeapon): Give a player a weapon.
