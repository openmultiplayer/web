---
title: SQLite Open Flags
sidebar_label: SQLite Open Flags
description: SQLite open flags definitions.
---

:::note

These flags are used by [DB_Open](../functions/db_open).

:::

| Definitions               | Description   |
|---------------------------|---------------|
| UNKNOWN_SQLITE_OPEN       |               |
| SQLITE_OPEN_READONLY      |               |
| SQLITE_OPEN_READWRITE     |               |
| SQLITE_OPEN_CREATE        |               |
| SQLITE_OPEN_DELETEONCLOSE | Requires VFS. |
| SQLITE_OPEN_EXCLUSIVE     | Requires VFS. |
| SQLITE_OPEN_AUTOPROXY     | Requires VFS. |
| SQLITE_OPEN_URI           |               |
| SQLITE_OPEN_MEMORY        |               |
| SQLITE_OPEN_MAIN_DB       | Requires VFS. |
| SQLITE_OPEN_TEMP_DB       | Requires VFS. |
| SQLITE_OPEN_TRANSIENT_DB  | Requires VFS. |
| SQLITE_OPEN_MAIN_JOURNAL  | Requires VFS. |
| SQLITE_OPEN_TEMP_JOURNAL  | Requires VFS. |
| SQLITE_OPEN_SUBJOURNAL    | Requires VFS. |
| SQLITE_OPEN_SUPER_JOURNAL | Requires VFS. |
| SQLITE_OPEN_NOMUTEX       |               |
| SQLITE_OPEN_FULLMUTEX     |               |
| SQLITE_OPEN_SHAREDCACHE   |               |
| SQLITE_OPEN_PRIVATECACHE  |               |
| SQLITE_OPEN_WAL           | Requires VFS. |
| SQLITE_OPEN_NOFOLLOW      |               |
| SQLITE_OPEN_EXRESCODE     |               |

:::note

Learn about VFS at https://www.sqlite.org/c3ref/vfs.html

:::
