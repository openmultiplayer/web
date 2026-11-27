---
title: "DB_GetFieldName | open.mp"
description: "Returns the name of the field at the specified index."
canonical: https://open.mp/docs/scripting/functions/DB_GetFieldName
language: en
---

# DB\_GetFieldName

## Description

Returns the name of a field at a particular index.

| Name | Description |
| --- | --- |
| DBResult:result | The result to get the data from; returned by [DB\_ExecuteQuery](https://open.mp/docs/scripting/functions/DB_ExecuteQuery). |
| field | The index of the field to get the name of. |
| output\[\] | The result. |
| size = sizeof (output) | The max length of the field. |

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
