---
title: GetPlayerHealth
sidebar_label: GetPlayerHealth
description: 获取玩家当前生命值
tags: ["玩家"]
---

## 描述

本函数用于获取玩家当前的生命值，常用于反作弊检测等场景

| 参数名        | 说明                                 |
| ------------- | ------------------------------------ |
| playerid      | 需要获取生命值的玩家 ID              |
| &Float:health | 存储生命值的浮点变量（通过引用传递） |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（玩家未连接）

玩家当前生命值将存储在指定变量中

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/doctor", true) == 0)
    {
        // 当玩家输入/doctor时，若生命值低于50则恢复至50
        new Float:health;
        GetPlayerHealth(playerid, health);

        if (health < 50.0)
        {
            SetPlayerHealth(playerid, 50.0);
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

服务端可设置极大生命值，但客户端最大显示值为 255（超过部分会循环计算：256→0，257→1）。生命值获取时会取整，如设置 50.15 将返回 50.0

:::

## 相关函数

- [SetPlayerHealth](SetPlayerHealth): 设置玩家生命值
- [GetVehicleHealth](GetVehicleHealth): 获取车辆耐久值
- [GetPlayerArmour](GetPlayerArmour): 获取玩家护甲值
