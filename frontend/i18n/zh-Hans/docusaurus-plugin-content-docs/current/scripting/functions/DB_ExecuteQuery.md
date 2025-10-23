---
title: DB_ExecuteQuery
sidebar_label: DB_ExecuteQuery
description: 该函数用于在已打开的SQLite数据库上执行SQL查询语句。
keywords:
  - sqlite
tags: ["sqlite"]
---

## 描述

该函数用于在已打开的 SQLite 数据库上执行 SQL 查询语句。

| 参数名           | 说明                       |
| ---------------- | -------------------------- |
| DB:db            | 要执行查询的数据库连接句柄 |
| const query[]    | 需要执行的 SQL 查询语句    |
| OPEN_MP_TAGS:... | 不定数量的任意类型参数     |

## 返回值

执行成功时返回查询结果索引（从 1 开始），失败返回 0。

## 示例

```c
// 实体存储模块

EntityStorage_SpawnAll(DB:connectionHandle)
{
    // 从"entities"表中选择所有条目
    new DBResult:db_result_set = DB_ExecuteQuery(connectionHandle, "SELECT * FROM `entities`");

    // 验证数据库结果集句柄有效性
    if (db_result_set)
    {
        // 执行相关操作...

        // 释放结果集
        DB_FreeResultSet(db_result_set);
    }
}
```

```c
// 游戏模式主文件

#include <entity_storage>

static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // 创建数据库连接
    gDBConnectionHandle = DB_Open("example.db");

    // 验证数据库连接状态
    if (gDBConnectionHandle)
    {
        print("成功连接数据库 \"example.db\"");
        EntityStorage_SpawnAll(gDBConnectionHandle);
    }
    else
    {
        print("无法连接数据库 \"example.db\"");
    }

    // ...

    return 1;
}

public OnGameModeExit()
{
    // 关闭数据库连接
    if (DB_Close(gDBConnectionHandle))
    {
        // 清理句柄
        gDBConnectionHandle = DB:0;
    }

    // ...

    return 1;
}
```

## 注意事项

:::warning

务必使用[DB_FreeResultSet](DB_FreeResultSet)释放查询结果！

:::

## 相关函数

- [DB_Open](DB_Open): 建立 SQLite 数据库连接
- [DB_Close](DB_Close): 关闭 SQLite 数据库连接
- [DB_ExecuteQuery](DB_ExecuteQuery): 执行 SQL 查询语句
- [DB_FreeResultSet](DB_FreeResultSet): 释放查询结果集内存
- [DB_GetRowCount](DB_GetRowCount): 获取结果集行数
- [DB_SelectNextRow](DB_SelectNextRow): 跳转至下一行数据
- [DB_GetFieldCount](DB_GetFieldCount): 获取结果集字段数量
- [DB_GetFieldName](DB_GetFieldName): 通过索引获取字段名称
- [DB_GetFieldString](DB_GetFieldString): 通过字段索引获取字符串数据
- [DB_GetFieldStringByName](DB_GetFieldStringByName): 通过字段名称获取字符串数据
- [DB_GetFieldInt](DB_GetFieldInt): 通过字段索引获取整型数据
- [DB_GetFieldIntByName](DB_GetFieldIntByName): 通过字段名称获取整型数据
- [DB_GetFieldFloat](DB_GetFieldFloat): 通过字段索引获取浮点数据
- [DB_GetFieldFloatByName](DB_GetFieldFloatByName): 通过字段名称获取浮点数据
- [DB_GetMemHandle](DB_GetMemHandle): 获取数据库连接内存句柄
- [DB_GetLegacyDBResult](DB_GetLegacyDBResult): 获取传统查询结果内存句柄
- [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): 调试用-获取数据库连接数量
- [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): 调试用-获取结果集数量
