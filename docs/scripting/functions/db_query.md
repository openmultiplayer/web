---
id: db_query
title: db_query
description: This function is used to execute an SQL query on an opened SQLite database.
keywords:
    - sqlite
---

:::warning

This function starts with a lowercase letter.

:::

## Description

This function is used to execute an SQL query on an opened SQLite database.

| Name    | Description                   |
| ------- | ----------------------------- |
| DB:db   | The database handle to query. |
| query[] | The query to execute.         |

## Returns

The query result index (starting at 1) if successful, otherwise 0.

## Examples

```c
// entity_storage.inc

EntityStorage_SpawnAll(DB:connectionHandle)
{
    // Select all entries in table "entities"
    new DBResult:db_result_set = db_query(db_handle, "SELECT * FROM `entities`");
    
    // If database result set handle is valid
    if (db_result_set)
    {
        // Do something...

        // Free the result set
        db_free_result(db_result_set);
    }
}
```

```c
// mode.pwn

#include <entity_storage>

static DB:g_DBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // Create a connection to a database
    g_DBConnectionHandle = db_open("example.db");

    // If connection to the database exists
    if (g_DBConnectionHandle)
    {
        // Successfully created a connection to the database
        print("Successfully created a connection to database \"example.db\".");
        EntityStorage_SpawnAll();
    }
    else
    {
        // Failed to create a connection to the database
        print("Failed to open a connection to database \"example.db\".");
    }

    // ...

    return 1;
}

public OnGameModeExit()
{
    // Close the connection to the database if connection is open
    if (db_close(g_DBConnectionHandle))
    {
        // Extra cleanup
        g_DBConnectionHandle = DB:0;
    }

    // ...

    return 1;
}
```

## Notes

:::warning

Always free results by using [db_free_result](db_free_result)!

:::

## Related Functions

*Replace me*
