---
title: DB_GetLegacyDBResult
sidebar_label: DB_GetLegacyDBResult
description: Gets the memory handle for a SQLite database result set that was allocated with `DB_ExecuteQuery`.
tags: ["sqlite"]
---

## Description

The function gets the memory handle for a SQLite database result set that was allocated with [DB_ExecuteQuery](DB_ExecuteQuery).

| Name            | Description                                                              |
| --------------- | ------------------------------------------------------------------------ |
| DBResult:result | The index of the query (returned by [DB_ExecuteQuery](DB_ExecuteQuery)). |

## Returns

Returns the memory handle of the database result set handle.

## Examples

```c
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
        new DBResult:result_set = DB_ExecuteQuery("SELECT * FROM `examples`");
        print("Successfully created a connection to database \"example.db\".");
        if (result_set)
        {
            printf("Database connection memory handle: 0x%x", DB_GetLegacyDBResult(result_set));
            DB_FreeResultSet(result_set);
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
