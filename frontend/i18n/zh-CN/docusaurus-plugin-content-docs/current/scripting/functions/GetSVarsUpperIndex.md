---
title: GetSVarsUpperIndex
sidebar_label: GetSVarsUpperIndex
description: 获取服务器变量的最大索引值（每个服务器变量都有唯一的标识号用于查找，此函数返回当前最大索引值）。
tags: ["服务器变量"]
---

## 描述

每个服务器变量(SVar)都有唯一的标识号用于查找，此函数返回当前已存在的最大索引值。

## 示例

```c
// 将最大索引值存入变量'SVarUpperIndex'并加1
new SVarUpperIndex = GetSVarsUpperIndex() + 1;

// 该变量用于统计已设置的服务器变量数量
new sVarCount;

new sVarName[128];

for(new i = 0; i != sVarUpperIndex; i++) // 遍历所有在最大索引值以下的服务器变量ID
{
    // 首先获取服务器变量名称
    GetSVarNameAtIndex(i, sVarName, sizeof(sVarName));

    // 若变量已设置（类型非0），则计数加1
    if (GetSVarType(sVarName) != 0)
    {
        sVarCount ++;
    }
}

printf("当前共设置了 %i 个服务器变量。最大索引值（最高ID）: %i.", sVarCount, SVarUpperIndex-1);
```

## 相关函数

- [GetSVarNameAtIndex](GetSVarNameAtIndex): 通过索引获取服务器变量名称
- [GetSVarType](GetSVarType): 获取服务器变量类型
