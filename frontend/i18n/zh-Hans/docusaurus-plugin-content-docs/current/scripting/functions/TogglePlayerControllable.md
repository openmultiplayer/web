---
title: TogglePlayerControllable
sidebar_label: TogglePlayerControllable
description: 切换玩家角色控制状态
tags: ["玩家"]
---

## 描述

切换玩家是否能够控制其角色。该操作同时会禁用视角转动功能。

| 名称              | 描述                            |
| ----------------- | ------------------------------- |
| playerid          | 需要设置控制状态的玩家 ID       |
| bool:controllable | 'false'禁用控制，'true'启用控制 |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定玩家不存在）

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     // 当玩家输入/freezeme时冻结玩家
     if (strcmp(cmdtext, "/freezeme", true) == 0)
     {
          TogglePlayerControllable(playerid, false);
          return 1;
     }
     // 当玩家输入/unfreezeme时解冻玩家
     if (strcmp(cmdtext, "/unfreezeme", true) == 0)
     {
          TogglePlayerControllable(playerid, true);
          return 1;
     }
     return 0;
}
```

## 相关函数

- [IsPlayerControllable](IsPlayerControllable): 检测玩家是否处于可控状态
