---
title: GetPlayerGravity
sidebar_label: GetPlayerGravity
description: 获取玩家当前重力值
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家当前的重力值设置

| 参数名   | 说明                    |
| -------- | ----------------------- |
| playerid | 需要获取重力值的玩家 ID |

## 返回值

玩家的重力值（浮点数值）

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/mygravity", true))
    {
        new string[32];
        format(string, sizeof(string), "你的当前重力值: %f", GetPlayerGravity(playerid));
        SendClientMessage(playerid, 0xFFFF00FF, string);
        return 1;
    }
    return 0;
}
```

## 相关函数

- [SetPlayerGravity](SetPlayerGravity): 设置玩家重力值
- [GetGravity](GetGravity): 获取全局重力值
- [SetGravity](SetGravity): 设置全局重力值
