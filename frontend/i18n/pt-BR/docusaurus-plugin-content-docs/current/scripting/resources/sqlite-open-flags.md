---
title: SQLite Open Flags
sidebar_label: SQLite Open Flags
description: "SQLite definições de sinalizadores abertos."
---


:::note

Esses sinalizadores são usados por [DB_Open](../functions/DB_Open_Modern) e [db_open](../functions/db_open).

:::

| Definitions | Descrição |
| ------------------------- | ------------- |
| UNKNOWN_SQLITE_OPEN |               |
| SQLITE_OPEN_READONLY |               |
| SQLITE_OPEN_READWRITE |               |
| SQLITE_OPEN_CREATE |               |
| SQLITE_OPEN_DELETEONCLOSE | Requer VFS. |
| SQLITE_OPEN_EXCLUSIVE | Requer VFS. |
| SQLITE_OPEN_AUTOPROXY | Requer VFS. |
| SQLITE_OPEN_URI |               |
| SQLITE_OPEN_MEMORY |               |
| SQLITE_OPEN_MAIN_DB | Requer VFS. |
| SQLITE_OPEN_TEMP_DB | Requer VFS. |
| SQLITE_OPEN_TRANSIENT_DB | Requer VFS. |
| SQLITE_OPEN_MAIN_JOURNAL | Requer VFS. |
| SQLITE_OPEN_TEMP_JOURNAL | Requer VFS. |
| SQLITE_OPEN_SUBJOURNAL | Requer VFS. |
| SQLITE_OPEN_SUPER_JOURNAL | Requer VFS. |
| SQLITE_OPEN_NOMUTEX |               |
| SQLITE_OPEN_FULLMUTEX |               |
| SQLITE_OPEN_SHAREDCACHE |               |
| SQLITE_OPEN_PRIVATECACHE |               |
| SQLITE_OPEN_WAL | Requer VFS. |
| SQLITE_OPEN_NOFOLLOW |               |
| SQLITE_OPEN_EXRESCODE |               |

:::note

Saiba mais sobre essas bandeiras em https://www.sqlite.org/c3ref/open.html

Saiba mais sobre VFS em https://www.sqlite.org/c3ref/vfs.html

:::
