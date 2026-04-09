---
title: DB_GetRowCount
sidebar_label: DB_GetRowCount
description: 返回通过DB_ExecuteQuery执行的查询结果中的行数。
tags: ["sqlite"]
---

## 描述

此函数用于获取通过[DB_ExecuteQuery](DB_ExecuteQuery)执行的查询结果中的行数。

| 参数              | 说明                                                     |
| ----------------- | -------------------------------------------------------- |
| DBResult:dbresult | 查询结果句柄（由[DB_ExecuteQuery](DB_ExecuteQuery)返回） |

## 返回值

返回结果集中的行数（整数类型）。

## 示例

```c
// examples.inc

// ...

Examples_CountVehicles(DB:dbConnectionHandle)
{
    // 执行数据库查询
    new DBResult:db_result_set = DB_ExecuteQuery("SELECT `uid` FROM `vehicles`");

    // 验证数据库结果集句柄有效性
    if (db_result_set)
    {
        new row_count = DB_GetRowCount(db_result_set);

        // 释放结果集
        DB_FreeResultSet(db_result_set);

        return rowcount;
    }
    return 0;
}
```

```c
// mode.pwn

// ...

#include <examples>

static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // 建立数据库连接
    gDBConnectionHandle = DB_Open("example.db");

    // 检测数据库连接状态
    if (gDBConnectionHandle)
    {
        print("成功连接数据库 \"example.db\"");
        printf("数据库中存储了 %i 辆车。", Examples_CountVehicles(gDBConnectionHandle));
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
        // 重置句柄
        gDBConnectionHandle = DB:0;
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
- [DB_SelectNextRow](DB_SelectNextRow): 跳转至下一行数据
- [DB_GetFieldCount](DB_GetFieldCount): 获取结果集字段数量
- [DB_GetFieldName](DB_GetFieldName): 通过索引获取字段名称
- [DB_GetFieldString](DB_GetFieldString): 通过索引获取字符串数据
- [DB_GetFieldStringByName](DB_GetFieldStringByName): 通过名称获取字符串数据
- [DB_GetFieldInt](DB_GetFieldInt): 通过索引获取整型数据
- [DB_GetFieldIntByName](DB_GetFieldIntByName): 通过名称获取整型数据
- [DB_GetFieldFloat](DB_GetFieldFloat): 通过索引获取浮点数据
- [DB_GetFieldFloatByName](DB_GetFieldFloatByName): 通过名称获取浮点数据
- [DB_GetMemHandle](DB_GetMemHandle): 获取数据库内存句柄
- [DB_GetLegacyDBResult](DB_GetLegacyDBResult): 获取传统查询结果句柄
- [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): 调试用-获取数据库连接数
- [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): 调试用-获取结果集数量
