---
title: "DB_GetLegacyDBResult | open.mp"
description: "Gets the memory handle for a SQLite database result set that was allocated with `DB_ExecuteQuery`."
canonical: https://open.mp/docs/scripting/functions/DB_GetLegacyDBResult
language: en
---

# DB\_GetLegacyDBResult

## Description

The function gets the memory handle for a SQLite database result set that was allocated with [DB\_ExecuteQuery](https://open.mp/docs/scripting/functions/DB_ExecuteQuery).

| Name | Description |
| --- | --- |
| DBResult:result | The index of the query (returned by [DB\_ExecuteQuery](https://open.mp/docs/scripting/functions/DB_ExecuteQuery)). |

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

warning

Using an invalid handle other than zero will crash your server! Get a valid database connection handle by using [DB\_ExecuteQuery](https://open.mp/docs/scripting/functions/DB_ExecuteQuery).

## Related Functions

-   [DB\_Open](https://open.mp/docs/scripting/functions/DB_Open_Modern): Open a connection to an SQLite database
-   [DB\_Close](https://open.mp/docs/scripting/functions/DB_Close_Modern): Close the connection to an SQLite database
-   [DB\_ExecuteQuery](https://open.mp/docs/scripting/functions/DB_ExecuteQuery): Query an SQLite database
-   [DB\_FreeResultSet](https://open.mp/docs/scripting/functions/DB_FreeResultSet): Free result memory from a DB\_ExecuteQuery
-   [DB\_GetRowCount](https://open.mp/docs/scripting/functions/DB_GetRowCount): Get the number of rows in a result
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
