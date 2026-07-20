---
title: DB_Open
sidebar_label: DB_Open
description: 此函数用于建立与`/scriptfiles`目录下的SQLite数据库文件的连接。
tags: ["sqlite"]
---

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
    gDBConnectionHandle = DB_Open("example.db");

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
    if (DB_Close(gDBConnectionHandle))
    {
        gDBConnectionHandle = DB:0;  // 重置句柄
    }
    return 1;
}
```

## 注意事项

:::warning

当指定数据库文件不存在时，将自动创建新数据库文件！请务必使用[DB_Close](DB_Close_Modern)关闭数据库连接！

:::

## 相关函数

- [DB_Open](DB_Open_Modern): 建立 SQLite 数据库连接
- [DB_Close](DB_Close_Modern): 关闭 SQLite 数据库连接
- [DB_ExecuteQuery](DB_ExecuteQuery): 执行 SQL 查询语句
- [DB_FreeResultSet](DB_FreeResultSet): 释放查询结果集内存
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
- [DB_GetMemHandle](DB_GetMemHandle): 获取通过 DB_Open 打开的 SQLite 数据库的内存句柄
- [DB_GetLegacyDBResult](DB_GetLegacyDBResult): 获取通过 DB_ExecuteQuery 执行的 SQLite 查询结果的内存句柄
- [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): 调试用-数据库连接数统计
- [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): 调试用-结果集数量统计

## 相关资源

- [SQLite 权限标志说明](../resources/sqlite-open-flags)
