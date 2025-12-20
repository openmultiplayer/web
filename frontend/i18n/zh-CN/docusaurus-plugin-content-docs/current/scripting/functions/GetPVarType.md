---
title: GetPVarType
sidebar_label: GetPVarType
description: 获取玩家变量的数据类型（整型、浮点型或字符串）
tags: ["玩家变量"]
---

## 描述

获取指定玩家变量的数据类型（整型、浮点型或字符串）

| 参数         | 说明                      |
| ------------ | ------------------------- |
| playerid     | 需要获取变量类型的玩家 ID |
| const pvar[] | 目标变量名称（需已设置）  |

## 返回值

返回变量类型值，具体类型参见下表：

| 返回值常量            | 数值 | 说明              |
| --------------------- | ---- | ----------------- |
| PLAYER_VARTYPE_NONE   | 0    | 变量不存在/未设置 |
| PLAYER_VARTYPE_INT    | 1    | 整型变量          |
| PLAYER_VARTYPE_FLOAT  | 2    | 浮点型变量        |
| PLAYER_VARTYPE_STRING | 3    | 字符串型变量      |

## 示例代码

```c
stock PrintPVar(playerid, varname[])
{
    switch(GetPVarType(playerid, varname))
    {
        case PLAYER_VARTYPE_NONE:
        {
            return 0; // 变量未设置
        }
        case PLAYER_VARTYPE_INT:
        {
            printf("整型变量 '%s': %i", varname, GetPVarInt(playerid, varname));
        }
        case PLAYER_VARTYPE_FLOAT:
        {
            printf("浮点型变量 '%s': %f", varname, GetPVarFloat(playerid, varname));
        }
        case PLAYER_VARTYPE_STRING:
        {
            new varstring[256];
            GetPVarString(playerid, varname, varstring, sizeof(varstring));

            printf("字符串变量 '%s': %s", varname, varstring);
        }
    }
    return 1;
}

public OnPlayerConnect(playerid)
{
    SetPVarInt(playerid, "Level", 20);

    PrintPVar(playerid, "Level"); // 输出："整型变量 'Level': 20"
    return 1;
}
```

## 相关函数

- [SetPVarInt](SetPVarInt): 设置整型玩家变量
- [GetPVarInt](GetPVarInt): 获取整型玩家变量值
- [SetPVarString](SetPVarString): 设置字符串型玩家变量
- [GetPVarString](GetPVarString): 获取字符串型玩家变量值
- [SetPVarFloat](SetPVarFloat): 设置浮点型玩家变量
- [GetPVarFloat](GetPVarFloat): 获取浮点型玩家变量值
- [DeletePVar](DeletePVar): 删除玩家变量

## 相关资源

- [玩家变量类型说明](../resources/pvartypes)
