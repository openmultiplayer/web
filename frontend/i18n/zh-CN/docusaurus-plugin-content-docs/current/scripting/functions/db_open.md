---
title: db_open
sidebar_label: db_open
description: 此函数用于建立与`/scriptfiles`目录下的SQLite数据库文件的连接。
tags: ["sqlite"]
---

<LowercaseNoteZH_CN />

## 描述

此函数用于建立与`/scriptfiles`目录下的 SQLite 数据库文件的连接。

| 参数                                                                | 说明                                       |
| ------------------------------------------------------------------- | ------------------------------------------ |
| const name[]                                                        | 数据库文件名（不含路径）                   |
| SQLITE_OPEN:flags = SQLITE_OPEN_READWRITE &#124; SQLITE_OPEN_CREATE | [权限标志](../resources/sqlite-open-flags) |

## 返回值

返回数据库连接句柄索引（从 1 开始）。

## 示例

```c
static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // 建立数据库连接
    gDBConnectionHandle = db_open("example.db");

    // 检测数据库连接状态
    if (gDBConnectionHandle)
    {
        print("成功连接数据库 \"example.db\"");
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
    if (db_close(gDBConnectionHandle))
    {
        gDBConnectionHandle = DB:0;  // 重置句柄
    }
    return 1;
}
```

## 注意事项

:::warning

当指定数据库文件不存在时，将自动创建新数据库文件！请务必使用[db_close](db_close)关闭数据库连接！

:::

## 相关函数

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
- [db_get_mem_handle](db_get_mem_handle): 获取数据库内存句柄
- [db_get_result_mem_handle](db_get_result_mem_handle): 获取查询结果内存句柄
- [db_debug_openfiles](db_debug_openfiles): 调试用-获取已打开的数据库连接数
- [db_debug_openresults](db_debug_openresults): 调试用-获取已打开的查询结果数

## 现代 SQLite 函数

- [DB_Open](DB_Open): 新版数据库连接函数
- [DB_Close](DB_Close): 新版数据库关闭函数
- [DB_ExecuteQuery](DB_ExecuteQuery): 新版 SQL 查询执行
- [DB_FreeResultSet](DB_FreeResultSet): 新版结果集内存释放
- [DB_GetRowCount](DB_GetRowCount): 获取结果集行数
- [DB_SelectNextRow](DB_SelectNextRow): 跳转至下一行
- [DB_GetFieldCount](DB_GetFieldCount): 获取字段总数
- [DB_GetFieldName](DB_GetFieldName): 通过索引获取字段名称
- [DB_GetFieldString](DB_GetFieldString): 通过索引获取字符串数据
- [DB_GetFieldStringByName](DB_GetFieldStringByName): 通过名称获取字符串数据
- [DB_GetFieldInt](DB_GetFieldInt): 通过索引获取整型数据
- [DB_GetFieldIntByName](DB_GetFieldIntByName): 通过名称获取整型数据
- [DB_GetFieldFloat](DB_GetFieldFloat): 通过索引获取浮点数据
- [DB_GetFieldFloatByName](DB_GetFieldFloatByName): 通过名称获取浮点数据
- [DB_GetMemHandle](DB_GetMemHandle): 获取数据库内存句柄
- [DB_GetLegacyDBResult](DB_GetLegacyDBResult): 获取传统查询结果句柄
- [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): 调试用-数据库连接数统计
- [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): 调试用-结果集数量统计

## 相关资源

- [SQLite 权限标志说明](../resources/sqlite-open-flags)
