---
title: SpawnPlayer
sidebar_label: SpawnPlayer
description: 生成或重新生成玩家。
tags: ["玩家"]
---

## 描述

生成或重新生成玩家。

| 参数名称 | 说明                |
| -------- | ------------------- |
| playerid | 要生成的目标玩家 ID |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（玩家未连接）

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/spawn", true) == 0)
    {
        SpawnPlayer(playerid);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

已知问题：

- 若玩家处于车辆中执行生成，会导致玩家手持瓶子异常（该问题已在 open.mp 修复）

:::

## 相关函数

- [IsPlayerSpawned](IsPlayerSpawned): 检测玩家是否处于生成状态
- [SetSpawnInfo](SetSpawnInfo): 配置玩家生成参数
- [AddPlayerClass](AddPlayerClass): 添加角色职业模板

## 相关回调

- [OnPlayerSpawn](../callbacks/OnPlayerSpawn): 玩家生成完成时触发
