---
title: SQLite 打开标志
sidebar_label: SQLite 打开标志
description: SQLite 数据库打开标志定义
---

:::note

这些标志用于 [DB_Open](../functions/db_open) 函数

:::

| 定义标识符                | 描述           |
| ------------------------- | -------------- |
| UNKNOWN_SQLITE_OPEN       | 未知打开模式   |
| SQLITE_OPEN_READONLY      | 只读模式       |
| SQLITE_OPEN_READWRITE     | 读写模式       |
| SQLITE_OPEN_CREATE        | 创建数据库     |
| SQLITE_OPEN_DELETEONCLOSE | 需要 VFS 支持  |
| SQLITE_OPEN_EXCLUSIVE     | 需要 VFS 支持  |
| SQLITE_OPEN_AUTOPROXY     | 需要 VFS 支持  |
| SQLITE_OPEN_URI           | URI 访问模式   |
| SQLITE_OPEN_MEMORY        | 内存数据库模式 |
| SQLITE_OPEN_MAIN_DB       | 需要 VFS 支持  |
| SQLITE_OPEN_TEMP_DB       | 需要 VFS 支持  |
| SQLITE_OPEN_TRANSIENT_DB  | 需要 VFS 支持  |
| SQLITE_OPEN_MAIN_JOURNAL  | 需要 VFS 支持  |
| SQLITE_OPEN_TEMP_JOURNAL  | 需要 VFS 支持  |
| SQLITE_OPEN_SUBJOURNAL    | 需要 VFS 支持  |
| SQLITE_OPEN_SUPER_JOURNAL | 需要 VFS 支持  |
| SQLITE_OPEN_NOMUTEX       | 非互斥锁模式   |
| SQLITE_OPEN_FULLMUTEX     | 完全互斥锁模式 |
| SQLITE_OPEN_SHAREDCACHE   | 共享缓存模式   |
| SQLITE_OPEN_PRIVATECACHE  | 私有缓存模式   |
| SQLITE_OPEN_WAL           | 需要 VFS 支持  |
| SQLITE_OPEN_NOFOLLOW      | 禁止符号链接   |
| SQLITE_OPEN_EXRESCODE     | 扩展错误码     |

:::note

关于 VFS 的详细信息请参考：https://www.sqlite.org/c3ref/vfs.html

:::
