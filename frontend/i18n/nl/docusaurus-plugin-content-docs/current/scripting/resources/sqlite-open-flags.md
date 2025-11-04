---
title: "SQLite Open‑flags"
sidebar_label: "SQLite Open‑flags"
description: SQLite open‑flags definities.
---

:::note
Gebruikt door [DB_Open](../functions/db_open).
:::

| Definitie                | Opmerking     |
| ------------------------ | ------------- |
| UNKNOWN_SQLITE_OPEN      |               |
| SQLITE_OPEN_READONLY     |               |
| SQLITE_OPEN_READWRITE    |               |
| SQLITE_OPEN_CREATE       |               |
| SQLITE_OPEN_DELETEONCLOSE| VFS vereist   |
| SQLITE_OPEN_EXCLUSIVE    | VFS vereist   |
| SQLITE_OPEN_AUTOPROXY    | VFS vereist   |
| SQLITE_OPEN_URI          |               |
| SQLITE_OPEN_MEMORY       |               |
| SQLITE_OPEN_MAIN_DB      | VFS vereist   |
| SQLITE_OPEN_TEMP_DB      | VFS vereist   |
| SQLITE_OPEN_TRANSIENT_DB | VFS vereist   |
| SQLITE_OPEN_MAIN_JOURNAL | VFS vereist   |
| SQLITE_OPEN_TEMP_JOURNAL | VFS vereist   |
| SQLITE_OPEN_SUBJOURNAL   | VFS vereist   |
| SQLITE_OPEN_SUPER_JOURNAL| VFS vereist   |
| SQLITE_OPEN_NOMUTEX      |               |
| SQLITE_OPEN_FULLMUTEX    |               |
| SQLITE_OPEN_SHAREDCACHE  |               |
| SQLITE_OPEN_PRIVATECACHE |               |
| SQLITE_OPEN_WAL          | VFS vereist   |
| SQLITE_OPEN_NOFOLLOW     |               |
| SQLITE_OPEN_EXRESCODE    |               |

:::note
Meer over VFS: https://www.sqlite.org/c3ref/vfs.html
:::


