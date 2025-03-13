---
title: GetPlayerTeam
sidebar_label: GetPlayerTeam
description: 获取玩家所属队伍的ID
tags: ["玩家"]
---

## 描述

获取指定玩家当前所属的队伍编号

| 名称     | 说明                      |
| -------- | ------------------------- |
| playerid | 需要获取队伍信息的玩家 ID |

## 返回值

**0-254:** 玩家所属队伍 ID（0 为有效队伍）

**255:** 定义为 NO_TEAM，表示玩家未加入任何队伍

**-1:** 函数执行失败（玩家未连接）

## 示例代码

```c
enum
{
    TEAM_ONE = 1,
    TEAM_TWO
};

public OnPlayerSpawn(playerid)
{
    // 队伍1的玩家应在拉斯维加斯机场生成
    if (GetPlayerTeam(playerid) == TEAM_ONE)
    {
        SetPlayerPos(playerid, 1667.8909, 1405.5618, 10.7801);
    }
    return 1;
}
```

## 相关函数

- [SetPlayerTeam](SetPlayerTeam): 设置玩家队伍
- [SetTeamCount](SetTeamCount): 设置可用队伍数量
