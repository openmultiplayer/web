---
id: db_get_result_mem_handle
title: db_get_result_mem_handle
description: Gets the memory handle for a SQLite database result set that was allocated with `db_query`.
keywords:
    - sqlite
---

:::warning

This function starts with a lowercase letter.
This function was added in SA-MP 0.3.7 R1 and will not work in earlier versions!

:::

## Description

This function gets the memory handle for a SQLite database result set that was allocated with [db_query](db_query).

| Name  | Description                                                |
| ----- | ---------------------------------------------------------- |
| DB:db | The index of the query (returned by [db_query](db_query)). |

## Returns

Returns the memory handle of the database result set handle.

## Examples

```c
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
        new DBResult:result_set = db_query("SELECT * FROM `examples`");
        print("Successfully created a connection to database \"example.db\".");
        if (result_set)
        {
            printf("Database connection memory handle: 0x%x", db_get_result_mem_handle(result_set));
            db_free_result(result_set);
        }
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

Using an invalid handle other than zero will crash your server!
Get a valid database connection handle by using [db_query](db_query).

:::

## Related Functions

*Replace me*
