---
title: db_field_name
sidebar_label: db_field_name
description: 返回指定索引处的字段名称。
keywords:
  - sqlite
---

<LowercaseNoteZH_CN />

## 描述

通过字段索引获取查询结果中的字段名称。

| 参数名            | 说明                                       |
| ----------------- | ------------------------------------------ |
| DBResult:dbresult | 查询结果句柄（由[db_query](db_query)返回） |
| field             | 要获取的字段索引（从 0 开始）              |
| result[]          | 存储字段名称的字符数组                     |
| maxlength         | 字段名称的最大存储长度                     |

## 返回值

- **1** - 结果集句柄有效且操作成功
- **0** - 结果集句柄无效或操作失败

## 示例

```c
static DB:gDBConnectionHandle;

public OnGameModeInit()
{
    // ...

    // 建立数据库连接
    gDBConnectionHandle = db_open("example.db");

    if (gDBConnectionHandle)
    {
        // 从'join_log'表中选择第一条记录
        new DBResult:db_result_set = db_query(gDBConnectionHandle, "SELECT * FROM `join_log` LIMIT 1");

        if (db_result_set)
        {
            // 获取结果集字段总数
            new columns = db_num_fields(db_result_set);

            // 预分配字段名称存储空间
            new field_name[32];

            // 遍历所有字段索引
            for (new index; index < columns; index++)
            {
                // 将第index个字段名称存入field_name
                db_field_name(db_result_set, index, field_name, sizeof(field_name));

                // 输出字段信息
                printf("字段索引 %d 名称: \"%s\"", index, field_name);
            }

            // 释放结果集
            db_free_result(db_result_set);
        }
    }
    else
    {
        print("无法连接数据库 \"example.db\"");
    }
}

public OnGameModeExit()
{
    // 关闭数据库连接
    if (db_close(gDBConnectionHandle))
    {
        gDBConnectionHandle = DB:0; // 重置句柄
    }
    return 1;
}
```

## 注意事项

:::warning

使用非法的结果集句柄将导致服务器崩溃！请始终通过[db_query](db_query)获取有效的查询结果

:::

## 相关函数

- [db_open](db_open): 建立数据库连接
- [db_close](db_close): 关闭数据库连接
- [db_query](db_query): 执行 SQL 查询
- [db_free_result](db_free_result): 释放查询结果内存
- [db_num_rows](db_num_rows): 获取结果集行数
- [db_next_row](db_next_row): 跳转至下一行
- [db_num_fields](db_num_fields): 获取字段总数
- [db_get_field](db_get_field): 通过索引获取字段值
- [db_get_field_assoc](db_get_field_assoc): 通过名称获取字段值
- [db_get_field_int](db_get_field_int): 获取整数字段值（索引）
- [db_get_field_assoc_int](db_get_field_assoc_int): 获取整数字段值（名称）
- [db_get_field_float](db_get_field_float): 获取浮点字段值（索引）
- [db_get_field_assoc_float](db_get_field_assoc_float): 获取浮点字段值（名称）
- [db_get_mem_handle](db_get_mem_handle): 获取数据库内存句柄
- [db_get_result_mem_handle](db_get_result_mem_handle): 获取查询结果内存句柄
- [db_debug_openfiles](db_debug_openfiles): 调试数据库连接数
- [db_debug_openresults](db_debug_openresults): 调试查询结果数
