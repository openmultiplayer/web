---
title: SetSpawnInfo
description: This function can be used to change the spawn information of a specific player.
tags: ["player"]
---

## Description

This function can be used to change the spawn information of a specific player. It allows you to automatically set someone's spawn weapons, their team, skin and spawn position, normally used in case of minigames or automatic-spawn systems. This function is more crash-safe then using SetPlayerSkin in [OnPlayerSpawn](../callbacks/OnPlayerSpawn) and/or [OnPlayerRequestClass](../callbacks/OnPlayerRequestClass), even though this has been fixed in 0.2.

| Name         | Description                                                          |
|--------------|----------------------------------------------------------------------|
| playerid     | The PlayerID of who you want to set the spawn information.           |
| team         | The Team-ID of the chosen player.                                    |
| skin         | The [skin](../resources/skins) which the player will spawn with.     |
| Float:spawnX | The X-coordinate of the player's spawn position.                     |
| Float:spawnY | The Y-coordinate of the player's spawn position.                     |
| Float:spawnZ | The Z-coordinate of the player's spawn position.                     |
| Float:angle  | The direction in which the player needs to be facing after spawning. |
| weapon1      | The first spawn-weapon for the player.                               |
| ammo1        | The amount of ammunition for the primary spawnweapon.                |
| weapon2      | The second spawn-weapon for the player.                              |
| ammo2        | The amount of ammunition for the second spawnweapon.                 |
| weapon3      | The third spawn-weapon for the player.                               |
| ammo3        | The amount of ammunition for the third spawnweapon.                  |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerRequestClass(playerid, classid)
{
    // This simple example demonstrates how to spawn every player automatically with
    // CJ's skin, which is number 0. The player will spawn in Las Venturas, with
    // 36 Sawnoff-Shotgun rounds and 150 Tec9 rounds.
    SetSpawnInfo(playerid, NO_TEAM, 0, 1958.33, 1343.12, 15.36, 269.15, WEAPON_SAWEDOFF, 36, WEAPON_UZI, 150, WEAPON_FIST, 0);
}
```

## Notes

:::warning

In case you don't need to set a team to the player, make sure that the "team" parameter is set to NO_TEAM (255).
Team ID 0 in open.mp is a valid team while in SA-MP it is not (SA-MP bug).

:::

## Related Functions

- [SetPlayerSkin](SetPlayerSkin): Set a player's skin.
- [SetPlayerTeam](SetPlayerTeam): Set a player's team.
- [SpawnPlayer](SpawnPlayer): Force a player to spawn.

## Related Resources

- [Skin IDs](../resources/skins)
- [Weapon IDs](../resources/weaponids)
