---
title: "db_open | open.mp"
description: "The function is used to open a connection to a SQLite database file, which is inside the `/scriptfiles` folder."
canonical: https://open.mp/docs/scripting/functions/db_open
language: en
---

# db\_open

## Description

The function is used to open a connection to a SQLite database, which is inside the "/scriptfiles" folder.

| Name | Description |
| --- | --- |
| const name\[\] | File name of the database |
| SQLITE\_OPEN:flags = SQLITE\_OPEN\_READWRITE | SQLITE\_OPEN\_CREATE | [Permissions / Flags](https://open.mp/docs/scripting/resources/sqlite-open-flags) |

## Returns

Returns index (**starting at 1**) of the database connection.

## Examples

```c
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

warning

-   It will create a new SQLite database file, if there is no SQLite database file with the same file name available.
-   **Close** your SQLite database connection with [db\_close](https://open.mp/docs/scripting/functions/db_close)!

## Related Functions

-   [db\_open](https://open.mp/docs/scripting/functions/db_open): Open a connection to an SQLite database
-   [db\_close](https://open.mp/docs/scripting/functions/db_close): Close the connection to an SQLite database
-   [db\_query](https://open.mp/docs/scripting/functions/db_query): Query an SQLite database
-   [db\_free\_result](https://open.mp/docs/scripting/functions/db_free_result): Free result memory from a db\_query
-   [db\_num\_rows](https://open.mp/docs/scripting/functions/db_num_rows): Get the number of rows in a result
-   [db\_next\_row](https://open.mp/docs/scripting/functions/db_next_row): Move to the next row
-   [db\_num\_fields](https://open.mp/docs/scripting/functions/db_num_fields): Get the number of fields in a result
-   [db\_field\_name](https://open.mp/docs/scripting/functions/db_field_name): Returns the name of a field at a particular index
-   [db\_get\_field](https://open.mp/docs/scripting/functions/db_get_field): Get content of field with specified ID from current result row
-   [db\_get\_field\_assoc](https://open.mp/docs/scripting/functions/db_get_field_assoc): Get content of field with specified name from current result row
-   [db\_get\_field\_int](https://open.mp/docs/scripting/functions/db_get_field_int): Get content of field as an integer with specified ID from current result row
-   [db\_get\_field\_assoc\_int](https://open.mp/docs/scripting/functions/db_get_field_assoc_int): Get content of field as an integer with specified name from current result row
-   [db\_get\_field\_float](https://open.mp/docs/scripting/functions/db_get_field_float): Get content of field as a float with specified ID from current result row
-   [db\_get\_field\_assoc\_float](https://open.mp/docs/scripting/functions/db_get_field_assoc_float): Get content of field as a float with specified name from current result row
-   [db\_get\_mem\_handle](https://open.mp/docs/scripting/functions/db_get_mem_handle): Get memory handle for an SQLite database that was opened with db\_open.
-   [db\_get\_result\_mem\_handle](https://open.mp/docs/scripting/functions/db_get_result_mem_handle): Get memory handle for an SQLite query that was executed with db\_query.
-   [db\_debug\_openfiles](https://open.mp/docs/scripting/functions/db_debug_openfiles): The function gets the number of open database connections for debugging purposes.
-   [db\_debug\_openresults](https://open.mp/docs/scripting/functions/db_debug_openresults): The function gets the number of open database results.

## Modern SQLite Functions

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

## Related Resources

-   [SQLite Open Flags](https://open.mp/docs/scripting/resources/sqlite-open-flags)
