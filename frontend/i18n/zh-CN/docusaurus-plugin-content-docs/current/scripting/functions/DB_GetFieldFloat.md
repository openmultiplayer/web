---
title: DB_GetFieldFloat
sidebar_label: DB_GetFieldFloat
description: 通过字段索引从查询结果中获取浮点数值。
keywords:
  - sqlite
tags: ["sqlite"]
---

## 描述

该函数用于通过字段索引从[DB_ExecuteQuery](DB_ExecuteQuery)分配的查询结果中获取浮点数值。

| 参数名          | 说明                                                     |
| --------------- | -------------------------------------------------------- |
| DBResult:result | 查询结果句柄（由[DB_ExecuteQuery](DB_ExecuteQuery)返回） |
| field = 0       | 目标字段索引（默认从 0 开始）                            |

## 返回值

以浮点数形式返回获取的字段值。

## 示例

```c
// 示例模块

// ...

static FindFieldIndexByName(DBResult:dbResultSet, const fieldName[])
{
    // 默认返回-1表示未找到
    new ret = -1;

    // 获取字段总数
    new field_count = DB_GetFieldCount(dbResultSet);

    // 当前字段名称缓存
    new current_field_name[32];

    // 遍历所有字段
    for (new field_index; field_index < field_count; field_index++)
    {
        // 获取字段名称
        if (DB_GetFieldName(dbResultSet, field_index, current_field_name, sizeof current_field_name))
        {
            // 匹配目标字段名称
            if (!strcmp(fieldName, current_field_name))
            {
                ret = field_index;  // 记录匹配的索引
                break;              // 提前退出循环
            }
        }
    }
    return ret;
}

Float:Examples_CalculateSum(DB:dbConnectionHandle)
{
    // 返回值变量
    new Float:ret;

    // 执行数据库查询
    new DBResult:db_result_set = DB_ExecuteQuery(dbConnectionHandle, "SELECT `value` FROM `examples`");

    if (db_result_set)
    {
        // 获取目标字段索引
        new target_field_index = FindFieldIndexByName(db_result_set, "value");

        if (target_field_index >= 0)
        {
            // 遍历结果集
            do
            {
                // 累加浮点数值
                ret += DB_GetFieldFloat(db_result_set, target_field_index);
            }
            while (DB_SelectNextRow(db_result_set)); // 跳转至下一行
        }

        // 释放结果集
        DB_FreeResultSet(db_result_set);
    }
    return ret;
}
```

```c
// 主游戏模式文件

// ...

#include <examples>

static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // 建立数据库连接
    gDBConnectionHandle = DB_Open("example.db");

    if (gDBConnectionHandle)
    {
        print("成功连接数据库 \"example.db\"");
        printf("计算结果总和: %f", Examples_CalculateSum(gDBConnectionHandle));
    }
    else
    {
        print("无法连接数据库 \"example.db\"");
    }

    return 1;
}

public OnGameModeExit()
{
    // 关闭数据库连接
    if (DB_Close(gDBConnectionHandle))
    {
        gDBConnectionHandle = DB:0; // 重置句柄
    }
    return 1;
}
```

## 注意事项

:::warning

使用非法的结果集句柄将导致服务器崩溃！请始终通过[DB_ExecuteQuery](DB_ExecuteQuery)获取有效的查询结果

:::

## 相关函数

- [DB_Open](DB_Open): 建立 SQLite 数据库连接
- [DB_Close](DB_Close): 关闭 SQLite 数据库连接
- [DB_ExecuteQuery](DB_ExecuteQuery): 执行 SQL 查询语句
- [DB_FreeResultSet](DB_FreeResultSet): 释放查询结果内存
- [DB_GetRowCount](DB_GetRowCount): 获取结果集行数
- [DB_SelectNextRow](DB_SelectNextRow): 跳转至下一行数据
- [DB_GetFieldCount](DB_GetFieldCount): 获取字段总数
- [DB_GetFieldName](DB_GetFieldName): 通过索引获取字段名称
- [DB_GetFieldString](DB_GetFieldString): 通过索引获取字符串数据
- [DB_GetFieldStringByName](DB_GetFieldStringByName): 通过名称获取字符串数据
- [DB_GetFieldInt](DB_GetFieldInt): 通过索引获取整型数据
- [DB_GetFieldIntByName](DB_GetFieldIntByName): 通过名称获取整型数据
- [DB_GetFieldFloatByName](DB_GetFieldFloatByName): 通过名称获取浮点数据
- [DB_GetMemHandle](DB_GetMemHandle): 获取数据库内存句柄
- [DB_GetLegacyDBResult](DB_GetLegacyDBResult): 获取传统查询结果句柄
- [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): 调试用-获取数据库连接数
- [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): 调试用-获取结果集数量
