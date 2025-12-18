---
title: db_get_field
sidebar_label: db_get_field
description: 从db_query结果中获取字段内容
tags: ["sqlite"]
---

<LowercaseNoteZH_CN />

:::warning

此函数已弃用，请使用 [DB_GetFieldString](DB_GetFieldString)。

:::

## 描述

从[db_query](db_query)结果集中获取指定字段的内容。

| 参数              | 说明                                       |
| ----------------- | ------------------------------------------ |
| DBResult:dbresult | 查询结果句柄（由[db_query](db_query)返回） |
| field             | 目标字段索引                               |
| result[]          | 存储结果的字符数组                         |
| maxlength         | 结果的最大存储长度                         |

## 返回值

- **1** - 结果集句柄有效且字段存在
- **0** - 结果集句柄无效或字段不存在

## 示例

```c
// examples.inc

// ...

static FindFieldIndexByName(DBResult:dbResultSet, const fieldName[])
{
    // 默认返回-1表示未找到
    new ret = -1;

    // 获取字段总数
    new field_count = db_num_fields(dbResultSet);

    // 当前字段名称缓存
    new current_field_name[32];

    // 遍历所有字段索引
    for (new field_index; field_index < field_count; field_index++)
    {
        // 获取字段名称
        if (db_field_name(dbResultSet, field_index, current_field_name, sizeof current_field_name))
        {
            // 匹配目标字段名称
            if (!strcmp(fieldName, current_field_name))
            {
                ret = field_index;  // 记录匹配的索引
                break;              // 提前退出循环
            }
        }
    }

    return ret;
}

Examples_ListNames(DB:dbConnectionHandle)
{
    // 执行数据库查询
    new DBResult:db_result_set = db_query(dbConnectionHandle, "SELECT `name` FROM `examples`");

    if (db_result_set)
    {
        // 获取"name"字段的索引
        new target_field_index = FindFieldIndexByName(db_result_set, "name");

        if (target_field_index >= 0)
        {
            // 预分配结果存储空间
            new result[256];

            // 遍历结果集
            do
            {
                // 获取目标字段内容
                db_get_field(db_result_set, target_field_index, result, sizeof(result));
            }
            while (db_next_row(db_result_set));  // 跳转至下一行
        }

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
- [db_next_row](db_next_row): 跳转至下一行数据
- [db_num_fields](db_num_fields): 获取结果集字段数量
- [db_field_name](db_field_name): 通过索引获取字段名称
- [db_get_field_assoc](db_get_field_assoc): 通过字段名称获取当前行数据
- [db_get_field_int](db_get_field_int): 通过字段索引获取整型数据
- [db_get_field_assoc_int](db_get_field_assoc_int): 通过字段名称获取整型数据
- [db_get_field_float](db_get_field_float): 通过字段索引获取浮点数据
- [db_get_field_assoc_float](db_get_field_assoc_float): 通过字段名称获取浮点数据
- [db_get_mem_handle](db_get_mem_handle): 获取数据库内存句柄
- [db_get_result_mem_handle](db_get_result_mem_handle): 获取查询结果内存句柄
- [db_debug_openfiles](db_debug_openfiles): 调试数据库连接数
- [db_debug_openresults](db_debug_openresults): 调试查询结果数
