---
title: GetSVarType
sidebar_label: GetSVarType
description: 获取服务器变量的类型（整型/浮点型/字符串型）
tags: ["服务器变量", "svar"]
---

## 描述

获取服务器变量的数据类型（整型、浮点型或字符串型）

| 参数名       | 说明                       |
| ------------ | -------------------------- |
| const svar[] | 要获取类型的服务器变量名称 |

## 返回值

返回服务器变量的[类型](../resources/svartypes)

## 示例

```c
stock PrintSVar(varname[])
{
    switch(GetSVarType(varname))
    {
        case SERVER_VARTYPE_NONE:
        {
            return 0;
        }
        case SERVER_VARTYPE_INT:
        {
            printf("整型变量 '%s': %i", varname, GetSVarInt(varname));
        }
        case SERVER_VARTYPE_FLOAT:
        {
            printf("浮点型变量 '%s': %f", varname, GetSVarFloat(varname));
        }
        case SERVER_VARTYPE_STRING:
        {
            new varstring[256];
            GetSVarString(varname, varstring);

            printf("字符串变量 '%s': %s", varname, varstring);
        }
    }
    return 1;
}

public OnGameModeInit()
{
    SetSVarInt("Version", 37);

    PrintSVar("Version"); // 输出：整型变量 'Version': 37
    return 1;
}
```

## 相关函数

- [SetSVarInt](SetSVarInt): 设置整型服务器变量
- [GetSVarInt](GetSVarInt): 获取整型服务器变量
- [SetSVarString](SetSVarString): 设置字符串型服务器变量
- [GetSVarString](GetSVarString): 获取字符串型服务器变量
- [SetSVarFloat](SetSVarFloat): 设置浮点型服务器变量
- [GetSVarFloat](GetSVarFloat): 获取浮点型服务器变量
- [DeleteSVar](DeleteSVar): 删除服务器变量

## 相关资源

- [服务器变量类型](../resources/svartypes)
