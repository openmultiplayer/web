---
title: SetPlayerHealth
sidebar_label: SetPlayerHealth
description: 设置玩家的生命值
tags: ["玩家"]
---

## 描述

设置玩家的生命值

| 参数名       | 说明                                                             |
| ------------ | ---------------------------------------------------------------- |
| playerid     | 要设置生命值的玩家 ID                                            |
| Float:health | 要设置的生命值。游戏界面显示的最大生命值为 100，但可设置更高数值 |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定玩家不存在）

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/heal", cmdtext, true))
    {
        // 将玩家生命值恢复至满
        SetPlayerHealth(playerid, 100.0);
        return 1;
    }
    if (!strcmp("/kill", cmdtext, true))
    {
        // 使玩家死亡
        SetPlayerHealth(playerid, 0.0);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

- 当生命值设为 0.0 或负数时，玩家会立即死亡
- 当生命值低于 10.0 或超过 98303.0 时，生命值条会闪烁

:::

:::warning

实际获取的生命值会被取整：设置 50.15 将得到 50.0

:::

## 相关函数

- [GetPlayerHealth](GetPlayerHealth): 获取玩家当前生命值
- [GetPlayerArmour](GetPlayerArmour): 获取玩家护甲值
- [SetPlayerArmour](SetPlayerArmour): 设置玩家护甲值
