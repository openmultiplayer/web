---
title: DB_GetFieldName
sidebar_label: DB_GetFieldName
description: Returns the name of the field at the specified index.
tags: ["sqlite"]
---

## Description

Returns the name of a field at a particular index.

| Name                   | Description                                                                      |
| ---------------------- | -------------------------------------------------------------------------------- |
| DBResult:result        | The result to get the data from; returned by [DB_ExecuteQuery](DB_ExecuteQuery). |
| field                  | The index of the field to get the name of.                                       |
| output[]               | The result.                                                                      |
| size = sizeof (output) | The max length of the field.                                                     |

## Returns

Returns **true** if result set handle is valid, otherwise **false**.

## Examples

```c
static DB:gDBConnectionHandle;

public OnGameModeInit()
{
    // ...

    // Create a connection to a database
    gDBConnectionHandle = DB_Open("example.db");

    // If connection to the database exists
    if (gDBConnectionHandle)
    {
        // Select first entry in table "join_log"
        new DBResult:db_result_set = DB_ExecuteQuery(g_DBConnection, "SELECT * FROM `join_log` LIMIT 1");

        // If result set handle is valid
        if (db_result_set)
        {
            // Get the number of fields from result set
            new columns = DB_GetRowCount(db_result_set);

            // Allocate some memory for storing field names
            new field_name[32];

            // Iterate through all column indices
            for (new column_index; index < column_index; index++)
            {
                // Store the name of the i indexed column name into "field_name"
                DB_GetFieldName(db_result_set, index, field_name, sizeof field_name);

                // Print "field_name"
                printf("Field name at index %d: \"%s\"", index, field_name);
            }

            // Frees the result set
            DB_FreeResultSet(db_result_set);
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
