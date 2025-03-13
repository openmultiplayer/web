---
title: AddPlayerClassEx
sidebar_label: AddPlayerClassEx
description: 本函数与AddPlayerClass功能相同，新增团队参数
tags: ["玩家", "职业"]
---

## 描述

本函数功能与 AddPlayerClass 完全一致，额外增加团队参数支持。

| 参数名         | 说明                                          |
| -------------- | --------------------------------------------- |
| team           | 玩家所属的初始团队                            |
| skin           | 玩家重生时使用的[皮肤 ID](../resources/skins) |
| Float:spawnX   | 该职业重生点的 X 坐标                         |
| Float:spawnY   | 该职业重生点的 Y 坐标                         |
| Float:spawnZ   | 该职业重生点的 Z 坐标                         |
| Float:angle    | 玩家重生后的初始朝向角度                      |
| WEAPON:weapon1 | 玩家初始携带的第一把武器                      |
| ammo1          | 主武器的弹药数量                              |
| WEAPON:weapon2 | 玩家初始携带的第二把武器                      |
| ammo2          | 副武器的弹药数量                              |
| WEAPON:weapon3 | 玩家初始携带的第三把武器                      |
| ammo3          | 特殊武器的弹药数量                            |

## 返回值

新添加职业的 ID 编号。

若达到职业上限（320 个）则返回 319。最大有效职业 ID 为 319。

## 示例

```c
public OnGameModeInit()
{
    // 玩家可选择：
    // 团队1中的CJ皮肤（ID 0）
    // 团队2中的The Truth皮肤（ID 1）
    AddPlayerClassEx(1, 0, 1958.33, 1343.12, 15.36, 269.15, WEAPON_SAWEDOFF, 36, WEAPON_UZI, 150, WEAPON_FIST, 0); // CJ
    AddPlayerClassEx(2, 1, 1958.33, 1343.12, 15.36, 269.15, WEAPON_SAWEDOFF, 36, WEAPON_UZI, 150, WEAPON_FIST, 0); // The Truth
    return 1;
}
```

## 注意事项

:::tip

最大职业 ID 为 319（从 0 开始共计 320 个职业）。达到上限后新增职业将覆盖 ID 319 的配置。

:::

## 相关函数

- [AddPlayerClass](AddPlayerClass): 添加基础职业
- [GetAvailableClasses](GetAvailableClasses): 获取已定义的职业数量
- [EditPlayerClass](EditPlayerClass): 修改职业配置数据
- [SetSpawnInfo](SetSpawnInfo): 设置玩家重生参数
- [SetPlayerTeam](SetPlayerTeam): 设置玩家团队
- [SetPlayerSkin](SetPlayerSkin): 设置玩家皮肤

## 相关资源

- [皮肤 ID 列表](../resources/skins)
- [武器 ID 列表](../resources/weaponids)
