---
title: AddPlayerClass
sidebar_label: AddPlayerClass
description: Nagdaragdag ng klase sa pagpili ng klase.
tags: ["player"]
---

## Description

Nagdaragdag ng klase sa pagpili ng klase. Ginagamit ang mga klase upang ang mga manlalaro ay maaaring mag-spawn ng balat na kanilang pinili.

| Name          | Description                                                                     |
| ------------- | ------------------------------------------------------------------------------- |
| modelid       | Ang balat na kung saan ang player ay pangingitlog sa.                           |
| Float:spawn_x | Ang X coordinate ng spawnpoint ng klase na ito.                                 |
| Float:spawn_y | Ang Y coordinate ng spawnpoint ng klase na ito.                                 |
| Float:spawn_z | Ang Z coordinate ng spawnpoint ng klase na ito.                                 |
| Float:z_angle | Ang direksyon kung saan dapat harapin ang manlalaro pagkatapos ng pangingitlog. |
| weapon1       | Ang unang spawn-weapon para sa player.                                          |
| weapon1_ammo  | Ang dami ng bala para sa pangunahing spawn weapon.                              |
| weapon2       | Ang pangalawang spawn-weapon para sa player.                                    |
| weapon2_ammo  | Ang dami ng bala para sa pangalawang spawn weapon.                              |
| weapon3       | Ang ikatlong spawn-weapon para sa player.                                       |
| weapon3_ammo  | Ang dami ng bala para sa ikatlong spawn weapon.                                 |

## Returns

Ang ID ng klase na kakadagdag lang.

319 kung naabot ang limitasyon ng klase (320). Ang pinakamataas na posibleng class ID ay 319.

## Examples

```c
public OnGameModeInit()
{
    // Maaaring mag-spawn ang mga manlalaro gamit ang CJ skin (0) o The Truth skin (1).
    AddPlayerClass(0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // CJ
    AddPlayerClass(1, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // The Truth
    return 1;
}
```

## Notes

:::tip

Ang maximum class ID ay 319 (simula sa 0, kaya ang kabuuang 320 na klase). Kapag naabot na ang limitasyong ito, papalitan ng anumang klase na idaragdag ang ID 319.

:::

## Related Functions

- [AddPlayerClassEx](AddPlayerClassEx): Magdagdag ng klase na may default na team.
- [SetSpawnInfo](SetSpawnInfo): Itakda ang setting ng spawn para sa isang player.
- [SetPlayerSkin](SetPlayerSkin): Itakda ang balat ng isang manlalaro.
