---
title: SetTeamCount
sidebar_label: SetTeamCount
description: 该函数用于设置游戏模式中使用的队伍数量。
tags: []
---

## 描述

该函数用于设置游戏模式中使用的队伍数量。虽然无实际效果，但可用于优化内部队伍管理机制。应仅在 OnGameModeInit 回调函数中使用。重要提示：可传入任意数值（如 20 亿），本函数不会产生任何实际影响。

| 参数名 | 描述                 |
| ------ | -------------------- |
| count  | 游戏模式预设队伍数量 |

## 返回值

本函数没有返回值。

## 示例

```c
public OnGameModeInit( )
{
    // 我们在此团队死斗模式中使用18个队伍，进行定义
    SetTeamCount(18);
    return 1;
}
```

## 相关函数

- [GetPlayerTeam](GetPlayerTeam): 检查玩家所在队伍
- [SetPlayerTeam](SetPlayerTeam): 设置玩家所属队伍
