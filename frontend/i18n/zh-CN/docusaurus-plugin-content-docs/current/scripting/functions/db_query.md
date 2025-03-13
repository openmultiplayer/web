---
title: db_query
sidebar_label: db_query
description: 在已打开的SQLite数据库上执行SQL查询语句。
keywords:
  - sqlite
---

<LowercaseNoteZH_CN />

## 描述

该函数用于在已建立的 SQLite 数据库连接上执行 SQL 查询。

| 参数名  | 描述                  |
| ------- | --------------------- |
| DB:db   | 数据库连接句柄        |
| query[] | 要执行的 SQL 查询语句 |

## 返回值

- 执行成功返回结果集句柄索引（从 1 开始）
- 执行失败返回 0

## 示例

```c
// 实体存储模块

EntityStorage_SpawnAll(DB:connectionHandle)
{
    // 从"entities"表中查询所有记录
    new DBResult:db_result_set = db_query(connectionHandle, "SELECT * FROM `entities`");

    // 验证结果集有效性
    if (db_result_set)
    {
        // 执行数据操作...

        // 释放结果集内存
        db_free_result(db_result_set);
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

    // 建立数据库连接
    gDBConnectionHandle = db_open("example.db");

    if (gDBConnectionHandle)
    {
        print("成功连接数据库 \"example.db\"");
        EntityStorage_SpawnAll(gDBConnectionHandle);  // 加载实体数据
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
        gDBConnectionHandle = DB:0;  // 重置句柄防止重复关闭
    }
    return 1;
}
```

## 注意事项

:::danger

必须使用[db_free_result](db_free_result)释放查询结果，否则会导致内存泄漏！

:::

## 相关功能

- [db_open](db_open): 建立数据库连接
- [db_close](db_close): 关闭数据库连接
- [db_free_result](db_free_result): 释放查询结果内存
- [db_num_rows](db_num_rows): 获取结果行数
- [db_next_row](db_next_row): 遍历结果集行
- [db_num_fields](db_num_fields): 获取字段数量
- [db_field_name](db_field_name): 获取字段名称
- [db_get_field](db_get_field): 通过索引获取字段值
- [db_get_field_assoc](db_get_field_assoc): 通过名称获取字段值
- [db_get_field_int](db_get_field_int): 获取整型数据（索引）
- [db_get_field_assoc_int](db_get_field_assoc_int): 获取整型数据（名称）
- [db_get_field_float](db_get_field_float): 获取浮点数据（索引）
- [db_get_field_assoc_float](db_get_field_assoc_float): 获取浮点数据（名称）
- [db_get_mem_handle](db_get_mem_handle): 获取数据库内存地址
- [db_get_result_mem_handle](db_get_result_mem_handle): 获取查询结果内存地址
- [db_debug_openfiles](db_debug_openfiles): 调试数据库连接数
- [db_debug_openresults](db_debug_openresults): 调试结果集数量
