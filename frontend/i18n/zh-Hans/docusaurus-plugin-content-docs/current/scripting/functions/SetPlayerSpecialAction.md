---
title: SetPlayerSpecialAction
sidebar_label: SetPlayerSpecialAction
description: 设置玩家执行特殊动作。
tags: ["玩家"]
---

## 描述

设置玩家执行特殊动作。

| 参数名                  | 描述                                                |
| ----------------------- | --------------------------------------------------- |
| playerid                | 要执行特殊动作的玩家 ID                             |
| SPECIAL_ACTION:actionid | 要执行的[特殊动作类型](../resources/specialactions) |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（玩家未连接）

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/handsup", true) == 0)
    {
        SetPlayerSpecialAction(playerid, SPECIAL_ACTION_HANDSUP);
        return 1;
    }
    if (strcmp(cmdtext, "/drink", true) == 0)
    {
        SetPlayerSpecialAction(playerid, SPECIAL_ACTION_DRINK_WINE);
        return 1;
    }
    return 0;
}
```

## 重要说明

:::tip

通过设置特殊动作类型为`SPECIAL_ACTION_NONE`（无动作）来移除喷气背包时，喷射音效会持续到玩家死亡。解决方法是对玩家应用随机动画即可正确移除喷气背包。

:::

## 相关函数

- [GetPlayerSpecialAction](GetPlayerSpecialAction): 获取玩家当前特殊动作
- [ApplyAnimation](ApplyAnimation): 应用动画到玩家

## 相关资源

- [特殊动作 ID 列表](../resources/specialactions)
