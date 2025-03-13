---
title: db_get_field_assoc_float
sidebar_label: db_get_field_assoc_float
description: 通过字段名称获取当前结果行的浮点数值。
keywords:
  - sqlite
---

<LowercaseNoteZH_CN />

## 描述

通过字段名称从当前结果行中获取浮点数值。

| 参数名            | 说明                                       |
| ----------------- | ------------------------------------------ |
| DBResult:dbresult | 查询结果句柄（由[db_query](db_query)返回） |
| field[]           | 目标字段名称                               |

## 返回值

以浮点数形式返回获取的字段值。

## 示例

```c
// 示例模块

// ...

Float:Examples_CalculateSum(DB:dbConnectionHandle)
{
    // 返回值变量
    new Float:ret;

    // 执行数据库查询
    new DBResult:db_result_set = db_query(dbConnectionHandle, "SELECT `value` FROM `examples`");

    if (db_result_set)
    {
        // 遍历结果集
        do
        {
            // 将'value'字段的浮点数值累加到返回值
            ret += db_get_field_assoc_float(db_result_set, "value");
        }
        while (db_next_row(db_result_set));  // 跳转至下一行

        // 释放结果集
        db_free_result(db_result_set);
    }

    return ret;
}
```

```c
// 主游戏模式文件

// ...

#include <examples>

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
        printf("计算结果总和: %f", Examples_CalculateSum(gDBConnectionHandle));
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
- [db_get_mem_handle](db_get_mem_handle): 获取数据库内存句柄
- [db_get_result_mem_handle](db_get_result_mem_handle): 获取查询结果内存句柄
- [db_debug_openfiles](db_debug_openfiles): 调试数据库连接数
- [db_debug_openresults](db_debug_openresults): 调试查询结果数
