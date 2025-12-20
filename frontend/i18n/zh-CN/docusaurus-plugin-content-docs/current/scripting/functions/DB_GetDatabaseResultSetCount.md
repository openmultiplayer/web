---
title: DB_GetDatabaseResultSetCount
sidebar_label: DB_GetDatabaseResultSetCount
description: 获取当前已打开的数据库查询结果集数量
tags: ["sqlite"]
---

## 描述

此函数用于获取当前已打开的数据库查询结果集数量。

| 参数 | 说明             |
| ---- | ---------------- |
| 无   | 此函数不需要参数 |

## 返回值

返回当前已打开的 SQLite 数据库查询结果集数量（整数类型）。

## 示例

```c
printf("当前数据库结果集数量: %d", DB_GetDatabaseResultSetCount());
```

## 相关函数

- [DB_Open](DB_Open): 建立 SQLite 数据库连接
- [DB_Close](DB_Close): 关闭 SQLite 数据库连接
- [DB_ExecuteQuery](DB_ExecuteQuery): 执行 SQL 查询语句
- [DB_FreeResultSet](DB_FreeResultSet): 释放查询结果集内存
- [DB_GetRowCount](DB_GetRowCount): 获取结果集行数
- [DB_SelectNextRow](DB_SelectNextRow): 跳转至下一行数据
- [DB_GetFieldCount](DB_GetFieldCount): 获取结果集字段数量
- [DB_GetFieldName](DB_GetFieldName): 通过索引获取字段名称
- [DB_GetFieldString](DB_GetFieldString): 通过字段索引获取字符串数据
- [DB_GetFieldStringByName](DB_GetFieldStringByName): 通过字段名称获取字符串数据
- [DB_GetFieldInt](DB_GetFieldInt): 通过字段索引获取整型数据
- [DB_GetFieldIntByName](DB_GetFieldIntByName): 通过字段名称获取整型数据
- [DB_GetFieldFloat](DB_GetFieldFloat): 通过字段索引获取浮点数据
- [DB_GetFieldFloatByName](DB_GetFieldFloatByName): 通过字段名称获取浮点数据
- [DB_GetMemHandle](DB_GetMemHandle): 获取数据库连接内存句柄
- [DB_GetLegacyDBResult](DB_GetLegacyDBResult): 获取传统查询结果内存句柄
- [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): 调试用-获取数据库连接数
- [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): 调试用-获取结果集数量
