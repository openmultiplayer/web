---
title: GetPlayerMoney
sidebar_label: GetPlayerMoney
description: 获取玩家当前持有的金钱数额
tags: ["玩家"]
---

## 描述

获取玩家当前持有的金钱数额

| 参数名   | 说明                  |
| -------- | --------------------- |
| playerid | 需要查询金钱的玩家 ID |

## 返回值

玩家当前持有的金钱数额

## 示例代码

```c
public OnPlayerSpawn(playerid)
{
    new string[32];
    format(string, sizeof(string), "当前金钱: $%i", GetPlayerMoney(playerid));
    SendClientMessage(playerid, 0x00FF00FF, string);
}
```

## 相关函数

- [GivePlayerMoney](GivePlayerMoney): 给予玩家金钱
- [ResetPlayerMoney](ResetPlayerMoney): 重置玩家金钱至\$0
