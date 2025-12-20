---
title: DB_GetMemHandle
sidebar_label: DB_GetMemHandle
description: 获取通过DB_Open建立的SQLite数据库连接的内存句柄。
tags: ["sqlite"]
---

## 描述

此函数用于获取通过[DB_Open](DB_Open)建立的 SQLite 数据库连接的内存句柄。

| 参数  | 说明                                       |
| ----- | ------------------------------------------ |
| DB:db | 数据库连接句柄（由[DB_Open](DB_Open)返回） |

## 返回值

返回数据库连接句柄的内存地址（十六进制格式）。

## 示例

```c
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
        printf("数据库连接内存句柄: 0x%x", DB_GetMemHandle(gDBConnectionHandle));
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

使用非法的数据库连接句柄将导致服务器崩溃！请始终通过[DB_Open](DB_Open)获取有效句柄

:::

## 相关函数

- [DB_Open](DB_Open): 建立 SQLite 数据库连接
- [DB_Close](DB_Close): 关闭 SQLite 数据库连接
- [DB_ExecuteQuery](DB_ExecuteQuery): 执行 SQL 查询语句
- [DB_FreeResultSet](DB_FreeResultSet): 释放查询结果内存
- [DB_GetRowCount](DB_GetRowCount): 获取结果集行数
- [DB_SelectNextRow](DB_SelectNextRow): 跳转至下一行数据
- [DB_GetFieldCount](DB_GetFieldCount): 获取结果集字段数量
- [DB_GetFieldName](DB_GetFieldName): 通过索引获取字段名称
- [DB_GetFieldString](DB_GetFieldString): 通过索引获取字符串数据
- [DB_GetFieldStringByName](DB_GetFieldStringByName): 通过名称获取字符串数据
- [DB_GetFieldInt](DB_GetFieldInt): 通过索引获取整型数据
- [DB_GetFieldIntByName](DB_GetFieldIntByName): 通过名称获取整型数据
- [DB_GetFieldFloat](DB_GetFieldFloat): 通过索引获取浮点数据
- [DB_GetFieldFloatByName](DB_GetFieldFloatByName): 通过名称获取浮点数据
- [DB_GetLegacyDBResult](DB_GetLegacyDBResult): 获取传统查询结果句柄
- [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): 调试用-获取数据库连接数
- [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): 调试用-获取结果集数量
