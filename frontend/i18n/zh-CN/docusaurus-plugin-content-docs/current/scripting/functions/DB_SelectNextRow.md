---
title: DB_SelectNextRow
sidebar_label: DB_SelectNextRow
description: 在DB_ExecuteQuery分配的结果集中移动到下一行。
tags: ["sqlite"]
---

## 描述

此函数用于在通过[DB_ExecuteQuery](DB_ExecuteQuery)分配的结果集中移动到下一行。

| 参数              | 说明                                                     |
| ----------------- | -------------------------------------------------------- |
| DBResult:dbresult | 查询结果句柄（由[DB_ExecuteQuery](DB_ExecuteQuery)返回） |

## 返回值

- ​**true**​ - 结果集句柄有效且未到达最后一行
- ​**false**​ - 结果集句柄无效或已遍历所有行

## 示例

```c
// examples.inc

// ...

Examples_ListNames(DB:dbConnectionHandle)
{
    // 执行数据库查询
    new DBResult:db_result_set = DB_ExecuteQuery(dbConnectionHandle, "SELECT `name` FROM `examples`");

    if (db_result_set)
    {
        // 预分配结果存储空间
        new result[256];

        // 遍历结果集
        do
        {
            // 通过字段名称获取数据
            DB_GetFieldStringByName(db_result_set, "name", result, sizeof(result));
        }
        while (DB_SelectNextRow(db_result_set)); // 跳转至下一行

        // 释放结果集
        DB_FreeResultSet(db_result_set);
    }
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
        Examples_ListNames(gDBConnectionHandle);
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

:::danger

使用非法的结果集句柄将导致服务器崩溃！请始终通过[DB_ExecuteQuery](DB_ExecuteQuery)获取有效的查询结果！

:::

## 相关函数

- [DB_Open](DB_Open): 建立 SQLite 数据库连接
- [DB_Close](DB_Close): 关闭 SQLite 数据库连接
- [DB_ExecuteQuery](DB_ExecuteQuery): 执行 SQL 查询语句
- [DB_FreeResultSet](DB_FreeResultSet): 释放查询结果内存
- [DB_GetRowCount](DB_GetRowCount): 获取结果集行数
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
