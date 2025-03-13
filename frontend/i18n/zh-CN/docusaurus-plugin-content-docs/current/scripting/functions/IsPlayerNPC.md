---
title: IsPlayerNPC
sidebar_label: IsPlayerNPC
description: 验证玩家身份是否为非玩家角色（NPC）
tags: ["玩家", "非玩家角色"]
---

## 描述

检测指定玩家是否属于系统控制的非玩家角色（NPC）

| 参数名   | 说明              |
| -------- | ----------------- |
| playerid | 需要检测的玩家 ID |

## 返回值

**true** - 目标为 NPC 角色

**false** - 目标为真实玩家

## 示例代码

```c
public OnPlayerConnect(playerid)
{
    if (IsPlayerNPC(playerid))
    {
        SendClientMessageToAll(-1, "有NPC角色接入服务器！");
        return 1;
    }

    // 以下代码仅在真实玩家连接时执行
}
```

## 相关函数

- [ConnectNPC](ConnectNPC): 建立 NPC 角色连接
- [IsPlayerAdmin](IsPlayerAdmin): 验证玩家管理员权限状态
