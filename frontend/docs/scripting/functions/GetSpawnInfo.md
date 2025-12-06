---
title: GetSpawnInfo
sidebar_label: GetSpawnInfo
description: Return the current spawn data for a player, where they will spawn next.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Return the current spawn data for a player, where they will spawn next.

| Name            | Description                                                                 |
| --------------- | --------------------------------------------------------------------------- |
| playerid        | The ID of the player you want to get spawn information from.                |
| &team           | A variable into which to store the team ID, passed by reference.            |
| &skin           | A variable into which to store the skin ID, passed by reference.            |
| &Float:spawnX   | A Float variable into which to store the X-coordinate, passed by reference. |
| &Float:spawnY   | A Float variable into which to store the Y-coordinate, passed by reference. |
| &Float:spawnZ   | A Float variable into which to store the Z-coordinate, passed by reference. |
| &Float:angle    | A Float variable into which to store the Facing angle, passed by reference. |
| &WEAPON:weapon1 | A variable into which to store the weapon1, passed by reference.            |
| &ammo1          | A variable into which to store the ammo1, passed by reference.              |
| &WEAPON:weapon2 | A variable into which to store the weapon2, passed by reference.            |
| &ammo2          | A variable into which to store the ammo2, passed by reference.              |
| &WEAPON:weapon3 | A variable into which to store the weapon3, passed by reference.            |
| &ammo3          | A variable into which to store the ammo3, passed by reference.              |

## Returns

`true` - The function was executed successfully.

`false` - The function failed to execute. The specified player is not connected.

## Examples

```c
public OnPlayerRequestClass(playerid, classid)
{
    SetSpawnInfo(playerid, NO_TEAM, 293, 1139.4786, -1761.3989, 13.5844, 0.0000, WEAPON_SAWEDOFF, 36, WEAPON_UZI, 150, WEAPON_FIST, 0);

    new
        team,
        skin,
        Float:spawnX,
        Float:spawnY,
        Float:spawnZ,
        Float:angle,
        WEAPON:weapon1,
        ammo1,
        WEAPON:weapon2,
        ammo2,
        WEAPON:weapon3,
        ammo3;

    GetSpawnInfo(playerid, team, skin, spawnX, spawnY, spawnZ, angle, weapon1, ammo1, weapon2, ammo2, weapon3, ammo3);
    // team = NO_TEAM
    // skin = 293
    // spawnX = 1139.4786
    // spawnY = -1761.3989
    // spawnZ = 13.5844
    // angle = 0.0000
    // weapon1 = WEAPON_SAWEDOFF
    // ammo1 = 36
    // weapon2 = WEAPON_UZI
    // ammo2 = 150
    // weapon3 = WEAPON_FIST
    // ammo3 = 0
}
```

## Related Functions

- [SetSpawnInfo](SetSpawnInfo): This function can be used to change the spawn information of a specific player.
