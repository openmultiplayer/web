---
title: TogglePlayerGhostMode
sidebar_label: TogglePlayerGhostMode
description: 切换玩家的幽灵模式。幽灵模式将禁用玩家模型之间的碰撞。
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

切换玩家的幽灵模式状态。该模式启用后将禁用玩家模型之间的物理碰撞。

| 参数名      | 说明                                |
| ----------- | ----------------------------------- |
| playerid    | 需切换模式的玩家 ID                 |
| bool:toggle | 设为'true'启用幽灵模式，'false'禁用 |

## 返回值

本函数始终返回 true（真值）。

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/幽灵模式", true))
    {
        TogglePlayerGhostMode(playerid, true);
        SendClientMessage(playerid, -1, "服务器：你已启用幽灵模式！");
        return 1;
    }
    return 0;
}
```

## 相关函数

- [GetPlayerGhostMode](GetPlayerGhostMode): 获取玩家当前幽灵模式状态
