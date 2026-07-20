---
title: SQLite 打开标志
sidebar_label: SQLite 打开标志
description: SQLite 数据库打开标志定义
---

:::note

这些标志用于 [DB_Open](../functions/DB_Open_Modern) 和 [db_open](../functions/db_open)。

:::

| 定义标识符                | 说明          |
| ------------------------- | ------------- |
| UNKNOWN_SQLITE_OPEN       |               |
| SQLITE_OPEN_READONLY      |               |
| SQLITE_OPEN_READWRITE     |               |
| SQLITE_OPEN_CREATE        |               |
| SQLITE_OPEN_DELETEONCLOSE | 需要 VFS 支持 |
| SQLITE_OPEN_EXCLUSIVE     | 需要 VFS 支持 |
| SQLITE_OPEN_AUTOPROXY     | 需要 VFS 支持 |
| SQLITE_OPEN_URI           |               |
| SQLITE_OPEN_MEMORY        |               |
| SQLITE_OPEN_MAIN_DB       | 需要 VFS 支持 |
| SQLITE_OPEN_TEMP_DB       | 需要 VFS 支持 |
| SQLITE_OPEN_TRANSIENT_DB  | 需要 VFS 支持 |
| SQLITE_OPEN_MAIN_JOURNAL  | 需要 VFS 支持 |
| SQLITE_OPEN_TEMP_JOURNAL  | 需要 VFS 支持 |
| SQLITE_OPEN_SUBJOURNAL    | 需要 VFS 支持 |
| SQLITE_OPEN_SUPER_JOURNAL | 需要 VFS 支持 |
| SQLITE_OPEN_NOMUTEX       |               |
| SQLITE_OPEN_FULLMUTEX     |               |
| SQLITE_OPEN_SHAREDCACHE   |               |
| SQLITE_OPEN_PRIVATECACHE  |               |
| SQLITE_OPEN_WAL           |               |
| SQLITE_OPEN_NOFOLLOW      |               |
| SQLITE_OPEN_EXRESCODE     |               |

:::note

关于 VFS 的详细信息请参考：https://www.sqlite.org/c3ref/vfs.html

:::
