---
title: AddPlayerClassEx
sidebar_label: AddPlayerClassEx
description: This function is exactly the same as the AddPlayerClass function, with the addition of a team parameter.
tags: ["player", "class"]
---

## Description

This function is exactly the same as the AddPlayerClass function, with the addition of a team parameter.

| Name           | Description                                                      |
| -------------- | ---------------------------------------------------------------- |
| team           | The team you want the player to spawn in.                        |
| skin           | The [skin](../resources/skins) which the player will spawn with. |
| Float:spawnX   | The X coordinate of the spawnpoint of this class.                |
| Float:spawnY   | The Y coordinate of the spawnpoint of this class.                |
| Float:spawnZ   | The Z coordinate of the spawnpoint of this class.                |
| Float:angle    | The direction in which the player should face after spawning.    |
| WEAPON:weapon1 | The first spawn-weapon for the player.                           |
| ammo1          | The amount of ammunition for the primary spawn weapon.           |
| WEAPON:weapon2 | The second spawn-weapon for the player.                          |
| ammo2          | The amount of ammunition for the second spawn weapon.            |
| WEAPON:weapon3 | The third spawn-weapon for the player.                           |
| ammo3          | The amount of ammunition for the third spawn weapon.             |

## Returns

The ID of the class which was just added.

319 if the class limit (320) was reached. The highest possible class ID is 319.

## Examples

```c
public OnGameModeInit()
{
    // Players can spawn as either:
    // CJ Skin (ID 0) in team 1.
    // The Truth skin (ID 1) in team 2.
    AddPlayerClassEx(1, 0, 1958.33, 1343.12, 15.36, 269.15, WEAPON_SAWEDOFF, 36, WEAPON_UZI, 150, WEAPON_FIST, 0); // CJ
    AddPlayerClassEx(2, 1, 1958.33, 1343.12, 15.36, 269.15, WEAPON_SAWEDOFF, 36, WEAPON_UZI, 150, WEAPON_FIST, 0); // The Truth
    return 1;
}
```

## Notes

:::tip

The maximum class ID is 319 (starting from 0, so a total of 320 classes). When this limit is reached, any more classes that are added will replace ID 319.

:::

## Related Functions

- [AddPlayerClass](AddPlayerClass): Add a class.
- [GetAvailableClasses](GetAvailableClasses): Get the number of classes defined.
- [EditPlayerClass](EditPlayerClass): Edit a class data.
- [SetSpawnInfo](SetSpawnInfo): Set the spawn setting for a player.
- [SetPlayerTeam](SetPlayerTeam): Set a player's team.
- [SetPlayerSkin](SetPlayerSkin): Set a player's skin.

## Related Resources

- [Skin IDs](../resources/skins)
- [Weapon IDs](../resources/weaponids)
