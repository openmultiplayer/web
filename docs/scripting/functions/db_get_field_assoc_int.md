---
id: db_get_field_assoc_int
title: db_get_field_assoc_int
description: Gets the contents of the field as an integer with the specified field name.
keywords:
    - sqlite
---

:::warning

This function starts with a lowercase letter.

:::

## Description

Get the contents of field as an integer with specified name.

| Name              | Description                        |
| ----------------- | ---------------------------------- |
| DBResult:dbresult | The result to get the data from    |
| field[]           | The fieldname to get the data from |

## Returns

Retrieved value as an integer.

## Example

```c
// examples.inc

// ...

Examples_CalculateSum(DB:dbConnectionHandle)
{
    // Return value variable
    new ret;

    // Database result set
    new DBResult:db_result_set = db_query("SELECT `value` FROM `examples`");

    // If database result set is valid
    if (db_result_set)
    {
        // Do operations
        do
        {
            // Add value from "example" field to the return value variable
            ret += db_get_field_assoc_int(db_result_set, "value");
        }

        // While next row could be fetched
        while (db_next_row(db_result_set));

        // Free result set
        db_free_result(db_result_set);
    }

    // Return calculated sum
    return ret;
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
        printf("Calculated sum: %d", Examples_CalculateSum(g_DBConnectionHandle));
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
