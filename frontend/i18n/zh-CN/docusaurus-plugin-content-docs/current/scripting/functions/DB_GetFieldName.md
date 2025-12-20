---
title: DB_GetFieldName
sidebar_label: DB_GetFieldName
description: 返回指定索引处的字段名称。
tags: ["sqlite"]
---

## 描述

此函数返回指定索引处的字段名称。

| 参数                   | 说明                                                     |
| ---------------------- | -------------------------------------------------------- |
| DBResult:result        | 查询结果句柄（由[DB_ExecuteQuery](DB_ExecuteQuery)返回） |
| field                  | 要获取的字段索引（从 0 开始）                            |
| output[]               | 存储字段名称的字符数组                                   |
| size = sizeof (output) | 字符数组的最大存储长度                                   |

## 返回值

- **true** - 结果集句柄有效且操作成功
- **false** - 结果集句柄无效或操作失败

## 示例

```c
static DB:gDBConnectionHandle;

public OnGameModeInit()
{
    // ...

    // 建立数据库连接
    gDBConnectionHandle = DB_Open("example.db");

    // 检测数据库连接状态
    if (gDBConnectionHandle)
    {
        // 从'join_log'表中选择第一条记录
        new DBResult:db_result_set = DB_ExecuteQuery(gDBConnectionHandle, "SELECT * FROM `join_log` LIMIT 1");

        if (db_result_set)
        {
            // 获取结果集字段总数
            new columns = DB_GetFieldCount(db_result_set);

            // 预分配字段名称存储空间
            new field_name[32];

            // 遍历所有字段索引
            for (new index; index < columns; index++)
            {
                // 将第index个字段名称存入field_name
                DB_GetFieldName(db_result_set, index, field_name, sizeof(field_name));

                // 输出字段信息
                printf("字段索引 %d 名称: \"%s\"", index, field_name);
            }

            // 释放结果集
            DB_FreeResultSet(db_result_set);
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
    if (DB_Close(gDBConnectionHandle))
    {
        gDBConnectionHandle = DB:0;  // 重置句柄
    }
    return 1;
}
```

## 注意事项

:::warning

使用非法的结果集句柄将导致服务器崩溃！请始终通过[DB_ExecuteQuery](DB_ExecuteQuery)获取有效的查询结果

:::

## 相关函数

- [DB_Open](DB_Open): 建立 SQLite 数据库连接
- [DB_Close](DB_Close): 关闭 SQLite 数据库连接
- [DB_ExecuteQuery](DB_ExecuteQuery): 执行 SQL 查询语句
- [DB_FreeResultSet](DB_FreeResultSet): 释放查询结果内存
- [DB_GetRowCount](DB_GetRowCount): 获取结果集行数
- [DB_SelectNextRow](DB_SelectNextRow): 跳转至下一行数据
- [DB_GetFieldCount](DB_GetFieldCount): 获取结果集字段数量
- [DB_GetFieldString](DB_GetFieldString): 通过字段索引获取当前行数据
- [DB_GetFieldStringByName](DB_GetFieldStringByName): 通过字段名称获取当前行数据
- [DB_GetFieldInt](DB_GetFieldInt): 通过字段索引获取整型数据
- [DB_GetFieldIntByName](DB_GetFieldIntByName): 通过字段名称获取整型数据
- [DB_GetFieldFloat](DB_GetFieldFloat): 通过字段索引获取浮点数据
- [DB_GetFieldFloatByName](DB_GetFieldFloatByName): 通过字段名称获取浮点数据
- [DB_GetMemHandle](DB_GetMemHandle): 获取数据库内存句柄
- [DB_GetLegacyDBResult](DB_GetLegacyDBResult): 获取传统查询结果内存句柄
- [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): 调试用-获取数据库连接数
- [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): 调试用-获取结果集数量
