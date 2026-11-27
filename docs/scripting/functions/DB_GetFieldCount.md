---
title: "DB_GetFieldCount | open.mp"
description: "Gets the number of fields from the specified result set allocated with `DB_ExecuteQuery`."
canonical: https://open.mp/docs/scripting/functions/DB_GetFieldCount
language: en
---

# DB\_GetFieldCount

## Description

The function gets the number of fields from the specified result set allocated with [DB\_ExecuteQuery](https://open.mp/docs/scripting/functions/DB_ExecuteQuery).

| Name | Description |
| --- | --- |
| DBResult:dbresult | The result of [DB\_ExecuteQuery](https://open.mp/docs/scripting/functions/DB_ExecuteQuery). |

## Returns

The number of fields in the result.

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

Float:Examples_CalculateSum(DB:dbConnectionHandle)
{
    // Return value variable
    new Float:ret;

    // Database result set
    new DBResult:db_result_set = DB_ExecuteQuery("SELECT `value` FROM `examples`");

    // If database result set is valid
    if (db_result_set)
    {
        // Get target field index
        new target_field_index = FindFieldIndexByName(db_result_set, "value");

        // Check if field index is valid
        if (target_field_index >= 0)
        {
            // Do operations
            do
            {
                // Add value from "example" field to the return value variable
                ret += DB_GetFieldFloat(db_result_set, target_field_index);
            }

            // While next row could be fetched
            while (DB_SelectNextRow(db_result_set));
        }

        // Free result set
        DB_FreeResultSet(db_result_set);
    }

    // Return calculated sum
    return ret;
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
        printf("Calculated sum: %f", Examples_CalculateSum(gDBConnectionHandle));
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
