---
title: db_close
sidebar_label: db_close
description: 关闭通过`db_open`打开的SQLite数据库连接。
keywords:
  - sqlite
tags: ["sqlite"]
---

<LowercaseNoteZH_CN />

## 描述

关闭通过[db_open](db_open)建立的 SQLite 数据库连接。

| 参数名 | 说明                                               |
| ------ | -------------------------------------------------- |
| DB:db  | 要关闭的数据库连接句柄（由[db_open](db_open)返回） |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（可能由于数据库连接句柄无效）

## 示例

```c
static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // 创建数据库连接
    gDBConnectionHandle = db_open("example.db");

    // 检测数据库连接状态
    if (gDBConnectionHandle)
    {
        // 成功建立连接
        print("成功连接数据库 \"example.db\"");
    }
    else
    {
        // 连接失败
        print("无法连接数据库 \"example.db\"");
    }

    // ...

    return 1;
}

public OnGameModeExit()
{
    // 关闭已存在的数据库连接
    if (db_close(gDBConnectionHandle))
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

使用非零的无效句柄将导致服务器崩溃！请始终使用[db_open](db_open)获取有效数据库连接句柄

:::

## 相关函数

- [db_open](db_open): 建立 SQLite 数据库连接
- [db_close](db_close): 关闭 SQLite 数据库连接
- [db_query](db_query): 执行 SQL 查询语句
- [db_free_result](db_free_result): 释放查询结果内存
- [db_num_rows](db_num_rows): 获取结果集行数
- [db_next_row](db_next_row): 跳转至下一行数据
- [db_num_fields](db_num_fields): 获取结果集字段数量
- [db_field_name](db_field_name): 通过索引获取字段名称
- [db_get_field](db_get_field): 通过字段索引获取当前行数据
- [db_get_field_assoc](db_get_field_assoc): 通过字段名称获取当前行数据
- [db_get_field_int](db_get_field_int): 通过字段索引获取整型数据
- [db_get_field_assoc_int](db_get_field_assoc_int): 通过字段名称获取整型数据
- [db_get_field_float](db_get_field_float): 通过字段索引获取浮点数据
- [db_get_field_assoc_float](db_get_field_assoc_float): 通过字段名称获取浮点数据
- [db_get_mem_handle](db_get_mem_handle): 获取数据库连接内存句柄
- [db_get_result_mem_handle](db_get_result_mem_handle): 获取查询结果内存句柄
- [db_debug_openfiles](db_debug_openfiles): 调试用-获取已打开数据库连接数
- [db_debug_openresults](db_debug_openresults): 调试用-获取已打开查询结果数

## 现代 SQLite 函数

- [DB_Open](DB_Open): 建立 SQLite 数据库连接
- [DB_Close](DB_Close): 关闭 SQLite 数据库连接
- [DB_ExecuteQuery](DB_ExecuteQuery): 执行 SQL 查询语句
- [DB_FreeResultSet](DB_FreeResultSet): 释放查询结果集内存
- [DB_GetRowCount](DB_GetRowCount): 获取结果集行数
- [DB_SelectNextRow](DB_SelectNextRow): 选择下一行数据
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
- [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): 调试用-获取数据库连接数
- [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): 调试用-获取结果集数量
