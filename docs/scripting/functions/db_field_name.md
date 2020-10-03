---
id: db_field_name
title: db_field_name
description: Returns the name of the field at the specified index.
keywords:
  - sqlite
---

:::warning

The function starts with a lowercase letter.

:::

## Description

Returns the name of a field at a particular index.

| Name              | Description                                                        |
| ----------------- | ------------------------------------------------------------------ |
| DBResult:dbresult | The result to get the data from; returned by [db_query](db_query). |
| field             | The index of the field to get the name of.                         |
| result[]          | The result.                                                        |
| maxlength         | The max length of the field.                                       |

## Returns

Returns 1 if result set handle is valid, otherwise 0.

## Examples

```c
static DB:gDBConnectionHandle;

public OnGameModeInit()
{
    // ...

    // Create a connection to a database
    gDBConnectionHandle = db_open("example.db");

    // If connection to the database exists
    if (gDBConnectionHandle)
    {
        // Select first entry in table "join_log"
        new DBResult:db_result_set = db_query(g_DBConnection, "SELECT * FROM `join_log` LIMIT 1");

        // If result set handle is valid
        if (db_result_set)
        {
            // Get the number of fields from result set
            new columns = db_num_fields(db_result_set);

            // Allocate some memory for storing field names
            new field_name[32];

            // Iterate through all column indices
            for (new column_index; index < column_index; index++)
            {
                // Store the name of the i indexed column name into "field_name"
                db_field_name(db_result_set, index, field_name, sizeof field_name);

                // Print "field_name"
                printf("Field name at index %d: \"%s\"", index, field_name);
            }

            // Frees the result set
            db_free_result(db_result_set);
        }
    }
    else
    {
        // Failed to create a connection to the database
        print("Failed to open a connection to database \"example.db\".");
    }
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
