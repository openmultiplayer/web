---
title: GetPlayerScore
sidebar_label: GetPlayerScore
description: 获取玩家通过SetPlayerScore设置的分数
tags: ["玩家"]
---

## 描述

该函数用于获取玩家通过[SetPlayerScore](SetPlayerScore)设置的分数值

| 参数名   | 说明                  |
| -------- | --------------------- |
| playerid | 需要获取分数的玩家 ID |

## 返回值

返回玩家的当前分数值

## 示例代码

```c
public OnPlayerCommandText(playerid,text[])
{
    if (!strcmp(cmdtext, "/score", true))
    {
        new string[32];
        format(string, sizeof(string), "你的分数: %i", GetPlayerScore(playerid));
        SendClientMessage(playerid, COLOR_ORANGE, string);
        return 1;
    }
    return 0;
}
```

## 相关函数

- [SetPlayerScore](SetPlayerScore): 设置玩家分数
- [GetPlayerPing](GetPlayerPing): 获取玩家网络延迟
