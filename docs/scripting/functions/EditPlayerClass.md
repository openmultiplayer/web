---
title: "EditPlayerClass | open.mp"
description: "Edit a class data."
canonical: https://open.mp/docs/scripting/functions/EditPlayerClass
language: en
---

# EditPlayerClass

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Edit a class data.

| Name | Description |
| --- | --- |
| classid | The class id to edit. |
| team | The team you want the player to spawn in. |
| skin | The [skin](https://open.mp/docs/scripting/resources/skins) which the player will spawn with. |
| Float:spawnX | The X coordinate of the spawnpoint of this class. |
| Float:spawnY | The Y coordinate of the spawnpoint of this class. |
| Float:spawnZ | The Z coordinate of the spawnpoint of this class. |
| Float:angle | The direction in which the player will face after spawning. |
| WEAPON:weapon1 | The first spawn-weapon for the player. |
| ammo1 | The amount of ammunition for the first spawn weapon. |
| WEAPON:weapon2 | The second spawn-weapon for the player. |
| ammo2 | The amount of ammunition for the second spawn weapon. |
| WEAPON:weapon3 | The third spawn-weapon for the player. |
| ammo3 | The amount of ammunition for the third spawn weapon. |

## Examples

```c
// Edit class id 10
EditPlayerClass(10, TEAM_NONE, 299, -253.8291, 2602.9312, 62.8527, -90.0000, WEAPON_KNIFE, 1, WEAPON_MP5, 100, WEAPON_COLT45, 20);
```

## Related Functions

-   [AddPlayerClass](https://open.mp/docs/scripting/functions/AddPlayerClass): Adds a class.
-   [AddPlayerClassEx](https://open.mp/docs/scripting/functions/AddPlayerClassEx): Add a class with a default team.
-   [GetAvailableClasses](https://open.mp/docs/scripting/functions/GetAvailableClasses): Get the number of classes defined.

## Related Resources

-   [Skin IDs](https://open.mp/docs/scripting/resources/skins)
-   [Weapon IDs](https://open.mp/docs/scripting/resources/weaponids)
