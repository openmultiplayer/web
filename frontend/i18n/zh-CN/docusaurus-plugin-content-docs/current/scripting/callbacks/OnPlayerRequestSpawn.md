---
title: OnPlayerRequestSpawn
sidebar_label: OnPlayerRequestSpawn
description: 当玩家通过职业选择界面尝试生成角色时触发该回调函数（按下SHIFT或点击生成按钮）。
tags: ["玩家", "class"]
---

## 描述

当玩家通过职业选择界面尝试生成角色时触发该回调函数（按下SHIFT或点击生成按钮）。

| 参数名   | 说明                 |
| -------- | -------------------- |
| playerid | 请求生成角色的玩家ID |

## 返回值

该回调始终在滤镜脚本中优先触发，返回0将阻止其他脚本处理

## 示例

```c
public OnPlayerRequestSpawn(playerid)
{
    if (!IsPlayerAdmin(playerid)) // 非管理员玩家
    {
        SendClientMessage(playerid, -1, "您无权生成角色。");
        return 0; // 阻止生成
    }
    return 1; // 允许生成
}
```

## 注意事项

<TipNPCCallbacksZH_CN />

:::tip

如需限制玩家使用特定职业生成，需在OnPlayerRequestClass回调中保存最后查看的职业类别

:::

## 相关回调

以下回调函数可能与本回调相关：

- [OnPlayerSpawn](OnPlayerSpawn): 当玩家成功生成时触发
- [OnPlayerRequestClass](OnPlayerRequestClass): 当玩家切换职业类别时触发

## 相关函数

以下函数可能与本回调函数相关：

- [SpawnPlayer](../functions/SpawnPlayer): 强制生成玩家角色
- [SetSpawnInfo](../functions/SetSpawnInfo): 设置玩家生成信息
- [AddPlayerClass](../functions/AddPlayerClass): 添加职业类别
