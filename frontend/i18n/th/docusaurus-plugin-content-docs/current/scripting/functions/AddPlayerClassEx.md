---
title: AddPlayerClassEx
sidebar_label: AddPlayerClassEx
description: This function is exactly the same as the AddPlayerClass function, with the addition of a team parameter.
tags: ["player"]
---

## คำอธิบาย

This function is exactly the same as the AddPlayerClass function, with the addition of a team parameter.

| Name          | Description                                                 |
| ------------- | ----------------------------------------------------------- |
| teamid        | The team you want the player to spawn in.                   |
| modelid       | The skin which the player will spawn with.                  |
| Float:spawn_x | The X coordinate of the class' spawn position.              |
| Float:spawn_y | The Y coordinate of the class' spawn position.              |
| Float:spawn_z | The Z coordinate of the class' spawn position.              |
| Float:z_angle | The direction in which the player will face after spawning. |
| weapon1       | The first spawn-weapon for the player.                      |
| weapon1_ammo  | The amount of ammunition for the first spawn weapon.        |
| weapon2       | The second spawn-weapon for the player.                     |
| weapon2_ammo  | The amount of ammunition for the second spawn weapon.       |
| weapon3       | The third spawn-weapon for the player.                      |
| weapon3_ammo  | The amount of ammunition for the third spawn weapon.        |

## ส่งคืน

The ID of the class which was just added.

319 if the class limit (320) was reached. The highest possible class ID is 319.

## ตัวอย่าง

```c
public OnGameModeInit()
{
    // Players can spawn as either:
    // CJ Skin (ID 0) in team 1.
    // The Truth skin (ID 1) in team 2.
    AddPlayerClassEx(1, 0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // CJ
    AddPlayerClassEx(2, 1, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // The Truth
    return 1;
}
```

## บันทึก

:::tip

The maximum class ID is 319 (starting from 0, so a total of 320 classes). When this limit is reached, any more classes that are added will replace ID 319.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [AddPlayerClass](../../scripting/functions/AddPlayerClass.md): Add a class.
- [SetSpawnInfo](../../scripting/functions/SetSpawnInfo.md): Set the spawn setting for a player.
- [SetPlayerTeam](../../scripting/functions/SetPlayerTeam.md): Set a player's team.
- [SetPlayerSkin](../../scripting/functions/SetPlayerSkin.md): Set a player's skin.
