---
title: GetPVarsUpperIndex
sidebar_label: GetPVarsUpperIndex
description: 获取玩家变量的最大索引值
tags: ["玩家变量"]
---

## 描述

玩家变量(PVar)都有唯一的标识索引，此函数返回玩家已设置的变量最大索引值

| 参数     | 说明                  |
| -------- | --------------------- |
| playerid | 需要获取索引的玩家 ID |

## 返回值

已设置的最高玩家变量索引值（从 0 开始）

## 示例代码

```c
// 将最大索引值存储在变量中并加1
new PVarUpperIndex = GetPVarsUpperIndex(playerid) + 1;

// 此变量用于统计实际设置的变量数量
new pVarCount;

new pVarName[128];

for(new i = 0; i != PVarUpperIndex; i++) // 遍历所有可能的变量索引
{
    // 首先获取变量名称
    GetPVarNameAtIndex(playerid, i, pVarName, sizeof(pVarName));

    // 若变量已设置（类型不为0），增加计数器
    if (GetPVarType(playerid, pVarName) != 0)
    {
        pVarCount++;
    }
}

new szString[128];
format(szString, sizeof(szString), "你已设置了 %i 个玩家变量，最大索引值为 %i", pVarCount, PVarUpperIndex-1);
SendClientMessage(playerid, -1, szString);
```

## 相关函数

- [GetPVarNameAtIndex](GetPVarNameAtIndex): 根据索引获取玩家变量名称
- [GetPVarType](GetPVarType): 获取玩家变量的数据类型
