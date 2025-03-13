---
title: AddPlayerClass
sidebar_label: AddPlayerClass
description: 添加玩家职业到职业选择系统
tags: ["玩家", "职业"]
---

## 描述

添加一个职业到职业选择系统。职业系统允许玩家使用自选皮肤进行重生。

| 参数名         | 说明                                          |
| -------------- | --------------------------------------------- |
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
    // 玩家可选择CJ皮肤(0)或The Truth皮肤(1)重生
    AddPlayerClass(0, 1958.33, 1343.12, 15.36, 269.15, WEAPON_SAWEDOFF, 36, WEAPON_UZI, 150, WEAPON_BRASSKNUCKLE, 1); // CJ
    AddPlayerClass(1, 1958.33, 1343.12, 15.36, 269.15, WEAPON_SAWEDOFF, 36, WEAPON_UZI, 150, WEAPON_BRASSKNUCKLE, 1); // The Truth
    return 1;
}
```

## 注意事项

:::tip

最大职业 ID 为 319（从 0 开始共计 320 个职业）。达到上限后新增职业将覆盖 ID 319 的配置。

:::

## 相关函数

- [AddPlayerClassEx](AddPlayerClassEx): 添加带有默认团队的职业
- [GetAvailableClasses](GetAvailableClasses): 获取已定义的职业数量
- [EditPlayerClass](EditPlayerClass): 修改职业配置数据
- [SetSpawnInfo](SetSpawnInfo): 设置玩家重生参数
- [SetPlayerSkin](SetPlayerSkin): 设置玩家皮肤

## 相关资源

- [皮肤 ID 列表](../resources/skins)
- [武器 ID 列表](../resources/weaponids)
