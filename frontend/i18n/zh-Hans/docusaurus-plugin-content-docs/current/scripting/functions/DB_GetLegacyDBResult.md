---
title: DB_GetLegacyDBResult
sidebar_label: DB_GetLegacyDBResult
description: 获取通过DB_ExecuteQuery分配的SQLite查询结果内存句柄
keywords:
  - sqlite
tags: ["sqlite"]
---

## 描述

该函数用于获取通过[DB_ExecuteQuery](DB_ExecuteQuery)执行的 SQLite 数据库查询结果的内存句柄。

| 参数名          | 说明                                                       |
| --------------- | ---------------------------------------------------------- |
| DBResult:result | 数据库查询句柄（由[DB_ExecuteQuery](DB_ExecuteQuery)返回） |

## 返回值

返回数据库查询结果集句柄的内存地址（十六进制格式）。

## 示例

```c
static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // 建立数据库连接
    gDBConnectionHandle = DB_Open("example.db");

    if (gDBConnectionHandle)
    {
        // 执行数据库查询
        new DBResult:result_set = DB_ExecuteQuery(gDBConnectionHandle, "SELECT * FROM `examples`");
        print("成功连接数据库 \"example.db\"");

        if (result_set)
        {
            // 输出传统查询结果内存句柄
            printf("传统查询结果内存句柄: 0x%x", DB_GetLegacyDBResult(result_set));
            DB_FreeResultSet(result_set);  // 释放结果集
        }
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
- [DB_GetFieldFloat](DB_GetFieldFloat): 通过索引获取浮点数据
- [DB_GetFieldFloatByName](DB_GetFieldFloatByName): 通过名称获取浮点数据
- [DB_GetMemHandle](DB_GetMemHandle): 获取数据库连接内存句柄
- [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): 调试用-获取数据库连接数
- [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): 调试用-获取结果集数量
