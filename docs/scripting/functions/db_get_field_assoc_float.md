---
id: db_get_field_assoc_float
title: db_get_field_assoc_float
description: Gets the contents of the field as a floating point number with the specified field name.
keywords:
  - sqlite
---

:::warning

The function starts with a lowercase letter.

:::

## Description

The function gets the contents of the field as a floating point number from the specified field name.

| Name              | Description                         |
| ----------------- | ----------------------------------- |
| DBResult:dbresult | The result to get the data from     |
| field[]           | The field name to get the data from |

## Returns

Retrieved value as floating point number.

## Example

```c
// examples.inc

// ...

Float:Examples_CalculateSum(DB:dbConnectionHandle)
{
    // Return value variable
    new Float:ret;

    // Database result set
    new DBResult:db_result_set = db_query("SELECT `value` FROM `examples`");

    // If database result set is valid
    if (db_result_set)
    {
        // Do operations
        do
        {
            // Add value from "example" field to the return value variable
            ret += db_get_field_assoc_float(db_result_set, "value");
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

static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // Create a connection to a database
    gDBConnectionHandle = db_open("example.db");

    // If connection to the database exists
    if (gDBConnectionHandle)
    {
        // Successfully created a connection to the database
        print("Successfully created a connection to database \"example.db\".");
        printf("Calculated sum: %f", Examples_CalculateSum(gDBConnectionHandle));
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
    if (db_close(gDBConnectionHandle))
    {
        // Extra cleanup
        gDBConnectionHandle = DB:0;
    }

    // ...

    return 1;
}
```

## Notes

:::warning

Using an invalid handle other than zero will crash your server! Get a valid database connection handle by using [db_query](db_query).

:::

## Related Functions

_Replace me_
