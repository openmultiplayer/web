---
title: "DB_GetRowCount | open.mp"
description: "Returns the number of rows from a DB_ExecuteQuery."
canonical: https://open.mp/docs/scripting/functions/DB_GetRowCount
language: en
---

# DB\_GetRowCount

## Description

Returns the number of rows from a DB\_ExecuteQuery

| Name | Description |
| --- | --- |
| DBResult:dbresult | The result of [DB\_ExecuteQuery](https://open.mp/docs/scripting/functions/DB_ExecuteQuery) |

## Returns

The number of rows in the result.

## Examples

```c
// examples.inc

// ...

Examples_CountVehicles(DB:dbConnectionHandle)
{
    // Database result set
    new DBResult:db_result_set = DB_ExecuteQuery("SELECT `uid` FROM `vehicles`");

    // If database result set is valid
    if (db_result_set)
    {
        new row_count = DB_GetRowCount(db_result_set);

        // Free result set
        DB_FreeResultSet(db_result_set);

        return rowcount;
    }
    return 0;
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
        printf("%i vehicles are stored in the database", Examples_CountVehicles(gDBConnectionHandle));
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

warning

Using an invalid handle other than zero will crash your server! Get a valid database connection handle by using [DB\_ExecuteQuery](https://open.mp/docs/scripting/functions/DB_ExecuteQuery).

## Related Functions

-   [DB\_Open](https://open.mp/docs/scripting/functions/DB_Open_Modern): Open a connection to an SQLite database
-   [DB\_Close](https://open.mp/docs/scripting/functions/DB_Close_Modern): Close the connection to an SQLite database
-   [DB\_ExecuteQuery](https://open.mp/docs/scripting/functions/DB_ExecuteQuery): Query an SQLite database
-   [DB\_FreeResultSet](https://open.mp/docs/scripting/functions/DB_FreeResultSet): Free result memory from a DB\_ExecuteQuery
-   [DB\_SelectNextRow](https://open.mp/docs/scripting/functions/DB_SelectNextRow): Move to the next row
-   [DB\_GetFieldCount](https://open.mp/docs/scripting/functions/DB_GetFieldCount): Get the number of fields in a result
-   [DB\_GetFieldName](https://open.mp/docs/scripting/functions/DB_GetFieldName): Returns the name of a field at a particular index
-   [DB\_GetFieldString](https://open.mp/docs/scripting/functions/DB_GetFieldString): Get content of field with specified ID from current result row
-   [DB\_GetFieldStringByName](https://open.mp/docs/scripting/functions/DB_GetFieldStringByName): Get content of field with specified name from current result row
-   [DB\_GetFieldInt](https://open.mp/docs/scripting/functions/DB_GetFieldInt): Get content of field as an integer with specified ID from current result row
-   [DB\_GetFieldIntByName](https://open.mp/docs/scripting/functions/DB_GetFieldIntByName): Get content of field as an integer with specified name from current result row
-   [DB\_GetFieldFloat](https://open.mp/docs/scripting/functions/DB_GetFieldFloat): Get content of field as a float with specified ID from current result row
-   [DB\_GetFieldFloatByName](https://open.mp/docs/scripting/functions/DB_GetFieldFloatByName): Get content of field as a float with specified name from current result row
-   [DB\_GetMemHandle](https://open.mp/docs/scripting/functions/DB_GetMemHandle): Get memory handle for an SQLite database that was opened with DB\_Open.
-   [DB\_GetLegacyDBResult](https://open.mp/docs/scripting/functions/DB_GetLegacyDBResult): Get memory handle for an SQLite query that was executed with DB\_ExecuteQuery.
-   [DB\_GetDatabaseConnectionCount](https://open.mp/docs/scripting/functions/DB_GetDatabaseConnectionCount): The function gets the number of open database connections for debugging purposes.
-   [DB\_GetDatabaseResultSetCount](https://open.mp/docs/scripting/functions/DB_GetDatabaseResultSetCount): The function gets the number of open database results.
