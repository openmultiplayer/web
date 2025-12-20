---
title: db_next_row
sidebar_label: db_next_row
description: 跳转到通过db_query分配的结果集的下一行。
tags: ["sqlite"]
---

<LowercaseNoteZH_CN />

:::warning

此函数已弃用，请使用 [DB_SelectNextRow](DB_SelectNextRow)。

:::

## 描述

此函数用于跳转到通过[db_query](db_query)分配的查询结果集的下一行。

| 参数              | 说明                                       |
| ----------------- | ------------------------------------------ |
| DBResult:dbresult | 查询结果句柄（由[db_query](db_query)返回） |

## 返回值

- **1** - 结果集句柄有效且未到达最后一行
- **0** - 结果集句柄无效或已遍历所有行

## 示例

```c
// examples.inc

// ...

Examples_ListNames(DB:dbConnectionHandle)
{
    // 执行数据库查询
    new DBResult:db_result_set = db_query(dbConnectionHandle, "SELECT `name` FROM `examples`");

    if (db_result_set)
    {
        // 预分配结果存储空间
        new result[256];

        // 遍历结果集
        do
        {
            // 通过字段名称获取数据
            db_get_field_assoc(db_result_set, "name", result, sizeof(result));
        }
        while (db_next_row(db_result_set));  // 跳转至下一行

        // 释放结果集
        db_free_result(db_result_set);
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
    gDBConnectionHandle = db_open("example.db");

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
    if (db_close(gDBConnectionHandle))
    {
        gDBConnectionHandle = DB:0;  // 重置句柄
    }
    return 1;
}
```

## 注意事项

:::warning

使用非法的结果集句柄将导致服务器崩溃！请始终通过[db_query](db_query)获取有效的查询结果

:::

## 相关函数

- [db_open](db_open): 建立 SQLite 数据库连接
- [db_close](db_close): 关闭 SQLite 数据库连接
- [db_query](db_query): 执行 SQL 查询语句
- [db_free_result](db_free_result): 释放查询结果内存
- [db_num_rows](db_num_rows): 获取结果集行数
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
