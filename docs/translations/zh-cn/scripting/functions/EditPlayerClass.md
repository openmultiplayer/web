---
title: EditPlayerClass
description: Edit a class data.
tags: ["class"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Edit a class data.

| Name           | Description                                                      |
|----------------|------------------------------------------------------------------|
| classid        | The class id to edit.                                            |
| team           | The team you want the player to spawn in.                        |
| skin           | The [skin](../resources/skins) which the player will spawn with. |
| Float:spawnX   | The X coordinate of the spawnpoint of this class.                |
| Float:spawnY   | The Y coordinate of the spawnpoint of this class.                |
| Float:spawnZ   | The Z coordinate of the spawnpoint of this class.                |
| Float:angle    | The direction in which the player will face after spawning.      |
| WEAPON:weapon1 | The first spawn-weapon for the player.                           |
| ammo1          | The amount of ammunition for the first spawn weapon.             |
| WEAPON:weapon2 | The second spawn-weapon for the player.                          |
| ammo2          | The amount of ammunition for the second spawn weapon.            |
| WEAPON:weapon3 | The third spawn-weapon for the player.                           |
| ammo3          | The amount of ammunition for the third spawn weapon.             |

## Examples

```c
// Edit class id 10
EditPlayerClass(10, TEAM_NONE, 299, -253.8291, 2602.9312, 62.8527, -90.0000, WEAPON_KNIFE, 1, WEAPON_MP5, 100, WEAPON_COLT45, 20);
```

## Related Functions

- [AddPlayerClass](AddPlayerClass): Adds a class.
- [AddPlayerClassEx](AddPlayerClassEx): Add a class with a default team.
- [GetAvailableClasses](GetAvailableClasses): Get the number of classes defined.

## Related Resources

- [Skin IDs](../resources/skins)
- [Weapon IDs](../resources/weaponids)
