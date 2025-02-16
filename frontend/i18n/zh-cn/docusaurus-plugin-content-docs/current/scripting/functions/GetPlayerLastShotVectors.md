---
title: GetPlayerLastShotVectors
sidebar_label: GetPlayerLastShotVectors
description: Retrieves the start and end (hit) position of the last bullet a player fired.
tags: ["player"]
---

## Description

Retrieves the start and end (hit) position of the last bullet a player fired.

| Name           | Description                                                                             |
| -------------- | --------------------------------------------------------------------------------------- |
| playerid       | The ID of the player to get the last bullet shot information of.                        |
| &Float:originX | A float variable in which to save the X coordinate of where the bullet originated from. |
| &Float:originY | A float variable in which to save the Y coordinate of where the bullet originated from. |
| &Float:originZ | A float variable in which to save the Z coordinate of where the bullet originated from. |
| &Float:hitPosX | A float variable in which to save the X coordinate of where the bullet hit.             |
| &Float:hitPosY | A float variable in which to save the Y coordinate of where the bullet hit.             |
| &Float:hitPosZ | A float variable in which to save the Z coordinate of where the bullet hit.             |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The player specified does not exist.

The position of the last bullet is stored in the specified variables.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/lastshot", true) == 0)
    {
        new string[128],
            Float:originX, Float:originY, Float:originZ,
            Float:hitPosX, Float:hitPosY, Float:hitPosZ;

        GetPlayerLastShotVectors(playerid, originX, originY, originZ, hitPosX, hitPosY, hitPosZ);
        
        format(string, sizeof(string), "Last Shot Information: Origin: %f, %f, %f. Hit position: %f, %f, %f", originX, originY, originZ, hitPosX, hitPosY, hitPosZ);
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

- This function will only work when lag compensation is enabled.
- If the player hit nothing, the hit positions will be 0. This means you can't currently calculate how far a bullet travels through open air.

:::

## Related Functions

- [GetPlayerWeaponData](GetPlayerWeaponData): Find out information about weapons a player has.
- [GetPlayerWeapon](GetPlayerWeapon): Check what weapon a player is currently holding.
- [VectorSize](VectorSize): Get the length (norm) of a vector.

## Related Callbacks

- [OnPlayerWeaponShot](../callbacks/OnPlayerWeaponShot): Called when a player fires a weapon.
