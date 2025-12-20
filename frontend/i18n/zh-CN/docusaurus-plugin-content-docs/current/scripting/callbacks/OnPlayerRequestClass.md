---
title: OnPlayerRequestClass
sidebar_label: OnPlayerRequestClass
description: 当玩家在职业选择界面切换职业类别（或首次进入选择界面）时触发此回调函数。
tags: ["玩家", "职业"]
---

## 描述

当玩家在职业选择界面切换职业类别（或首次进入选择界面）时触发此回调函数。

| 参数     | 说明                                                                         |
| -------- | ---------------------------------------------------------------------------- |
| playerid | 切换职业类别的玩家 ID                                                        |
| classid  | 当前查看的职业类别 ID（由[AddPlayerClass](../functions/AddPlayerClass)返回） |

## 返回值

此回调始终在滤镜脚本中优先触发

## 示例

```c
public OnPlayerRequestClass(playerid, classid)
{
    // 若选择第3号职业且非管理员，则禁止选择
    if (classid == 3 && !IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, COLOR_RED, "该皮肤仅管理员可用！");
        return 0; // 阻止选择
    }
    return 1; // 允许选择
}
```

## 注意事项

:::tip

当玩家按下 F4 键时也会触发此回调

:::

## 相关回调

以下回调函数可能与此回调相关：

- [OnPlayerRequestSpawn](OnPlayerRequestSpawn): 当玩家尝试通过职业选择界面生成时触发

## 相关函数

以下函数可能与此回调函数相关：

- [AddPlayerClass](../functions/AddPlayerClass): 添加职业类别
- [SetSpawnInfo](../functions/SetSpawnInfo): 设置玩家生成信息
- [SetPlayerTeam](../functions/SetPlayerTeam): 设置玩家队伍（影响职业选择）
