---
title: DB_Open
sidebar_label: DB_Open
description: The function is used to open a connection to a SQLite database file, which is inside the `/scriptfiles` folder.
tags: ["sqlite"]
---

## Description

The function is used to open a connection to a SQLite database, which is inside the "/scriptfiles" folder.

| Name                                                                | Description                                           |
| ------------------------------------------------------------------- | ----------------------------------------------------- |
| const name[]                                                        | File name of the database                             |
| SQLITE_OPEN:flags = SQLITE_OPEN_READWRITE &#124; SQLITE_OPEN_CREATE | [Permissions / Flags](../resources/sqlite-open-flags) |

## Returns

Returns index (starting at 1) of the database connection.

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
        print("Successfully created a connection to database \"example.db\".");
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

It will create a new SQLite database file, if there is no SQLite database file with the same file name available. Close your SQLite database connection with [DB_Close](DB_Close)!

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
- [DB_GetMemHandle](DB_GetMemHandle): Get memory handle for an SQLite database that was opened with DB_Open.
- [DB_GetLegacyDBResult](DB_GetLegacyDBResult): Get memory handle for an SQLite query that was executed with DB_ExecuteQuery.
- [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): The function gets the number of open database connections for debugging purposes.
- [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): The function gets the number of open database results.

## Related Resources

- [SQLite Open Flags](../resources/sqlite-open-flags)
