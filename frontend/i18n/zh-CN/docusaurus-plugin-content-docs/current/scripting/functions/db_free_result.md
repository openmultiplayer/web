---
title: db_free_result
sidebar_label: db_free_result
description: 释放由db_query分配的查询结果内存。
tags: ["sqlite"]
---

<LowercaseNoteZH_CN />

:::warning

此函数已弃用，请使用 [DB_FreeResultSet](DB_FreeResultSet)。

:::

## 描述

释放由[db_query](db_query)分配的查询结果内存。

| 参数              | 说明                                               |
| ----------------- | -------------------------------------------------- |
| DBResult:dbresult | 要释放的查询结果句柄（由[db_query](db_query)分配） |

## 返回值

- **1** - 结果集句柄有效且操作成功
- **0** - 结果集句柄无效或操作失败

## 示例

```c
// 实体存储模块

EntityStorage_SpawnAll(DB:connectionHandle)
{
    // 从"entities"表中选择所有条目
    new DBResult:db_result_set = db_query(connectionHandle, "SELECT * FROM `entities`");

    // 验证结果集有效性
    if (db_result_set)
    {
        // 执行相关操作...

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

    // 检测数据库连接状态
    if (gDBConnectionHandle)
    {
        print("成功连接数据库 \"example.db\"");
        EntityStorage_SpawnAll(gDBConnectionHandle);
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
        // 重置句柄
        gDBConnectionHandle = DB:0;
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
- [db_debug_openfiles](db_debug_openfiles): 调试数据库连接数
- [db_debug_openresults](db_debug_openresults): 调试查询结果数
