---
title: DB_GetFieldStringByName
sidebar_label: DB_GetFieldStringByName
description: Gets the contents of the field as a string with the specified field name.
keywords:
  - sqlite
tags: ["sqlite"]
---

## Description

Get the contents of field with specified name.

| Name                   | Description                        |
| ---------------------- | ---------------------------------- |
| DBResult:result        | The result to get the data from    |
| const field[]          | The fieldname to get the data from |
| output[]               | The result                         |
| size = sizeof (output) | The max length of the field        |

## Returns

Returns **true** if result set handle is valid and the column is available, otherwise **false**.

## Examples

```c
// examples.inc

// ...

Examples_ListNames(DB:dbConnectionHandle)
{
    // Database result set
    new DBResult:db_result_set = DB_ExecuteQuery("SELECT `name` FROM `examples`");

    // If database result set is valid
    if (db_result_set)
    {
        // Allocate some memory to store results
        new result[256];

        // Do operations
        do
        {
            // Add value from "example" field to the return value variable
            DB_GetFieldStringByName(db_result_set, "name", result, sizeof result);
        }

        // While next row could be fetched
        while (DB_SelectNextRow(db_result_set));

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
