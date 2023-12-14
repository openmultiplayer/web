---
title: GetPlayerClass
description: Get the class data.
tags: ["class"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the class data.

| Name          | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| classid       | The class id to get data from.                                |
| &team         | A variable in which to store the team in, passed by reference. |
| &skin         | A variable in which to store the skin in, passed by reference. |
| &Float:spawnX | A float variable in which to store the X coordinate in, passed by reference. |
| &Float:spawnY | A float variable in which to store the Y coordinate in, passed by reference. |
| &Float:spawnZ | A float variable in which to store the Z coordinate in, passed by reference. |
| &Float:angle  | A float variable in which to store the angle coordinate in, passed by reference. |
| &WEAPON:weapon1 | A variable in which to store the weapon1 in, passed by reference. |
| &ammo1 | A variable in which to store the ammo1 in, passed by reference. |
| &WEAPON:weapon2 | A variable in which to store the weapon2 in, passed by reference. |
| &ammo2 | A variable in which to store the ammo2 in, passed by reference. |
| &WEAPON:weapon3 | A variable in which to store the weapon3 in, passed by reference. |
| &ammo3 | A variable in which to store the ammo3 in, passed by reference. |

## Examples

```c
new
    classid = 10,
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

GetPlayerClass(classid, team, skin, spawnX, spawnY, spawnZ, angle, weapon1, ammo1, weapon2, ammo2, weapon3, ammo3);

printf("[Class id %d data]\n\
    team: %d\n\
    skin: %d\n\
    spawnX: %f\n\
    spawnY: %f\n\
    spawnZ: %f\n\
    angle: %f\n\
    weapon1: %d\n\
    ammo1: %d\n\
    weapon2: %d\n\
    ammo2: %d\n\
    weapon3: %d\n\
    ammo3: %d", 
    classid, team, skin, spawnX, spawnY, spawnZ, angle, weapon1, ammo1, weapon2, ammo2, weapon3, ammo3);
```

## Related Functions

- [AddPlayerClass](AddPlayerClass): Adds a class.
- [AddPlayerClassEx](AddPlayerClassEx): Add a class with a default team.
- [GetAvailableClasses](GetAvailableClasses): Get the number of classes defined.
