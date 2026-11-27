---
title: "SQLite Open Flags | open.mp"
description: "SQLite open flags definitions."
canonical: https://open.mp/docs/scripting/resources/sqlite-open-flags
language: en
---

# SQLite Open Flags

note

These flags are used by [DB\_Open](https://open.mp/docs/scripting/functions/DB_Open_Modern) and [db\_open](https://open.mp/docs/scripting/functions/db_open).

| Definitions | Description |
| --- | --- |
| UNKNOWN\_SQLITE\_OPEN |  |
| SQLITE\_OPEN\_READONLY |  |
| SQLITE\_OPEN\_READWRITE |  |
| SQLITE\_OPEN\_CREATE |  |
| SQLITE\_OPEN\_DELETEONCLOSE | Requires VFS. |
| SQLITE\_OPEN\_EXCLUSIVE | Requires VFS. |
| SQLITE\_OPEN\_AUTOPROXY | Requires VFS. |
| SQLITE\_OPEN\_URI |  |
| SQLITE\_OPEN\_MEMORY |  |
| SQLITE\_OPEN\_MAIN\_DB | Requires VFS. |
| SQLITE\_OPEN\_TEMP\_DB | Requires VFS. |
| SQLITE\_OPEN\_TRANSIENT\_DB | Requires VFS. |
| SQLITE\_OPEN\_MAIN\_JOURNAL | Requires VFS. |
| SQLITE\_OPEN\_TEMP\_JOURNAL | Requires VFS. |
| SQLITE\_OPEN\_SUBJOURNAL | Requires VFS. |
| SQLITE\_OPEN\_SUPER\_JOURNAL | Requires VFS. |
| SQLITE\_OPEN\_NOMUTEX |  |
| SQLITE\_OPEN\_FULLMUTEX |  |
| SQLITE\_OPEN\_SHAREDCACHE |  |
| SQLITE\_OPEN\_PRIVATECACHE |  |
| SQLITE\_OPEN\_WAL | Requires VFS. |
| SQLITE\_OPEN\_NOFOLLOW |  |
| SQLITE\_OPEN\_EXRESCODE |  |

note

-   Learn more about these flags at [https://www.sqlite.org/c3ref/open.html](https://www.sqlite.org/c3ref/open.html)
-   Learn about VFS at [https://www.sqlite.org/c3ref/vfs.html](https://www.sqlite.org/c3ref/vfs.html)
