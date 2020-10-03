---
id: db_num_rows
title: db_num_rows
description: Returns the number of rows from a db_query.
keywords:
    - sqlite
---

:::warning

This function starts with a lowercase letter.

:::

## Description

Returns the number of rows from a db_query

| Name              | Description            |
| ----------------- | ---------------------- |
| DBResult:dbresult | The result of db_query |

## Returns

The number of rows in the result.

## Examples

```c
// examples.inc

// ...

Examples_ListNames(DB:dbConnectionHandle)
{
    // Database result set
    new DBResult:db_result_set = db_query("SELECT `name` FROM `examples`");

    // If database result set is valid
    if (db_result_set)
    {
        // Allocate some memory to store results
        new result[256];

        // Do operations
        do
        {
            // Add value from "example" field to the return value variable
            db_get_field_assoc(db_result_set, "name", result, sizeof result);
        }

        // While next row could be fetched
        while (db_next_row(db_result_set));

        // Free result set
        db_free_result(db_result_set);
    }
}
```

```c
// mode.pwn

// ...

#include <examples>

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
        Examples_ListNames(g_DBConnectionHandle);
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
