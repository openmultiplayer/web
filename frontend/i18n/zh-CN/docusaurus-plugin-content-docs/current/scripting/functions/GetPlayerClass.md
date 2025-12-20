---
title: GetPlayerClass
sidebar_label: GetPlayerClass
description: 获取职业配置数据
tags: ["职业"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取已注册职业的配置数据

| 参数            | 说明                                        |
| --------------- | ------------------------------------------- |
| classid         | 要获取数据的职业 ID                         |
| &team           | 存储队伍 ID 的变量（通过引用传递）          |
| &skin           | 存储角色皮肤的变量（通过引用传递）          |
| &Float:spawnX   | 存储出生点 X 坐标的浮点变量（通过引用传递） |
| &Float:spawnY   | 存储出生点 Y 坐标的浮点变量（通过引用传递） |
| &Float:spawnZ   | 存储出生点 Z 坐标的浮点变量（通过引用传递） |
| &Float:angle    | 存储出生朝向角度的浮点变量（通过引用传递）  |
| &WEAPON:weapon1 | 存储第一主武器的变量（通过引用传递）        |
| &ammo1          | 存储第一武器弹药的变量（通过引用传递）      |
| &WEAPON:weapon2 | 存储第二主武器的变量（通过引用传递）        |
| &ammo2          | 存储第二武器弹药的变量（通过引用传递）      |
| &WEAPON:weapon3 | 存储第三主武器的变量（通过引用传递）        |
| &ammo3          | 存储第三武器弹药的变量（通过引用传递）      |

## 示例代码

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

printf("[职业ID %d 配置详情]\n\
    队伍: %d\n\
    皮肤: %d\n\
    出生点X: %f\n\
    出生点Y: %f\n\
    出生点Z: %f\n\
    朝向角度: %f\n\
    武器1: %d\n\
    弹药1: %d\n\
    武器2: %d\n\
    弹药2: %d\n\
    武器3: %d\n\
    弹药3: %d",
    classid, team, skin, spawnX, spawnY, spawnZ, angle, weapon1, ammo1, weapon2, ammo2, weapon3, ammo3);
```

## 相关函数

- [AddPlayerClass](AddPlayerClass): 添加基础职业配置
- [AddPlayerClassEx](AddPlayerClassEx): 添加带默认队伍的扩展职业配置
- [GetAvailableClasses](GetAvailableClasses): 获取已定义的职业总数
