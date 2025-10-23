---
title: GetPVarString
sidebar_label: GetPVarString
description: 获取玩家变量的字符串值
tags: ["玩家变量", "pvar"]
---

## 描述

获取指定玩家变量的字符串值

| 名称                  | 说明                                                         |
| --------------------- | ------------------------------------------------------------ |
| playerid              | 需要获取变量的玩家 ID                                        |
| const pvar[]          | 目标变量名称（需通过[SetPVarString](SetPVarString)预先设置） |
| output[]              | 存储字符串的字符数组（引用传递）                             |
| len = sizeof (output) | 字符串最大缓冲长度                                           |

## 返回值

返回字符串的实际长度。若变量未设置或玩家不存在，返回 **0**

## 示例代码

```c
public OnPlayerConnect(playerid)
{
    // 保存玩家昵称到变量
    new playerName[MAX_PLAYER_NAME];
    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    SetPVarString(playerid, "PlayerName", playerName);
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // 从变量读取玩家昵称
    new playerName[MAX_PLAYER_NAME];
    GetPVarString(playerid, "PlayerName", playerName, sizeof(playerName));

    printf("%s 已阵亡。", playerName);
}
```

## 注意事项

:::warning

当返回值为 0 时（变量未设置），`output` 数组内容不会自动清空，需手动重置数组内容以避免脏数据

:::

## 相关函数

- [SetPVarString](SetPVarString): 设置玩家变量的字符串值
- [SetPVarInt](SetPVarInt): 设置玩家变量的整数值
- [GetPVarInt](GetPVarInt): 获取玩家变量的整数值
- [SetPVarFloat](SetPVarFloat): 设置玩家变量的浮点数值
- [GetPVarFloat](GetPVarFloat): 获取玩家变量的浮点数值
- [DeletePVar](DeletePVar): 删除指定玩家变量
