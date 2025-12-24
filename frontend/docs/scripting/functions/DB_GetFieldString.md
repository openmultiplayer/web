---
title: DB_GetFieldString
sidebar_label: DB_GetFieldString
description: Get the content of a field from DB_ExecuteQuery.
tags: ["sqlite"]
---

## Description

Get the content of a field from DB_ExecuteQuery

| Name                   | Description                      |
| ---------------------- | -------------------------------- |
| DBResult:result        | The result to get the data from. |
| field                  | The field to get the data from.  |
| output[]               | The result.                      |
| size = sizeof (output) | The max length of the field.     |

## Returns

Returns **true** if result set handle is valid and the column is available, otherwise **false**.

## Example

```c
// examples.inc

// ...

static FindFieldIndexByName(DBResult:dbResultSet, const fieldName[])
{
    // Return value variable with default return value
    new ret = -1;

    // Field count
    new field_count = DB_GetFieldCount(dbResultSet);

    // Current field name
    new current_field_name[32];

    // Iterate through all fields
    for (new field_index; field_index < field_count; field_index++)
    {
        // Get field name
        if (DB_GetFieldName(dbResultSet, field_index, current_field_name, sizeof current_field_name))
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
    new DBResult:db_result_set = DB_ExecuteQuery("SELECT `name` FROM `examples`");

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
                DB_GetFieldString(db_result_set, target_field_index, result, sizeof result);
            }

            // While next row could be fetched
            while (DB_SelectNextRow(db_result_set));
        }

        // Free result set
        DB_FreeResultSet(db_result_set);
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
    gDBConnectionHandle = DB_Open("example.db");

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
    if (DB_Close(gDBConnectionHandle))
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

Using an invalid handle other than zero will crash your server! Get a valid database connection handle by using [DB_ExecuteQuery](DB_ExecuteQuery).

:::

## Related Functions

- [DB_Open](DB_Open): Open a connection to an SQLite database
- [DB_Close](DB_Close): Close the connection to an SQLite database
- [DB_ExecuteQuery](DB_ExecuteQuery): Query an SQLite database
- [DB_FreeResultSet](DB_FreeResultSet): Free result memory from a DB_ExecuteQuery
- [DB_GetRowCount](DB_GetRowCount): Get the number of rows in a result
- [DB_SelectNextRow](DB_SelectNextRow): Move to the next row
- [DB_GetFieldCount](DB_GetFieldCount): Get the number of fields in a result
- [DB_GetFieldName](DB_GetFieldName): Returns the name of a field at a particular index
- [DB_GetFieldString](DB_GetFieldString): Get content of field with specified ID from current result row
- [DB_GetFieldStringByName](DB_GetFieldStringByName): Get content of field with specified name from current result row
- [DB_GetFieldInt](DB_GetFieldInt): Get content of field as an integer with specified ID from current result row
- [DB_GetFieldIntByName](DB_GetFieldIntByName): Get content of field as an integer with specified name from current result row
- [DB_GetFieldFloat](DB_GetFieldFloat): Get content of field as a float with specified ID from current result row
- [DB_GetFieldFloatByName](DB_GetFieldFloatByName): Get content of field as a float with specified name from current result row
- [DB_GetMemHandle](DB_GetMemHandle): Get memory handle for an SQLite database that was opened with db_open.
- [DB_GetLegacyDBResult](DB_GetLegacyDBResult): Get memory handle for an SQLite query that was executed with DB_ExecuteQuery.
- [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): The function gets the number of open database connections for debugging purposes.
- [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): The function gets the number of open database results.
