---
title: AllowInteriorWeapons
sidebar_label: AllowInteriorWeapons
description: 控制是否允许在室内场景使用武器
tags: []
---

## 描述

切换是否允许玩家在室内场景使用武器。

| 参数       | 说明                                                        |
| ---------- | ----------------------------------------------------------- |
| bool:allow | 'true'允许室内使用武器（默认启用），'false'禁止室内使用武器 |

## 返回值

此函数不返回特定值。

## 示例

```c
public OnGameModeInit()
{
    // 启用室内武器使用功能
    AllowInteriorWeapons(true);
    return 1;
}
```

## 注意事项

:::warning

此函数在当前 SA-MP 版本中无效！

:::

:::tip

可通过[config.json](../../server/config.json)配置文件实现相同功能：

```json
"allow_interior_weapons": true,
```

:::

## 相关函数

- [AreInteriorWeaponsAllowed](AreInteriorWeaponsAllowed): 检测是否允许在室内使用武器
- [SetPlayerInterior](SetPlayerInterior): 设置玩家所在室内场景
- [GetPlayerInterior](GetPlayerInterior): 获取玩家当前室内场景

## 相关回调

- [OnPlayerInteriorChange](../callbacks/OnPlayerInteriorChange): 当玩家切换室内场景时触发
