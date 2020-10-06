---
id: db_get_field
title: db_get_field
description: Get the content of a field from db_query.
keywords:
  - sqlite
---

:::warning

The function starts with a lowercase letter.

:::

## Description

Get the content of a field from db_query

| Name              | Description                      |
| ----------------- | -------------------------------- |
| DBResult:dbresult | The result to get the data from. |
| field             | The field to get the data from.  |
| result[]          | The result.                      |
| maxlength         | The max length of the field.     |

## Returns

Returns 1 if result set handle is valid and the column is available, otherwise 0.

## Example

```c
// examples.inc

// ...

static FindFieldIndexByName(DBResult:dbResultSet, const fieldName[])
{
    // Return value variable with default return value
    new ret = -1;

    // Field count
    new field_count = db_num_fields(dbResultSet);

    // Current field name
    new current_field_name[32];

    // Iterate through all fields
    for (new field_index; field_index < field_count; field_index++)
    {
        // Get field name
        if (db_field_name(dbResultSet, field_index, current_field_name, sizeof current_field_name))
        {
            // Compare searched field name to current field name
            if (!strcmp(fieldName, current_field_name))
            {
                // Success, store field index to return value variable
                ret = field_index;

                // Break out of the loop
                break;
            }
        }
    }

    // Return found field index or "-1"
    return ret;
}

Examples_ListNames(DB:dbConnectionHandle)
{
    // Database result set
    new DBResult:db_result_set = db_query("SELECT `name` FROM `examples`");

    // If database result set is valid
    if (db_result_set)
    {
        // Get target field index
        new target_field_index = FindFieldIndexByName(db_result_set, "name");

        // Check if field index is valid
        if (target_field_index >= 0)
        {
            // Allocate some memory to store results
            new result[256];

            // Do operations
            do
            {
                // Add value from "example" field to the return value variable
                db_get_field(db_result_set, target_field_index, result, sizeof result);
            }

            // While next row could be fetched
            while (db_next_row(db_result_set));
        }

        // Free result set
        db_free_result(db_result_set);
    }
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
        Examples_ListNames(gDBConnectionHandle);
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

Using an invalid handle other than zero will crash your server!
Get a valid database connection handle by using [db_query](db_query).

:::

## Related Functions

_Replace me_
