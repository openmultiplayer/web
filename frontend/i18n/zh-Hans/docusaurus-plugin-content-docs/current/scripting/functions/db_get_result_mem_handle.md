---
title: db_get_result_mem_handle
sidebar_label: db_get_result_mem_handle
description: 获取通过`db_query`分配的SQLite数据库结果集内存句柄。
keywords:
  - sqlite
---

<LowercaseNoteZH_CN />

<VersionWarnZH_CN version='SA-MP 0.3.7 R1' />

## 描述

该函数用于获取通过[db_query](db_query)分配的 SQLite 数据库结果集内存句柄。

| 参数名 | 说明                                         |
| ------ | -------------------------------------------- |
| DB:db  | 数据库查询句柄（由[db_query](db_query)返回） |

## 返回值

返回数据库查询结果集句柄的内存句柄（十六进制表示）。

## 示例

```c
static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // 建立数据库连接
    gDBConnectionHandle = db_open("example.db");

    if (gDBConnectionHandle)
    {
        // 执行数据库查询
        new DBResult:result_set = db_query(gDBConnectionHandle, "SELECT * FROM `examples`");
        print("成功连接数据库 \"example.db\"");

        if (result_set)
        {
            printf("查询结果内存句柄: 0x%x", db_get_result_mem_handle(result_set));
            db_free_result(result_set);  // 释放结果集
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
- [db_debug_openfiles](db_debug_openfiles): 调试用-获取数据库连接数
- [db_debug_openresults](db_debug_openresults): 调试用-获取查询结果数
