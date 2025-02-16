---
title: AddPlayerClassEx
sidebar_label: AddPlayerClassEx
description: Ang function na ito ay eksaktong kapareho ng AddPlayerClass function, kasama ang pagdaragdag ng isang parameter ng koponan.
tags: ["player"]
---

## Description

Ang function na ito ay eksaktong kapareho ng AddPlayerClass function, kasama ang pagdaragdag ng isang parameter ng koponan.

| Name          | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| teamid        | Ang koponan na gusto mong ipanganak ng manlalaro.                           |
| modelid       | Ang koponan na gusto mong ipanganak ng manlalaro.                           |
| Float:spawn_x | Ang X coordinate ng posisyon ng spawn ng klase.                             |
| Float:spawn_y | Ang Y coordinate ng posisyon ng spawn ng klase.                             |
| Float:spawn_z | Ang Z coordinate ng posisyon ng spawn ng klase.                             |
| Float:z_angle | Ang direksyon kung saan haharapin ang manlalaro pagkatapos ng pangingitlog. |
| weapon1       | Ang unang spawn-weapon para sa player.                                      |
| weapon1_ammo  | Ang dami ng bala para sa unang spawn weapon.                                |
| weapon2       | Ang pangalawang spawn-weapon para sa player.                                |
| weapon2_ammo  | Ang dami ng bala para sa pangalawang spawn weapon.                          |
| weapon3       | Ang ikatlong spawn-weapon para sa player.                                   |
| weapon3_ammo  | Ang dami ng bala para sa ikatlong spawn weapon.                             |

## Returns

Ang ID ng klase na kakadagdag lang.

319 kung naabot ang limitasyon ng klase (320). Ang pinakamataas na posibleng class ID ay 319.

## Examples

```c
public OnGameModeInit()
{
    // Ang mga manlalaro ay maaaring mag-spawn bilang alinman sa:
    // CJ Skin (ID 0) sa team 1.
    // The Truth skin (ID 1) sa team 2.
    AddPlayerClassEx(1, 0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // CJ
    AddPlayerClassEx(2, 1, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // The Truth
    return 1;
}
```

## Notes

:::tip

Ang maximum class ID ay 319 (simula sa 0, kaya ang kabuuang 320 na klase). Kapag naabot na ang limitasyong ito, papalitan ng anumang klase na idaragdag ang ID 319.

:::

## Related Functions

- [AddPlayerClass](AddPlayerClass): Magdagdag ng klase.
- [SetSpawnInfo](SetSpawnInfo): Itakda ang setting ng spawn para sa isang player.
- [SetPlayerTeam](SetPlayerTeam): Magtakda ng koponan ng manlalaro.
- [SetPlayerSkin](SetPlayerSkin): Itakda ang balat ng isang manlalaro.